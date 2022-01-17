import React from "react";
import "./PortfolioLists.css";
import ProjectDescription from "./../Components/ProjectDescription/ProjectDescription";
import VideoSlides from "./../Components/VideoSlides/VideoSlides";

function PortfolioLists({
  img,
  title,
  code,
  video,
  website,
  stack,
  description,
}) {
  return (
    <>
      <h2 className="personalprojects">PERSONAL PROJECTS</h2>
      <div className="PortfolioSlidesContainer">
        <ProjectDescription
          code={code}
          website={website}
          stack={stack}
          title={title}
          description={description}
        />
        <VideoSlides img={img} code={code} video={video} website={website} />
      </div>
    </>
  );
}

export default React.memo(PortfolioLists);
