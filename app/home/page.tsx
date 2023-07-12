'use client'

import React, { useEffect, useState } from "react";
import "./home.css";
import SideBar from "@/components/sidebar";
import InboxComponent from "@/components/inboxComponent";
import ChatComponent from "@/components/chatComponent";
import Bottombar from "@/components/bottombar";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter()
  const [width, setWidth] = useState<number>(window.innerWidth);

  // Rerender if screen changed
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const routerPage = () => {
    router.push('/chat')
  }

  const routerComponent = () => {
    console.log('ok')
  }

  return (
    <div className="wrapper">
      {width < 430 ? ( //mobile devices
        <>
          <InboxComponent route={routerPage} />
          <Bottombar />
        </>
      ) : width < 885 ? ( // tablet devices
        <>
          <SideBar />
          <InboxComponent  route={routerComponent}/>
        </>
      ) : ( // desktop devices
        <>
          <SideBar />
          <InboxComponent  route={routerComponent}/>
          <ChatComponent />
        </>
      )}
    </div>
  );
};

export default Home;
