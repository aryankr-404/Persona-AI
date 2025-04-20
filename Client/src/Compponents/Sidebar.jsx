import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";

const Sidebar = (props) => {
  
  const handleSidebar = () => {
    props.setIsPanelOpen(!props.isPanelOpen);
    if (!props.isPanelOpen) {
      gsap.to(".sidebar-panel", { x: 0, duration: 0.5 });
    } else {
      gsap.to(".sidebar-panel", { x: "-100%", duration: 0.5 });
    }
  };

  return (
    <>
    {/* <<<<<<<Large screen Device>>>>>> */}
    <div className='z-50 relative hidden md:block  '>
      <div
        className={`bg-[#f6f6f6] fixed top-0 left-0 h-[100vh] w-[90vw] md:w-[30vw] py-5 px-3`}
      >
        <h1 className="text-3xl font-semibold text-white bg-zinc-900 w-fit py-2 px-3 rounded-lg">
          Persona-AI
        </h1>
        <h2 className="mt-3 mb-5">Choose a personality you want to talk to:</h2>
        <div className="h-auto overflow-hidden flex flex-col gap-4">
          <button
           onClick={(e) => {
            props.handlePersonality(e);
          }}
            name="Hitesh"
            className={`cursor-pointer flex gap-3 items-center border p-2 rounded-lg ${props.personality === "Hitesh" ? "bg-blue-200" : ""}`}
          >
            <img
              className="rounded-full h-10"
              src="/assets/hiteshImg.jfif"
              alt=""
            />
            <h3>Hitesh Choudhary</h3>
          </button>
          <button
            onClick={(e) => {
              props.handlePersonality(e);
            }}
            name="Piyush"
            className={`cursor-pointer flex gap-3 items-center border p-2 rounded-lg ${props.personality === "Piyush" ? "bg-blue-200" : ""}`}
          >
            <img
              className="rounded-full h-10"
              src="/assets/piyushImg.jfif"
              alt=""
            />
            <h3>Piyush Garg</h3>
          </button>
        </div>
      </div>
    </div>

    {/* <<<<<<<Mobile Device>>>>>> */}
    <div className='z-50 relative md:hidden '>
      <RxHamburgerMenu 
        onClick={handleSidebar}
        className={`fixed top-5 left-5 text-3xl cursor-pointer ${
          props.isPanelOpen ? "hidden" : "block"
        }`}
      />
      <div
        className={`bg-[#f6f6f6] sidebar-panel fixed top-0 left-0 h-[100vh] w-[90vw] md:w-[30vw] py-5 px-3 transform -translate-x-full`}
      >
        <RxCross1
          onClick={handleSidebar}
          className="absolute md:top-[3vw] md:right-[2vw] md:text-[2vw] top-[8vw] right-[4vw] text-[6vw] cursor-pointer"
        />
        <h1 className="text-3xl font-semibold text-white bg-zinc-900 w-fit py-2 px-3 rounded-lg">
          Persona-AI
        </h1>
        <h2 className="mt-3 mb-5">Choose a personality you want to talk to:</h2>
        <div className="h-auto overflow-hidden flex flex-col gap-4">
          <button
           onClick={(e) => {
            handleSidebar();
            props.handlePersonality(e);
          }}
            name="Hitesh"
            className={`cursor-pointer flex gap-3 items-center border p-2 rounded-lg ${props.personality === "Hitesh" ? "bg-blue-200" : ""}`}
          >
            <img
              className="rounded-full h-10"
              src="/assets/hiteshImg.jfif"
              alt=""
            />
            <h3>Hitesh Choudhary</h3>
          </button>
          <button
            onClick={(e) => {
              handleSidebar();
              props.handlePersonality(e);
            }}
            name="Piyush"
            className={`cursor-pointer flex gap-3 items-center border p-2 rounded-lg ${props.personality === "Piyush" ? "bg-blue-200" : ""}`}
          >
            <img
              className="rounded-full h-10"
              src="/assets/piyushImg.jfif"
              alt=""
            />
            <h3>Piyush Garg</h3>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sidebar