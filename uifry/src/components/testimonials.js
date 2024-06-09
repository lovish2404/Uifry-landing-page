import React from "react";
import { Ellipses } from "./ellipses";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";
import mainPerson from "../images/mainPerson.jpg";
import star from "../images/Star.jpg";

import { FaQuoteLeft } from "react-icons/fa";

export const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonialHead">
        TESTIMONIAL
        <span>What Out Users Say About Us</span>
      </div>
      <div className="testimonialImage">
        <div className="radial" />
        <Ellipses>
          <div className="mainPerson">
            <img src={mainPerson} alt="mainPerson" />
            <div className="fillRedCircle">
              <FaQuoteLeft />
            </div>
          </div>
          <div className="person1">
            <img src={person1} alt="person1" />
          </div>
          <div className="person2">
            <img src={person2} alt="person2" />
          </div>
          <div className="person3">
            <img src={person3} alt="person3" />
          </div>
          <div className="person4">
            <img src={person4} alt="person4" />
          </div>
        </Ellipses>
      </div>
      <div className="testimonialDetail">
        <div className="tHeader">
          <span>The Best Financial Accounting Epp Ever!</span>
          <div className="testimony">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </div>
        </div>
        <div className="testimonyPersons">
          <img src={person1} alt="PersonImg" id="currentTestimony" />
          <img src={person2} alt="PersonImg" id="notClicked" />
          <img src={person3} alt="PersonImg" id="notClicked" />
          <img src={person4} alt="PersonImg" id="notClicked" />
          <img src={mainPerson} alt="PersonImg" id="notClicked" />
          <span>Nick Jonas</span>
        </div>
      </div>
      <img src={star} alt="star" id="testStar" />
    </section>
  );
};
