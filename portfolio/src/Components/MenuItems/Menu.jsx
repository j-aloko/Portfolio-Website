import React from "react";
import "./Menu.css";

function Menu({ setMenu, menu }) {
  return (
    <div className={menu ? "menuContainer menu" : "menuContainer"}>
      <ul className="menuItems">
        <li onClick={() => setMenu(false)}>
          <a href="#Intro">HOME</a>
        </li>
        <li onClick={() => setMenu(false)}>
          <a href="#About">ABOUT</a>
        </li>
        <li onClick={() => setMenu(false)}>
          <a href="#Portfolio">PROJECTS</a>
        </li>
        <li onClick={() => setMenu(false)}>
          <a href="#Testimonials">TESTIMONIALS</a>
        </li>
        <li onClick={() => setMenu(false)}>
          <a href="#Contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
