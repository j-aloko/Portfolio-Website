import React from "react";
import "./ProjectDescription.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function ProjectDescription({ code, website, stack, title, description }) {
  return (
    <div className="projectDescriptionContainer">
      <h1 className="PortfolioTitle">{title}</h1>
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
              <LanguageIcon style={{ marginRight: "10px", color: "blue" }} />
              <span className="live">Live Website</span>
              <span className="green"></span>
            </div>
          </a>
          <a href={code} target="_blank" rel="noreferrer" className="links">
            <div className="githubcode">
              <GitHubIcon style={{ marginRight: "10px" }} />
              <span className="sourceCode">Source Code</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProjectDescription);
