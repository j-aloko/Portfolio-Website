import React from "react";
import "./Homepage.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Menu from "./../../Components/MenuItems/Menu";
import Intro from "./../../Components/Intro/Intro";
import Portfolio from "./../../Components/Portfolio/Portfolio";
import Contact from "./../../Components/Contact/Contact";
import About from "./../../Components/About/About";
import Testimonials from "./../../Components/Testimonials/Testimonials";
import Footer from "./../../Components/Footer/Footer";
import ProfessionalWork from "./../../Components/ProfessionalWork/ProfessionalWork";

function Homepage({ menu, setMenu }) {
  return (
    <div className="homeContainer">
      <Navbar setMenu={setMenu} menu={menu} />
      <Menu setMenu={setMenu} menu={menu} />
      <div className="homepageWrapper">
        <Intro menu={menu} setMenu={setMenu} />
        <About menu={menu} />
        <ProfessionalWork />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
