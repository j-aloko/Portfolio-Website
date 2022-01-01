import React from "react";
import "./Portfolio.css";
import PortfolioLists from "./../../PortfolioLists/PortfolioLists";
import { slideImages } from "./../../Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Portfolio() {
  return (
    <div className="portfolioContainer" id="Portfolio">
      <div className="portfolioWrapper">
        <div className="portfolioLists">
          <Carousel emulateTouch={true} showStatus={false} showThumbs={false}>
            {slideImages.map((slideImage) => (
              <PortfolioLists
                key={slideImage.id}
                title={slideImage.title}
                img={slideImage.url}
                video={slideImage.video}
                code={slideImage.code}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
