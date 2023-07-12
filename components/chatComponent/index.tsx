"use client";
import React, { useState, useRef, useEffect } from "react";
import "./chat.css";

import { BsCameraVideo } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { SlPaperClip } from "react-icons/sl";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

const ChatComponent = () => {
  const router = useRouter();
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // handle height if textarea make new line
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
    autoResize();
  };

  const autoResize = () => {
    const element = textareaRef.current;
    if (element) {
      element.style.height = "auto";
      element.style.height = `${element.scrollHeight}px`;
    }
  };

  // handle overfiew(content-chat) display content from bottom to top
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="chat-container">
      <div className="header-chat">
        <span onClick={() => router.push('/home')}>
          <FaChevronLeft />
        </span>
        <div className="section1">
          <div className="pict-chat"></div>
          <div>
            <p>name</p>
            <p className="online">online</p>
          </div>
        </div>
        <div className="section2">
          <div>
            <BsCameraVideo />
          </div>
          <div>
            <IoCallOutline />
          </div>
        </div>
      </div>
      
      <div className="footer-chat">
        <div className="content-chat">
          <div ref={contentRef}>
            <p>adaas</p>
          </div>
        </div>
        <div className="form">
          <textarea
            id="myTextarea"
            placeholder="Type a message"
            ref={textareaRef}
            value={textareaValue}
            onChange={handleTextareaChange}
            rows={1}
          ></textarea>
          <span>
            <SlPaperClip />
          </span>
          <button>
            <PiPaperPlaneTiltFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
