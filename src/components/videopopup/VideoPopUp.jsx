import React from "react";
import "./VideoPopUp.css"; 

const VideoPopup = ({ videoUrl, onClose }) => {
  return (
    <div className="video-overlay" onClick={onClose}>
      <div className="video-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPopup;
