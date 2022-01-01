import React from "react";
import "./PortfolioLists.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LoginIcon from "@mui/icons-material/Login";

function PortfolioLists({ img, title, code, video }) {
  const handleClick = () => {
    console.log("hey");
  };
  return (
    <div className="portfolioWorks">
      <div className="portfolioTitlt">
        <h1 className="portfolioTitle">{title}</h1>
      </div>
      <div className="portfoliolistItem">
        <div className="portfolioImgWrapper">
          <video
            src={video}
            poster={img}
            controls
            loop
            className="portfolioImgs"
          ></video>
        </div>
        <div className="portfolioInfo">
          <div className="ProjectLinks">
            <a href={code}>
              <div className="projectLinksItem" onClick={handleClick}>
                <GitHubIcon style={{ fontSize: 30 }} />
              </div>
            </a>
            <div className="projectLinksItem">
              <LanguageIcon style={{ fontSize: 30 }} />
            </div>
            <div className="projectLinksItem">
              <LoginIcon style={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioLists;
