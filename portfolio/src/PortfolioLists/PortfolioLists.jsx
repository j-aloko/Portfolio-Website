import React from "react";
import "./PortfolioLists.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LoginIcon from "@mui/icons-material/Login";

function PortfolioLists({ img, title, code, video, website }) {
  const handleLogin = () => {
    alert(
      "Use Login Credentials: { Email : junior@gmail.com, Password : 43421 }"
    );
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
            className="portfolioImgs"
          ></video>
        </div>
        <div className="portfolioInfo">
          <div className="ProjectLinks">
            <a href={code}>
              <div className="projectLinksItem">
                <GitHubIcon />
              </div>
            </a>
            <a href={website}>
              <div className="projectLinksItem">
                <LanguageIcon />
              </div>
            </a>
            <div className="projectLinksItem" onClick={handleLogin}>
              <LoginIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioLists;
