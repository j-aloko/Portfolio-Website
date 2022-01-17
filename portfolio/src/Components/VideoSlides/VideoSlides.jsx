import React from "react";
import "./VideoSlides.css";

function VideoSlides({ img, video }) {
  return (
    <div className="portfolioWorks">
      <div className="portfoliolistItem">
        <div className="portfolioImgWrapper">
          <video
            src={video}
            poster={img}
            controls
            className="portfolioImgs"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default React.memo(VideoSlides);
