import React from "react";
import "./About.css";

function About({ menu }) {
  return (
    <div className="about" id="About">
      <div className="aboutWrapper">
        <div className="aboutme">
          <div className="aboutTitle">
            <h1 className="abouttitle">MORE</h1>
          </div>
          <div className={menu ? "aboutDescription menu" : "aboutDescription"}>
            <p className="aboutParagraph">
              <span className="Q">A</span>s a full-stack engineer, I work with
              other developers to create world-class enterprise software. I work
              hard to understand the system and problems I'm confronting so that
              it brings value and ease to the end user. Working in teams, in
              startup-like organizations, and remotely excites me since we get
              to engage with people from all backgrounds, share information, and
              learn from them. I most recently worked for Maviance as a
              front-end developer on{" "}
              <a href="https://www.qlipay.de" target="_blank" rel="noreferrer">
                https://www.qlipay.de
              </a>
              , a cross-border payment platform that allows millions of migrants
              to pay for bills, products, and services for their families around
              the world in real-time and at reasonable costs. In this role, I
              collaborated with a team of developers, UX Designers, a product
              manager, and QA to make cross-border bill payments efficient and
              as simple as possible.
            </p>
          </div>
        </div>
        <div className="techlistWrapper">
          <div className="currentTech">
            <h1 className="tech">MY FREQUENTLY USED STACK</h1>
          </div>
          <div className="techStackss">
            <span className="listItem">React Js</span>
            <span className="listItem">Next Js</span>
            <span className="listItem">Node Js </span>
            <span className="listItem">Express</span>
            <span className="listItem">MongoDb</span>
            <span className="listItem">Cypress</span>
            <span className="listItem">React Testing Library</span>
            <span className="listItem">Web Sockets</span>
            <span className="listItem">HTML5</span>
            <span className="listItem">Styled Components</span>
            <span className="listItem">SASS</span>
            <span className="listItem">CSS3</span>
            <span className="listItem">Material Ui</span>
          </div>
          <div className="otherInterests">
            <h3 className="otherInterestTitle">OTHER INTERESTS</h3>
            <p className="interest">
              I either work out or play football with my friends when I'm not
              creating code. I also give a couple of hours a week to a social
              services group that distributes clothing and furniture to the less
              fortunate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
