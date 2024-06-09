import React from "react";
import { Ellipses } from "./ellipses";
import { data } from "../data";
import star from "../images/Star.jpg";
export const Features = () => {
  return (
    <section className="features" id="features">
      <img src={star} alt="Star" id="featureStar" />
      <div className="radial"></div>
      <div className="featuresImg relative">
        <Ellipses></Ellipses>
      </div>
      <div className="featuresMain">
        <div className="featureHead">
          <span>Features</span>
          Uifry Premium
        </div>
        <ul className="featuresList">
          {data.features.map(({ icon, heading, info, id }) => {
            return (
              <div className="singleFeature" key={id}>
                <div className="featureName">
                  <img src={icon} alt="symbol" />
                  {heading}
                </div>
                <div className="featureDetail">{info}</div>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
