import React from "react";
import { Ellipses } from "./ellipses";
import iphoneHero1 from "../images/Iphone1hero.svg";
import iphoneHero2 from "../images/Iphone2hero.svg";
export const HeroPhones = () => {
  return (
    <div className="heroPhones">
      <Ellipses />
      <div className="radial"></div>
      <div className="phones">
        <img src={iphoneHero1} alt="iphone" id="iphoneHero1" />
        <img src={iphoneHero2} alt="iphone" id="iphoneHero2" />
        <img src={iphoneHero1} alt="iphone" id="iphoneHero3" />
      </div>
    </div>
  );
};
