import React from 'react'
import "./Chatwrapper.scss"
import ChatSendSection from '../ChatSendSection/ChatSendSection'
const Chatwrapper = () => {
  return (
    <>
      <div className="SimpleBarContent">
        <ul className='ListChat'>
          <li className='Left'>
            <div className="WrapChat">
              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="CTextWrap">
                    <p>Good Morning</p>
                    <p className='ChatTime'><i className="fa-solid fa-timer"></i> 10:00</p>
                  </div>
                </div>
              </div>

              <div className="EditDropDown">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </li>
          <li className='Right'>
            <div className="WrapChat">
              <div className="EditDropDown">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>

              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="CTextWrap">
                    <p>Good Morning</p>
                    <p className='ChatTime'><i className="fa-solid fa-timer"></i> 10:00</p>
                  </div>
                </div>
              </div>

            </div>
          </li>
          <li className='Right'>
            <div className="WrapChat">
              <div className="EditDropDown">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>

              <div className="ConversationList">
                <div className="UserChatContent">
                  <div className="message-content">
                    <div className="chat-img">
                      <div className="img-wrap">
                        <img src="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg" alt="img" />
                        <div className="img-overlay">
                          <a
                            className="gallery-img"
                            data-fancybox="gallery-img"
                            href="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg"
                            title="Demo 01"
                          >
                            <i className="ti ti-eye"></i>
                          </a>
                          <a href="#">
                            <i className="ti ti-download"></i>
                          </a>
                        </div>
                      </div>

                      <div className="img-wrap">
                        <img src="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg" alt="img" />
                        <div className="img-overlay">
                          <a
                            className="gallery-img"
                            data-fancybox="gallery-img"
                            href="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg"
                            title="Demo 02"
                          >
                            <i className="ti ti-eye"></i>
                          </a>
                          <a href="#">
                            <i className="ti ti-download"></i>
                          </a>
                        </div>
                      </div>

                      <div className="img-wrap">
                        <img src="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg" alt="img" />
                        <div className="img-overlay">
                          <a
                            className="gallery-img"
                            data-fancybox="gallery-img"
                            href="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg"
                            title="Demo 03"
                          >
                            <i className="ti ti-eye"></i>
                          </a>
                          <a href="#">
                            <i className="ti ti-download"></i>
                          </a>
                        </div>
                      </div>

                      <div className="img-wrap">
                        <img src="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg" alt="img" />
                        <div className="img-overlay">
                          <a
                            className="gallery-img"
                            data-fancybox="gallery-img"
                            href="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg"
                            title="Demo 04"
                          >
                            <i className="ti ti-eye"></i>
                          </a>
                          <a href="#">
                            <i className="ti ti-download"></i>
                          </a>
                        </div>
                      </div>

                      <div className="img-wrap">
                        <img src="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg" alt="img" />
                        <div className="img-overlay">
                          <a
                            className="gallery-img"
                            data-fancybox="gallery-img"
                            href="https://dreamschat.dreamstechnologies.com/html/template/assets/img/gallery/gallery-01.jpg"
                            title="Demo 04"
                          >
                            <i className="ti ti-eye"></i>
                          </a>
                          <a href="#">
                            <i className="ti ti-download"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                  
                  </div>
                </div>
              </div>

            </div>
          </li>
        </ul>

      </div>
      <ChatSendSection />
    </>
  )
}

export default Chatwrapper