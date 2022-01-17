import React from "react";
import "./Navbar.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";

function Navbar({ menu, setMenu }) {
  const GitProfile = () => {
    const git = "https://github.com/j-aloko?tab=repositories";
    window.open(git, "_blank");
  };
  return (
    <div className={menu ? "navbarContainer menu" : "navbarContainer"}>
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <div className="navbarContact">
            <div className="gitWrapper" onClick={GitProfile}>
              <GitHubIcon className="svg_icon" />
              <span className="Git">Git</span>
            </div>
          </div>
          <div className="navbarEmail">
            <a href="#Contact" className="emailLink">
              <div className="emailWrapper">
                <EmailRoundedIcon className="svg_icon" />
                <span className="email">alokojoseph7@gmail.com</span>
              </div>
            </a>
          </div>
          <div className="navbarCvDownload">
            <a
              href="/assets/Joseph_Aloko_Resume.pdf"
              className="emailLink"
              download
            >
              <div className="cvWrapper">
                <DownloadIcon className="svg_icon" />
                <span className="cv">C.V</span>
              </div>
            </a>
          </div>
        </div>
        <div className="navbarRight">
          {!menu && (
            <DehazeIcon
              className="svg_icons"
              style={{ fontSize: 45, marginRight: "30px" }}
              onClick={() => setMenu(true)}
            />
          )}
          {menu && (
            <CloseIcon
              className="svg_icons"
              style={{ fontSize: 45, marginRight: "30px" }}
              onClick={() => setMenu(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
