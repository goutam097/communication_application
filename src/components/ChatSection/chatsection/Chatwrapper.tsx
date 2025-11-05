import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Chatwrapper.scss";
import ChatSendSection from "../ChatSendSection/ChatSendSection";
import ChatImageGrid from "./ChatImageGrid";




const Chatwrapper = ({ images = [] }) => {
  // Reply drawer state
  const [showChat, setShowChat] = useState(false);
  const [replyMessage, setReplyMessage] = useState({
    name: "User",
    reply_to_message: "Hello! This is a sample message to reply to.",
  });

  const openChat = useCallback((payload) => {
    if (payload?.name || payload?.reply_to_message) {
      setReplyMessage((prev) => ({ ...prev, ...payload }));
    }
    setShowChat(true);
  }, []);

  const closeChat = useCallback(() => setShowChat(false), []);

  // --- Audio Player ---
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (sec) => {
    if (!Number.isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleLoadedMetadata = () => {
    const d = audioRef.current?.duration;
    setDuration(Number.isFinite(d) ? d : 0);
  };

  const handleTimeUpdate = () => {
    const t = audioRef.current?.currentTime;
    setCurrentTime(Number.isFinite(t) ? t : 0);
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch {
      // ignore autoplay / user gesture errors
    }
  };

  const handleSeek = (e) => {
    const value = Number(e.target.value);
    if (!audioRef.current || !duration || !Number.isFinite(value)) return;
    const seekTo = (value / 100) * duration;
    audioRef.current.currentTime = seekTo;
    setCurrentTime(seekTo);
  };

  const progressPercent =
    duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleKeyActivate = (e, payload) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openChat(payload);
    }
  };

  return (
    <>
      <div className="SimpleBarContent">
        <ul className="ListChat">
          {/* Left bubble */}
          <li className="Left">
            <div className="WrapChat">
              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="CTextWrap">
                    <p>Good Morning</p>
                    <p className="ChatTime">
                      <i className="fa-solid fa-clock" aria-hidden="true"></i> 10:00
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="Reply"
                onClick={() =>
                  openChat({ name: "Alex", reply_to_message: "Good Morning" })
                }
                onKeyDown={(e) =>
                  handleKeyActivate(e, {
                    name: "Alex",
                    reply_to_message: "Good Morning",
                  })
                }
                role="button"
                tabIndex={0}
                aria-label="Reply to message"
              >
                <i className="fa-solid fa-reply" aria-hidden="true"></i>
              </div>
            </div>
          </li>

          {/* Right text bubble */}
          <li className="Right">
            <div className="WrapChat">
              <div className="EditDropDown" role="menu" aria-label="Message actions">
                <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
                <ul className="dropdown-menu">
                  <li>
                    <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i> Edit
                  </li>
                  <li
                    onClick={() =>
                      openChat({ name: "You", reply_to_message: "Good Morning" })
                    }
                  >
                    <i className="fa-solid fa-reply" aria-hidden="true"></i> Reply
                  </li>
                  <li>
                    <i className="fa-solid fa-trash" aria-hidden="true"></i> Delete
                  </li>
                </ul>
              </div>

              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="CTextWrap">
                    <p>Good Morning</p>
                    <p className="ChatTime">
                      <i className="fa-solid fa-clock" aria-hidden="true"></i> 10:00{" "}
                      <i
                        className="fa-solid fa-check-double SentIcon"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Right image grid bubble */}
          <li className="Right">
            <div className="WrapChat">
              <div className="EditDropDown" role="menu" aria-label="Message actions">
                <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
                <ul className="dropdown-menu">
                  <li>
                    <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>{" "}
                    Edit
                  </li>
                  <li
                    onClick={() =>
                      openChat({ name: "You", reply_to_message: "Check these images" })
                    }
                  >
                    <i className="fa-solid fa-reply" aria-hidden="true"></i> Reply
                  </li>
                  <li>
                    <i className="fa-solid fa-trash" aria-hidden="true"></i> Delete
                  </li>
                </ul>
              </div>

              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="message-content">
                    <ChatImageGrid images={images} />
                    <p className="ChatTime">
                      <i className="fa-solid fa-clock" aria-hidden="true"></i> 10:00{" "}
                      <i
                        className="fa-solid fa-check-double SentIcon"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Right audio bubble */}
          <li className="Right">
            <div className="WrapChat">
              <div className="EditDropDown" role="menu" aria-label="Message actions">
                <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
                <ul className="dropdown-menu">
                  <li>
                    <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>{" "}
                    Edit
                  </li>
                  <li
                    onClick={() =>
                      openChat({ name: "You", reply_to_message: "Audio message" })
                    }
                  >
                    <i className="fa-solid fa-reply" aria-hidden="true"></i> Reply
                  </li>
                  <li>
                    <i className="fa-solid fa-trash" aria-hidden="true"></i> Delete
                  </li>
                </ul>
              </div>

              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="CTextWrap">
                    <div className="audio-player">
                      <audio
                        ref={audioRef}
                        src="https://sts-christtube-dev.s3.ap-south-1.amazonaws.com/messenger/652e1b9f8ce21a66349878be/short-background-music-for-video-vlog-summer-dance-tropical-house-158706-1760422531531_80.mp3"
                        preload="metadata"
                        onLoadedMetadata={handleLoadedMetadata}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={() => setIsPlaying(false)}
                      />
                      <button
                        className="play-button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause audio" : "Play audio"}
                        type="button"
                      >
                        <i
                          className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}
                          aria-hidden="true"
                        ></i>
                      </button>

                      <input
                        className="seek-bar"
                        type="range"
                        min="0"
                        max="100"
                        value={Number.isFinite(progressPercent) ? progressPercent : 0}
                        step="1"
                        onChange={handleSeek}
                        aria-label="Seek"
                      />

                      <span className="time">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <p className="ChatTime">
                      <i className="fa-solid fa-clock" aria-hidden="true"></i> 10:00{" "}
                      <i
                        className="fa-solid fa-check-double SentIcon"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* Right image grid bubble */}
          <li className="Right">
            <div className="WrapChat">
              <div className="EditDropDown" role="menu" aria-label="Message actions">
                <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
                <ul className="dropdown-menu">
                  <li>
                    <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>{" "}
                    Edit
                  </li>
                  <li
                    onClick={() =>
                      openChat({ name: "You", reply_to_message: "Check these images" })
                    }
                  >
                    <i className="fa-solid fa-reply" aria-hidden="true"></i> Reply
                  </li>
                  <li>
                    <i className="fa-solid fa-trash" aria-hidden="true"></i> Delete
                  </li>
                </ul>
              </div>

              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="message-content">
                    <div className="VideoCallRecv">
                      <span> <i className="fa-solid fa-phone"></i></span>
                      <div className="callInfo">
                        <h6>audio call</h6>
                        <p>06 : 20 min</p>
                      </div>
                    </div>

                    <p className="ChatTime">
                      <i className="fa-solid fa-clock" aria-hidden="true"></i> 10:00{" "}
                      <i
                        className="fa-solid fa-check-double SentIcon"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>



          {/* Right image grid bubble */}
          <li className="Right">
            <div className="WrapChat">
              <div className="EditDropDown" role="menu" aria-label="Message actions">
                <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
                <ul className="dropdown-menu">
                  <li>
                    <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>{" "}
                    Edit
                  </li>
                  <li
                    onClick={() =>
                      openChat({ name: "You", reply_to_message: "Check these images" })
                    }
                  >
                    <i className="fa-solid fa-reply" aria-hidden="true"></i> Reply
                  </li>
                  <li>
                    <i className="fa-solid fa-trash" aria-hidden="true"></i> Delete
                  </li>
                </ul>
              </div>

              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="message-content">
                    <div className="VideoCallRecv">
                      <span className="Reject"> <i className="fa-solid fa-phone"></i></span>
                      <div className="callInfo">
                        <h6>audio call</h6>
                        <p>Reject</p>
                      </div>
                    </div>

                    <p className="ChatTime">
                      <i className="fa-solid fa-clock" aria-hidden="true"></i> 10:00{" "}
                      <i
                        className="fa-solid fa-check-double SentIcon"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      


      {/* ReplySection */}
      <div className={`chat-container ${showChat ? "show" : ""}`}>
        <div className="reply-div">
          <div className="chat-content">
            <div className="chat-profile-name">
              <h6>
                {replyMessage.name}
                <i className="fa-solid fa-circle dot-new" aria-hidden="true"></i>
              </h6>
            </div>

            <div className="chat-info">
              <div className="message-content">
                <div className="message-reply">
                  <p>{replyMessage.reply_to_message}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="close-reply"
            onClick={closeChat}
            aria-label="Close reply drawer"
            type="button"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {/* ReplySection */}

      <ChatSendSection />
    </>
  );
};

export default Chatwrapper;
