import React, { useEffect, useRef, useState } from "react";
import "./ChatSendSection.scss";

const ChatSendSection = () => {
    const [message, setMessage] = useState("");
    const [images, setImages] = useState([]); // [{file, url, id}]
    const fileInputRef = useRef(null);

    const handleSend = () => {
        if (!message.trim() && images.length === 0) return;

        // 👉 ekhane tumi form submit / API call korba
        console.log("Send message:", message);
        console.log("Send images (files):", images.map(i => i.file));

        setMessage("");
        clearAllImages();
    };

    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    const handleFilesChange = (e) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;

        // only images
        const imgFiles = files.filter(f => f.type.startsWith("image/"));

        const mapped = imgFiles.map((file) => ({
            file,
            url: URL.createObjectURL(file),
            id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`
        }));

        setImages((prev) => [...prev, ...mapped]);
        // allow picking same files again later
        e.target.value = "";
    };

    const removeImage = (id) => {
        setImages((prev) => {
            const toRevoke = prev.find(i => i.id === id);
            if (toRevoke) URL.revokeObjectURL(toRevoke.url);
            return prev.filter((i) => i.id !== id);
        });
    };

    const clearAllImages = () => {
        setImages((prev) => {
            prev.forEach((i) => URL.revokeObjectURL(i.url));
            return [];
        });
    };

    // cleanup on unmount
    useEffect(() => {
        return () => {
            images.forEach((i) => URL.revokeObjectURL(i.url));
        };
    }, [images]);

    return (
        <div className="chat-send-wrapper">
            {/* preview area */}
            {images.length > 0 && (
                <div className="preview-bar">
                    <div className="preview-grid">
                        {images.map((img) => (
                            <div className="preview-item" key={img.id} title={img.file.name}>
                                <img src={img.url} alt={img.file.name} />
                                <button
                                    type="button"
                                    className="remove-thumb"
                                    onClick={() => removeImage(img.id)}
                                    aria-label="Remove image"
                                    title="Remove"
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="preview-actions">
                        <button className="btn-link" onClick={clearAllImages}>
                            <i className="fa-regular fa-trash-can"></i> Clear all
                        </button>
                    </div>
                </div>
            )}

            {/* input row */}
            <div className="chat-send-section">
                <i className="fa-regular fa-face-smile icon" />

                {/* hidden file input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFilesChange}
                    style={{ display: "none" }}
                />

                <i
                    className="fa-solid fa-paperclip icon"
                    role="button"
                    onClick={handleAttachClick}
                    title="Attach images"
                />

                <input
                    type="text"
                    placeholder="Type your message"
                    className="chat-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />

                <i className="fa-solid fa-microphone icon" />

                <button className="send-btn" onClick={handleSend}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>
    );
};

export default ChatSendSection;
