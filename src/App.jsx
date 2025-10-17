import React from "react"
import LeftSideChat from "./components/LeftSideBar/LeftSideChat";
import ChatSection from "./components/ChatSection/ChatSection";
import "./App.css";
function App() {
  return (
    <>
      <div className="FlexBox">
        <LeftSideChat />
        <ChatSection/>
      </div>
    </>
  )
}

export default App
