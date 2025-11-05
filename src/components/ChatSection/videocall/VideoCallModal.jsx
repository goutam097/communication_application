import React, { useEffect } from "react";
import "../videocall/VideoCall.scss";
const VideoCallModal = ({ caller, onClose, onAccept, onDecline }) => {
    useEffect(() => {
        const onEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, [onClose]);

    return (
        <div className="vc-overlay" onClick={onClose} role="presentation">
            <div
                className="vc-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="vc-title"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="vc-header">
                    <div className="vc-title-wrap">
                        <span className="vc-title-icon">
                            <i className="fa-solid fa-video"></i>
                        </span>
                        <h3 id="vc-title">Video Calling…</h3>
                    </div>
                    <button
                        className="vc-close"
                        aria-label="Close"
                        onClick={onClose}
                        type="button"
                    >
                        {/* <i className="fa-solid fa-xmark"></i> */}
                    </button>
                </div>

                <div className="vc-body">
                    <div className="vc-card">
                        <div className="vc-avatar">
                            <img src={caller?.avatar} alt={caller?.name} />
                        </div>
                        <div className="vc-name">{caller?.name}</div>
                    </div>
                </div>

                <div className="vc-actions">
                    <button className="vc-btn vc-accept" onClick={onAccept}>
                        <i className="fa-solid fa-phone"></i>
                    </button>
                    <button className="vc-btn vc-decline" onClick={onDecline}>
                        <i className="fa-solid fa-square-phone-hangup"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoCallModal;
