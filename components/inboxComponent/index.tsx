/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import "./inbox.css";
import { FaSearch } from "react-icons/fa";
import React, {FC, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";



interface inboxProps{
  route:React.MouseEventHandler
}


const InboxComponent:FC<inboxProps> = ({route}) => {
  const router = useRouter();
  const scrollEventCountRef = useRef(0);
  const contentStoryRef = useRef<HTMLDivElement>(null);
  let contentStoryWidth: number;

  // logic for scrolling story using scroll wheel , start
  useEffect(() => {
    const contentStoryElement = contentStoryRef.current;
    if (contentStoryElement) {
      contentStoryWidth = contentStoryElement.offsetWidth;
      console.log("Div height:", contentStoryWidth);
    }
  }, []);

  useEffect(() => {
    const handleScroll = (event: any) => {
      const scrollAmount = event.deltaY;

      if (
        scrollAmount < 0 &&
        scrollEventCountRef.current < contentStoryWidth / 2 &&
        contentStoryWidth > 338
      ) {
        scrollEventCountRef.current += 20;
      } else if (scrollAmount > 0 && scrollEventCountRef.current > 0) {
        scrollEventCountRef.current -= 20;
      }

      console.log("Scroll event count:", scrollEventCountRef.current);

      const contentStory = document.getElementsByClassName(
        "content-story"
      )[0] as HTMLElement;
      contentStory.style.transform = `translateX(${-scrollEventCountRef.current}px)`;
    };

    const contentStoryElement =
      document.getElementsByClassName("content-story")[0];
    contentStoryElement.addEventListener("wheel", handleScroll);

    return () => {
      contentStoryElement.removeEventListener("wheel", handleScroll);
    };
  }, []);
  // logic for scrolling story using scroll wheel ,end

  return (
    <div className="inbox-container">
      {/* search section */}
      <div className="search">
        <div>
          <FaSearch />
          <input type="text" placeholder="search" />
        </div>
      </div>

      {/* strory section */}
      <div className="story">
        <div className="content-story" ref={contentStoryRef}>
          <div className="profile-story"></div>
          <div className="profile-story"></div>
          <div className="profile-story"></div>
          <div className="profile-story"></div>
          <div className="profile-story"></div>
        </div>
      </div>

      {/* inbox section */}
      <div className="inbox-chat">
        <div className="inbox-cover">
          <div className="inbox-content" onClick={route}>
            <div className="pict-inbox"></div>
            <div className="box-inbox">
              <div className="content1">
                <a>nama</a>
                <a>text content</a>
              </div>
              <div className="content2">
                <a>04:55</a>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxComponent;
