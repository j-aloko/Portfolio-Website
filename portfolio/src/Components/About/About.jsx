import React from "react";
import "./About.css";

function About({ menu }) {
  return (
    <div className="about" id="About">
      <div className="aboutWrapper">
        <div className="aboutTitle">
          <h1 className="abouttitle">ABOUT</h1>
        </div>
        <div className={menu ? "aboutDescription menu" : "aboutDescription"}>
          <p className="aboutParagraph">
            <span className="Q">Q</span>uality, simplicity of the end product
            and client satisfaction is extremely important to me. I strive to
            understand the system and the challenges I'm solving to ensure it
            brings value and ease to the end user. I find working in teams,
            startup-like environments and working remotely exciting, as we get
            to share knowledge across the world and get the job done quickly.
            Although I welcome knowledge from team members, I do not need to be
            micromanaged nor have my hands held at every step of the development
            process. I don't shy away from stepping outside my comfort zone to
            research and improve my workflow.
          </p>
        </div>
        <div className="currentTech">
          <p className="tech">
            Here are a few technologies i've been working with recently :
          </p>
        </div>
        <div className="techlistWrapper">
          <ul className="aboutListItems">
            <h3 className="Stacks">Front End</h3>
            <li className="listItem">HTML5, JavaScript</li>
            <li className="listItem">CSS3, SASS, Styled Components</li>
            <li className="listItem">Material Ui</li>
            <li className="listItem">React Js</li>
            <li className="listItem">Next Js</li>
          </ul>
          <ul className="aboutListItems">
            <h3 className="Stacks">Backend</h3>
            <li className="listItem">Node Js </li>
            <li className="listItem">Express</li>
            <li className="listItem">Mongoose || MongoDb</li>
            <li className="listItem">Web Socket Implementation</li>
            <li className="listItem">
              Unit, Integration & End-to-End Testing with React testing library
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
