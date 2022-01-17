import React, { useEffect, useRef } from "react";
import "./Intro.css";
import { init } from "ityped";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Intro({ menu, setMenu }) {
  const descriptionRef = useRef();

  useEffect(() => {
    init(descriptionRef.current, {
      strings: [
        "React Js",
        "Next Js",
        "Node Js",
        "Express",
        "Mongo",
        "Sockets",
      ],
      showCursor: true,
      backDelay: 1500,
    });
  }, []);

  return (
    <div className="introContainer" id="Intro">
      <div className="introTitleWrapper">
        <span className="introTitle">Creating Solutions Through Tech</span>
        <span className="introDescription">
          Hi, Thank you for taking the time to look over my website. My name is
          Joseph Aloko, a full-stack software engineer. I leverage on a variety
          of technologies to build websites that engage users and solve
          day-to-day problems. My expertise are{" "}
          <span className="iType" ref={descriptionRef}></span>
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
