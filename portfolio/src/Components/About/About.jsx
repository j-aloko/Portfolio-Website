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
            understand the system and challenges I'm solving to ensure it brings
            value and ease to the end user. I find working in teams,
            startup-like environments and working remotely exciting, as we get
            to connect and share knowledge across the world and get the job
            done. Although I welcome knowledge from team members, I do not need
            to be micromanaged nor have my hands held at every step of the
            development process. I don't shy away from stepping outside my
            comfort zone to research solutions when I'm stuck over a feature
            implementation.
          </p>
        </div>
        <div className="currentTech">
          <p className="tech">Relevant Technologies:</p>
        </div>
        <div className="techlistWrapper">
          <ul className="aboutListItems">
            <li className="listItem">React Js</li>
            <li className="listItem">Next Js</li>
            <li className="listItem">CSS3, SASS , Styled Components</li>
          </ul>
          <ul className="aboutListItems">
            <li className="listItem">Material Ui</li>
            <li className="listItem">Node Js </li>
            <li className="listItem">Express</li>
          </ul>
          <ul className="aboutListItems">
            <li className="listItem">MongoDb</li>
            <li className="listItem">Cypress</li>
            <li className="listItem">Web Sockets</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
