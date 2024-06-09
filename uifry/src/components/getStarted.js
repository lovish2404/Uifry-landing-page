import React from "react";
import { Ellipses } from "./ellipses";
import star from "../images/Star.jpg";
import apple from "../images/apple.svg";
import iphone1 from "../images/Iphone1.svg";
import iphone2 from "../images/Iphone2.svg";
import iphone3 from "../images/Iphone3.svg";

export const GetStarted = () => {
  return (
    <article className="getStarted">
      <div className="radial"></div>
      <img src={star} alt="star" id="startStar1" />
      <img src={star} alt="star" id="startStar2" />
      <div className="mainStart">
        <img src={star} alt="star" id="insideStar1" />
        <img src={star} alt="star" id="insideStar2" />
        <Ellipses className="rightTop"></Ellipses>
        <Ellipses className="leftBottom"></Ellipses>
        <div className="getStartedMain">
          <div className="getStartedHeading">
            <span>Ready To Get Started?</span>
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </div>
          <button className="DownloadApp">
            Download App
            <img src={apple} alt="apple" id="apple" />
          </button>
        </div>
        <div className="getStartedImages">
          <img src={iphone1} alt="iphone" id="start1" />
          <img src={iphone2} alt="iphone" id="start2" />
          <img src={iphone3} alt="iphone" id="start3" />
        </div>
      </div>
    </article>
  );
};
