"use client";
import React, { useState, useRef, useEffect } from "react";
import "./chat.css";

import { BsCameraVideo } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { SlPaperClip } from "react-icons/sl";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const ChatComponent = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, []);
  return (
    <div className="chat-container">
      <div className="header-chat">
        <span>
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
            <p>ada</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>ad</p>
            <p>adcc</p>
      
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
