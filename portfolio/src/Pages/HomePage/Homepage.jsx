import React, { useState } from "react";
import "./Homepage.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Menu from "./../../Components/MenuItems/Menu";
import Intro from "./../../Components/Intro/Intro";
import Portfolio from "./../../Components/Portfolio/Portfolio";
import Contact from "./../../Components/Contact/Contact";
import About from "./../../Components/About/About";
import Testimonials from "./../../Components/Testimonials/Testimonials";

function Homepage() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="homeContainer">
      <Navbar setMenu={setMenu} menu={menu} />
      <Menu setMenu={setMenu} menu={menu} />
      <div className="homepageWrapper">
        <Intro menu={menu} setMenu={setMenu} />
        <About menu={menu} />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default Homepage;
