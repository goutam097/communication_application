import React, { useState } from "react";
import VideoCallModal from "../videocall/VideoCallModal";

const Header = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);

    const openVideoModal = () => setShowVideoModal(true);
    const closeVideoModal = () => setShowVideoModal(false);

    // mock user data for the popup
    const caller = {
        name: "Edward Lietz",
        avatar:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop",
    };

    return (
        <>
            <div className="chat-wrapper">
                <div className="chat-topbar">
                    <div className="chat-topbar-left">
                        <button className="back-btn">
                            <i className="fa-solid fa-arrow-left-long"></i>
                        </button>

                        <div className="user-avatar s-avatar status-away">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                                alt="User"
                                className="avatar-img"
                            />
                        </div>

                        <div className="user-info">
                            <h5 className="user-name">
                                Doris Brown{" "}
                                <i className="ri-record-circle-fill online-status"></i>
                            </h5>
                        </div>
                    </div>

                    <div className="chat-topbar-right">
                        <div className="icon-group">
                            <button className="icon-btn" aria-label="Search">
                                <i className="fa-solid fa-magnifying-glass" />
                            </button>

                            <button className="icon-btn" aria-label="Audio Call">
                                <i className="fa-solid fa-phone" />
                            </button>

                            <button
                                className="icon-btn"
                                aria-label="Video Call"
                                onClick={openVideoModal}
                            >
                                <i className="fa-solid fa-video" />
                            </button>

                            <button className="icon-btn" aria-label="Profile">
                                <i className="fa-regular fa-user" />
                            </button>

                            <div className="dropdown">
                                <button
                                    className="icon-btn"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-ellipsis-vertical" />
                                </button>

                                <div className="dropdown-menu">
                                    <button className="dropdown-item">
                                        <i className="fa-regular fa-id-card"></i>{" "}
                                        <span>View profile</span>
                                    </button>
                                    <button className="dropdown-item">
                                        <i className="fa-solid fa-phone"></i> <span>Audio</span>
                                    </button>
                                    <button className="dropdown-item">
                                        <i className="fa-solid fa-video"></i> <span>Video</span>
                                    </button>
                                    <button className="dropdown-item">
                                        <i className="fa-solid fa-box-archive"></i>{" "}
                                        <span>Archive</span>
                                    </button>
                                    <button className="dropdown-item">
                                        <i className="fa-solid fa-bell-slash"></i>{" "}
                                        <span>Mute</span>
                                    </button>
                                    <button className="dropdown-item">
                                        <i className="fa-regular fa-trash-can"></i>{" "}
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Calling Popup */}
            {showVideoModal && (
                <VideoCallModal
                    caller={caller}
                    onClose={closeVideoModal}
                    onAccept={() => {
                        // TODO: hook to your call flow
                        closeVideoModal();
                    }}
                    onDecline={() => {
                        // TODO: hang up logic
                        closeVideoModal();
                    }}
                />
            )}
        </>
    );
};

export default Header;
