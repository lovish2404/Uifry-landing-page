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
        <div className="headerRadial">
          <div className="radial" />
        </div>
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
          <div className="financeContainer1">
            <img src={A_svg} alt="A" id="textA" />
            <div id="flagAchievements">
              <div className="flagAchievementsFirst">
                <div className="ellipseCover">
                  <img className="fullImage" src={trophy} alt="trophy" />
                </div>
              </div>
              <div className="flagAchievementsSecond">
                Achievements
                <span>Best Finance App on Playstore</span>
              </div>
            </div>
            <span id="slash">/</span>
            <div id="flagFinance">
              <div className="flagFinance1">
                <div className="ellipseCover">
                  <img className="fullImage" src={bankNote} alt="bankNote" />
                </div>
              </div>
              <div className="flagAchievementsSecond">
                Finance
                <span>Most Popular Accounting App</span>
              </div>
            </div>
            <div className="financeEnd1"></div>
          </div>
          <div className="financeContainer2">
            <div className="financeEnd2"></div>
            <div className="flagAchievements2">
              Make the best financial decisions
            </div>
            <div className="financeContainer3">
              <div className="starImg3Container">
                <img className="starImg3" src="/Star.png" alt="star" />
              </div>
              <div className="font-bold financeContainer3Text">
                Uifry Premium
                <br />
                <span className="font-normal">Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroPhones />
    </section>
  );
};
