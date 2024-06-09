import React, { useState } from "react";
import { data } from "../data";
import logo from "../images/Frame.jpg";
import star from "../images/Star.jpg";
import SiteName from "../images/Vector.svg";
import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }
  return (
    <div className="navbar">
      <img src={logo} alt="logo" id="logo" />
      <img src={SiteName} alt="siteName" id="siteName" />
      <ul className="links">
        {data.navLinks.map(({ text, link, id }) => {
          return (
            <Link smooth to={link} className="navLinks" key={id}>
              {text}
            </Link>
          );
        })}
      </ul>

      <div className="downloadBtn">
        <a href="">Download</a>
      </div>
      <img src={star} alt="star" id="navStar" />
    </div>
  );
};
