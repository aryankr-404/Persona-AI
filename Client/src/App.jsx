import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import axios from 'axios'
import ChatSection from './Compponents/ChatSection'
import Sidebar from './Compponents/Sidebar'


const App = () => {
  // const panelRef = useRef(null);

  const [personality, setpersonality] = useState("Hitesh");
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState('');
  const [waiting, setWaiting] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const getResponse = async(userMessage) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/chat`, {
        params: {
          prompt: userMessage,
          personality: personality
        }
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  } 

  const handleSubmit = async (e) => {
    if (input.trim() === '') return;

    const userMessage = input;
    setChatHistory(prev => [
      ...prev,
      { sender: 'user', message: userMessage },
      { sender: 'assistant', message: `${personality} is typing...`, personality: personality },
    ]);
    setInput('');
    setWaiting(true);

    // Typing effect
    let dots = 1;
    const typingInterval = setInterval(() => {
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].message = `${personality} is typing${'.'.repeat(dots)}`;
        return updatedHistory;
      });
      dots = dots === 3 ? 1 : dots + 1;
    }, 500);

    // Get the actual response
    const assistantResponse = await getResponse(userMessage);
    const assistantMessage = assistantResponse.data;

    clearInterval(typingInterval); // Stop the typing effect
    setWaiting(false);

    setChatHistory((prev) => [
      ...prev.slice(0, -1), 
      { sender: 'assistant', message: assistantMessage, personality: personality },
    ]);
  }

  const handlePersonality = (e) => {
    setpersonality(e.currentTarget.name);
  }

  return (
    <div  className= 'flex justify-between relative'>
      <Sidebar 
        handlePersonality={handlePersonality} 
        personality={personality}
        setIsPanelOpen={setIsPanelOpen}
        isPanelOpen={isPanelOpen}
      />
      <ChatSection 
        chatHistory={chatHistory}
        personality={personality} 
        handleInput={handleInput}
        handleSubmit={handleSubmit} 
        input={input}
      />
    </div>
  )
}

export default App