import React from "react";
import logo from "../images/Frame.jpg";
import SiteName from "../images/Vector.svg";
import phone from "../images/phone.svg";
import mail from "../images/mail.svg";
import { data } from "../data";

export const Footer = () => {
  return (
    <>
      <footer className="footer" id="aboutUs">
        <ul className="siteMain">
          <li className="siteInfo">
            <img src={logo} alt="logo" />
            <img src={SiteName} alt="site" />
          </li>
          <li className="email">
            <img src={mail} alt="mailId" />
            <span>Help@FryBix.com</span>
          </li>
          <li className="phone">
            <img src={phone} alt="phone" />
            <span>+1234 456 678 89</span>
          </li>
        </ul>
        <div className="footerMid">
          <ul className="Links">
            <li id="LinkHead">Links</li>
            {data.footer.links.map((index) => {
              return <li>{index}</li>;
            })}
          </ul>
          <ul className="Legal">
            <li id="LegalHead">Legal</li>
            {data.footer.legal.map((index) => {
              return <li>{index}</li>;
            })}
          </ul>
          <ul className="product">
            <li id="ProductHead">Product</li>
            {data.footer.product.map((index) => {
              return <li>{index}</li>;
            })}
          </ul>
        </div>

        <ul className="Newsletter">
          <li id="News">Newsletter</li>
          <li id="newsText">Stay Up To Date</li>
          <form className="sub">
            <input type="email" placeholder="e-mail"></input>
            <button className="subBtn">Subscribe</button>
          </form>
        </ul>
      </footer>
      <hr></hr>
      <div className="copyright">
        <span>Copyright 2022 Uifry.Com All Rights Reserved</span>
      </div>
    </>
  );
};
