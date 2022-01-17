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
        "Java Script",
        "Node Js",
        "Express",
        "MongoDB",
        "Web Sockets",
      ],
      showCursor: true,
      backDelay: 1500,
    });
  }, []);

  return (
    <div className="introContainer" id="Intro">
      <div className="introTitleWrapper">
        <h1 className="introTitle">Creating Websites That Engage Users.</h1>
        <span className="introDescription">
          Hi, Thank you for taking the time to look at my website. I'm Joseph
          Aloko, a full-stack software engineer with over two years of web
          development experience, collaborating with colleagues all over the
          world to give clients exceptional service. My expertise are{" "}
          <span
            style={{ color: "red", fontSize: 25 }}
            ref={descriptionRef}
          ></span>
        </span>
        <a
          href="#About"
          className="viewProjects"
          onClick={() => setMenu(false)}
        >
          More <ArrowDownwardIcon style={{ color: "red", fontSize: 35 }} />
        </a>
      </div>
      <div className={menu ? "imgWrapper menu" : "imgWrapper"}>
        <img src="assets/joey.png" className="introImage" alt="" />
      </div>
    </div>
  );
}

export default Intro;
