import React from 'react'
import { IoMdSend } from "react-icons/io";

const ChatSection = (props) => {

return (
    <div className='relative bg-[url("/chat-bg.png")] bg-cover bg-center h-[100vh] w-[100vw] md:w-[70vw] p-[5vw] md:p-[2vw] flex flex-col justify-between'>
        <div className='bg- relative top-[10vw] md:top-0 h-[70vh] flex flex-col gap-2  overflow-y-auto '>
            {/* Chat History */}
            {props.chatHistory.map((chat, index) => (
                    <div 
                        key={index} 
                        className={`p-2 rounded-md max-w-[60vw] md:max-w-[50vw] text-black ${chat.sender === 'user' ? 'self-end bg-[#e2ffc7]' : 'self-start bg-[#f6f6f6]'}`}    
                    >
                        {chat.sender !== 'user' && <h3 className='font-semibold'>{chat.personality}</h3>}
                        <p>{chat?.message}</p>
                    </div>
            ))}
        </div>

        <div className='bg-[#f6f6f6] relative border rounded-xl flex justify-between items-center p-3  '>
            <textarea 
                className=' w-full focus:outline-none text-black resize-none '
                type="text" 
                rows = "2"
                placeholder={`You are chatting with ${props.personality}`} 
                value={props.input} 
                onChange={props.handleInput} 
            />
            <IoMdSend onClick={props.handleSubmit} className='text-2xl'/>
        </div>
    </div>
)
};

export default ChatSection