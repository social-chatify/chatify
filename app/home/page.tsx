'use client'

import React, { useEffect, useState } from "react";
import "./home.css";
import SideBar from "@/components/sidebar";
import InboxComponent from "@/components/inboxComponent";
import ChatComponent from "@/components/chatComponent";
import Bottombar from "@/components/bottombar";

const Home = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="wrapper">
      {width < 430 ? (
        <>
          <InboxComponent />
          <Bottombar />
        </>
      ) : width < 885 ? (
        <>
          <SideBar />
          <InboxComponent />
        </>
      ) : (
        <>
          <SideBar />
          <InboxComponent />
          <ChatComponent />
        </>
      )}
    </div>
  );
};

export default Home;
