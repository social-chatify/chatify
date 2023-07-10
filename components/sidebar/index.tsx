import React from "react";
import "./sidebar.css";
import Image from "next/image";
import {BsChatDots} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {IoMdContacts} from 'react-icons/io'
import { IoCallSharp} from 'react-icons/io5'

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <Image
          src="/assets/chatifylogo.png"
          alt="Landscape picture"
          width={40}
          height={60}
        />
        <h1 className="logo-text">chatify</h1>
      </div>
      <div className="nav">
        <ul>
          <li><a><BsChatDots/></a><a>chat</a></li>
          <li><IoMdContacts/><a>connection</a></li>
          <li><IoCallSharp/><a>calls</a></li>
          <li><CgProfile/><a>profile</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
