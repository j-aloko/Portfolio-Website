import React from "react";
import "./ProfessionalWork.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { works } from "./../../Data";

function ProfessionalWork() {
  return (
    <div className="professionalWorkContainer" id="Works">
      <h1 className="professionalWorkTitlee">Relevant Works</h1>
      <Carousel emulateTouch={true} showThumbs={false} transitionTime={2000}>
        {works?.map((work) => (
          <div className="professionalWorkSubContainer" key={work.id}>
            <div className="professionalWorkWrapper">
              <div className="professionalWorkLeftWrapper">
                <h2 className="professionalWorkTitle">{work.title}</h2>
                <h4 className="companyName">{work.company}</h4>
                <div className="professionalWorksTechStacksWrapper">
                  {work.stack.map((s, index) => (
                    <span className="professionalWorkTechStacks" key={index}>
                      {s}
                    </span>
                  ))}
                </div>
                <p className="professionalWorksDescription">{work.desc}</p>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="professionalWorkWebsite"
                >
                  Website
                </a>
              </div>
              <div className="professionalWorkRightWrapper">
                <img src={work.img} alt="" className="professionalWorkImage" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProfessionalWork;
