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
              <span className="Q">A</span>s a full-stack engineer, I create
              world-class enterprise software. I work hard to understand the
              system and the problems I'm dealing with so that it adds value and
              ease of use to the end user. I've worked as a freelancer for
              various clients, and I most recently worked for Maviance as a lead
              front-end developer on Qlipay, a cross-border payment platform
              that allows millions of migrants to pay for bills, products, and
              services for their families all over the world. In this role, I
              worked with a team, which I find very beneficial because it allows
              us to share knowledge and grow.
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
            <span className="listItem">Javascript</span>
            <span className="listItem">Typescript</span>
            <span className="listItem">Node Js </span>
            <span className="listItem">Express</span>
            <span className="listItem">MongoDb</span>
            <span className="listItem">Cypress</span>
            <span className="listItem">Web Sockets</span>
            <span className="listItem">HTML5</span>
            <span className="listItem">Styled Components</span>
            <span className="listItem">SASS</span>
            <span className="listItem">CSS3</span>
            <span className="listItem">Material UI</span>
          </div>
          <div className="otherInterests">
            <h3 className="otherInterestTitle">OTHER INTERESTS</h3>
            <p className="interest">
              I give a couple of hours a week to a social services group that
              distributes clothing and food to the less fortunate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
