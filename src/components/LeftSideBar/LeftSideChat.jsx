import React from "react";
import "../LeftSideBar/LeftSideChat.scss";

const LeftSideChat = () => {
  return (
    <div className="LeftSideWrapper">

      <div className="px-4 pt-4 ChatBar">
         <h4 className="">Chats</h4>
           <div className="search-box chat-search-box">            
                <div className="input-group mb-3 rounded-3">
                   <span className="input-group-text text-muted bg-light" id="basic-addon1">
                     <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                      <input type="text" className="form-control bg-light" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon1"/>
                  </div> 
          </div> 
      </div>
      <div className="sunfire-chat">
        <ul className="sunfire-chat-list">
          
          <li className="sunfire-chat-item">
            <a href="#">
              <div className="s-chat-row">
                <div className="s-avatar status-online">
                  <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Patrick Hendricks" />
                </div>
                <div className="s-meta">
                  <h5 className="s-name">Patrick Hendricks</h5>
                  <p className="s-message">Hey! there I'm available</p>
                </div>
                <div className="s-right">
                  <div className="s-time">05 min</div>
                </div>
              </div>
            </a>
          </li>

          <li className="sunfire-chat-item unread">
            <a href="#">
              <div className="s-chat-row">
                <div className="s-avatar status-away">
                  <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Mark Messer" />
                </div>
                <div className="s-meta">
                  <h5 className="s-name">Mark Messer</h5>
                  <p className="s-message">
                    <i className="ri-image-fill"></i> Images
                  </p>
                </div>
                <div className="s-right">
                  <div className="s-time">12 min</div>
                  <div className="s-badge">02</div>
                </div>
              </div>
            </a>
          </li>

          <li className="sunfire-chat-item">
            <a href="#">
              <div className="s-chat-row">
                <div className="s-avatar placeholder">
                  <span>G</span>
                </div>
                <div className="s-meta">
                  <h5 className="s-name">General</h5>
                  <p className="s-message">This theme is awesome!</p>
                </div>
                <div className="s-right">
                  <div className="s-time">20 min</div>
                </div>
              </div>
            </a>
          </li>

          <li className="sunfire-chat-item active">
            <a href="#">
              <div className="s-chat-row">
                <div className="s-avatar status-online">
                  <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Doris Brown" />
                </div>
                <div className="s-meta">
                  <h5 className="s-name">Doris Brown</h5>
                  <p className="s-message">Nice to meet you</p>
                </div>
                <div className="s-right">
                  <div className="s-time">10:12 AM</div>
                </div>
              </div>
            </a>
          </li>

          <li className="sunfire-chat-item unread">
            <a href="#">
              <div className="s-chat-row">
                <div className="s-avatar placeholder">
                  <span>D</span>
                </div>
                <div className="s-meta">
                  <h5 className="s-name">Designer</h5>
                  <p className="s-message">Next meeting tomorrow 10.00AM</p>
                </div>
                <div className="s-right">
                  <div className="s-time">12:01 PM</div>
                  <div className="s-badge">01</div>
                </div>
              </div>
            </a>
          </li>

          <li className="sunfire-chat-item">
            <a href="#">
              <div className="s-chat-row">
                <div className="s-avatar status-away">
                  <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Steve Walker" />
                </div>
                <div className="s-meta">
                  <h5 className="s-name">Steve Walker</h5>
                  <p className="s-message">
                    <i className="ri-file-text-fill"></i> Admin-A.zip
                  </p>
                </div>
                <div className="s-right">
                  <div className="s-time">03:20 PM</div>
                </div>
              </div>
            </a>
          </li>

          <li className="sunfire-chat-item typing">
            <a href="#">
              <div className="s-chat-row">
                <div className="s-avatar placeholder status-online">
                  <span>A</span>
                </div>
                <div className="s-meta">
                  <h5 className="s-name">Albert Rodarte</h5>
                  <p className="s-message">
                    typing{" "}
                    <span className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </p>
                </div>
                <div className="s-right">
                  <div className="s-time">04:56 PM</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideChat;
