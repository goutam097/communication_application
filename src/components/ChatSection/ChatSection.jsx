import React from "react";
import "./ChatSection.scss";
import Header from "./headerTop/Header";
import Chatwrapper from "./Chatsection/Chatwrapper";


const ChatSection = () => {
  return (
    <>
      <div className="chatWrap">
        <Header />
        <Chatwrapper />
      </div>
    </>
  );
};

export default ChatSection;
