import React from "react";
import "./Intro.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Intro({ menu, setMenu }) {
  return (
    <div className="introContainer" id="Intro">
      <div className="introTitleWrapper">
        <span className="introTitle">Creating Solutions Through Tech</span>
        <span className="introDescription">
          Hi, Thank you for taking the time to look over my website. My name is
          Joseph Aloko, a full-stack software engineer. I leverage on a variety
          of technologies to build websites that engage users and solve
          day-to-day problems.
        </span>
        <a href="#About">
          <button className="viewProjects" onClick={() => setMenu(false)}>
            More <ArrowDownwardIcon style={{ color: "red", fontSize: 35 }} />
          </button>
        </a>
      </div>
      <div className={menu ? "imgWrapper menu" : "imgWrapper"}>
        <img src="assets/joey.png" className="introImage" alt="" />
      </div>
    </div>
  );
}

export default Intro;
