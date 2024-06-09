import React from "react";
import { data } from "../data";
import { useNavigate } from "react-router-dom";
import arrow from "../images/arrow.svg";
import watch from "../images/watch.svg";
import trophy from "../images/trophy.svg";
import star from "../images/Star.jpg";
import bankNote from "../images/bankNote.svg";
import A_svg from "../images/a.svg";
import { HeroPhones } from "./heroPhone";

export const Hero = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const link = `/${e.target.value}`;
    navigate(link);
  };
  return (
    <section className="hero" id="hero">
      <img src={star} alt="star" id="starHero1" />
      <div className="header">
        <div className="radial" />
        <div className="heading">
          <h1>{data.hero.headline}</h1>
          <p>
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>

        <div className="heroBtns">
          <button className="heroBtn1" value="download" onClick={handleClick}>
            <span>Get Started</span>
            <img src={arrow} alt="arrow" id="arrow" />
          </button>
          <button className="heroBtn2" value="Video" onClick={handleClick}>
            <img src={watch} alt="playImg" id="playImg" />
            <span>Watch Video</span>
          </button>
        </div>
        <div className="heroFlag">
          <div className="divTemp">
            <img src={A_svg} alt="A" id="textA" />
            <div className="flagBlack">
              <div id="flagAchievements">
                <div className="flagAchievements1">
                  <div className="ellipseCover">
                    <img src={trophy} alt="trophy" />
                  </div>
                </div>
                <div className="flagAchievements2">
                  Achievements
                  <span>Best Finance App on Playstore</span>
                </div>
              </div>
              <span id="slash">/</span>
              <div id="flagFinance">
                <div className="flagFinance1">
                  <div className="ellipseCover">
                    <img src={bankNote} alt="bankNote" />
                  </div>
                </div>
                <div className="flagFinance2">
                  Finance
                  <span>Most Popular Accounting App</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flagRed1">Make The Best Financial Decisions</div>
          <div className="flagRed2">
            <div></div>
            <div>
              <img src={star} alt="star" />
            </div>
            <div>
              Uifry Premium
              <span>Free Trial</span>
            </div>
          </div> */}
        </div>
      </div>
      <HeroPhones />
    </section>
  );
};
