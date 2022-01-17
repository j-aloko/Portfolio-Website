import React from "react";
import "./Footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="copyrightAndName">
          <CopyrightIcon />
          <span className="year">2022</span>
          <span className="Username"> Joseph Aloko</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
