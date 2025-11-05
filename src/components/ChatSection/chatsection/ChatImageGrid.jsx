import React, { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const ChatImageGrid = ({ images = [] }) => {
    // Example images (you can remove this line in real use)
    images = [
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/200/300?grayscale",
        "https://picsum.photos/200/300/?blur",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/200/300?grayscale",
        "https://picsum.photos/200/300/?blur",
    ];

    const visible = images.slice(0, 4);
    const extraCount = Math.max(0, images.length - 4);

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
            <div className="chat-img-grid">
                {visible.map((img, index) => (
                    <div
                        className="img-wrap"
                        key={index}
                        onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}
                    >
                        <img src={img} alt={`chat-${index + 1}`} />
                        {index === 3 && extraCount > 0 && (
                            <div className="overlay">+{extraCount}</div>
                        )}
                    </div>
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </>
    );
};

export default ChatImageGrid;
