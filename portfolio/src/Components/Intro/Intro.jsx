import React, { useEffect, useRef } from "react";
import "./Intro.css";
import { init } from "ityped";

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
        "Web Socket Implementation",
      ],
      showCursor: true,
      backDelay: 3000,
    });
  }, []);

  return (
    <div className="introContainer" id="Intro">
      <div className="introTitleWrapper">
        <h1 className="introTitle">Developing Awesomeness</h1>
        <span className="introDescription">
          Hi, Welcome to my space, i'm Joseph Aloko, a fullstack software
          engineer with over two years experience in web development,
          collaborating with teammates across the world, to deliver excellent
          service to clients. My expertise are{" "}
          <span style={{ color: "red" }} ref={descriptionRef}></span>
        </span>
        <a
          href="#About"
          className="viewProjects"
          onClick={() => setMenu(false)}
        >
          About Me
        </a>
      </div>
      <div className={menu ? "imgWrapper menu" : "imgWrapper"}>
        <img src="assets/joey.png" className="introImage" alt="" />
      </div>
    </div>
  );
}

export default Intro;
