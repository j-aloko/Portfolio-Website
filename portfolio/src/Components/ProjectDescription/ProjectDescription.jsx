import React from "react";
import "./ProjectDescription.css";

function ProjectDescription({ code, website, stack, title, description }) {
  return (
    <div className="projectDescriptionContainer">
      <h2 className="PortfolioTitle">{title}</h2>
      <div className="projectDescriptionWrapper">
        <div className="techStackWrapper">
          {stack?.map((s, index) => (
            <div className="techStacks" key={index}>
              <span className="techStacksList">{s}</span>
            </div>
          ))}
        </div>
        <div className="descriptionArea">
          <p className="description">{description}</p>
        </div>
        <div className="portfolioButtons">
          <a href={website} target="_blank" rel="noreferrer" className="links">
            <div className="liveDemo">
              <span className="live">Website</span>
              <span className="green"></span>
            </div>
          </a>
          <a href={code} target="_blank" rel="noreferrer" className="links">
            <span className="sourceCode">Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProjectDescription);
