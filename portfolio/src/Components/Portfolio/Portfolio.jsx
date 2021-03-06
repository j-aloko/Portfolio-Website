import React from "react";
import "./Portfolio.css";
import PortfolioLists from "./../../PortfolioLists/PortfolioLists";
import { slideImages } from "./../../Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Portfolio() {
  return (
    <div className="portfolioContainer" id="PersonalProjects">
      <h2 className="personalprojects">PERSONAL PROJECTS</h2>
      <div className="portfolioWrapper">
        <div className="portfolioLists">
          <Carousel
            emulateTouch={true}
            showThumbs={false}
            transitionTime={2000}
          >
            {slideImages.map((slideImage) => (
              <PortfolioLists
                key={slideImage.id}
                title={slideImage.title}
                img={slideImage.url}
                video={slideImage.video}
                website={slideImage.website}
                code={slideImage.code}
                stack={slideImage.stack}
                description={slideImage.description}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
