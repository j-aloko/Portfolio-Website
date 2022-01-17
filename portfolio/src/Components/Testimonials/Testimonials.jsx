import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import EmailIcon from "@mui/icons-material/Email";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "../../Data";

function Testimonials() {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="testimonialsContainer" id="Testimonials">
      <h2 className="testimonials">TESTIMONIALS</h2>
      <div className="testimonialsWrapper">
        {!matches ? (
          <>
            {testimonials?.map((t) => (
              <div className="userTestimonial" key={t.id}>
                <div className="userImageWrapper">
                  <img src={t.img} alt="" className="userImg" />
                </div>
                <div className="testimonialAndEmail">
                  <p className="testimonial">{t.desc}</p>
                  <div className="testimonialEmailWrap">
                    <EmailIcon style={{ color: "white" }} />
                    <span className="testimonialEmail">{t.email}</span>
                  </div>
                </div>
                <div className="usernameAndPosition">
                  <span className="username">{t.name}</span>
                  <span className="userPosition">{t.position}</span>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <Carousel
              emulateTouch={true}
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              interval={6000}
              transitionTime={3000}
            >
              {testimonials?.map((t) => (
                <div className="userTestimonial" key={t.id}>
                  <div className="userImageWrapper">
                    <img src={t.img} alt="" className="userImg" />
                  </div>
                  <div className="testimonialAndEmail">
                    <p className="testimonial">{t.desc}</p>
                    <div className="testimonialEmailWrap">
                      <EmailIcon style={{ color: "white" }} />
                      <span className="testimonialEmail">{t.email}</span>
                    </div>
                  </div>
                  <div className="usernameAndPosition">
                    <h3 className="username">{t.name}</h3>
                    <h4 className="userPosition">{t.position}</h4>
                  </div>
                </div>
              ))}
            </Carousel>
          </>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
