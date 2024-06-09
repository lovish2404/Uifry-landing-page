import React from "react";
import logo from "../images/Frame.jpg";
import SiteName from "../images/Vector.svg";
import phone from "../images/phone.svg";
import mail from "../images/mail.svg";
import { data } from "../data";

export const Footer = () => {
  return (
    <footer className="footer">
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
      <ul className="Links">
        <li>Links</li>
        {data.footer.links.map((index) => {
          return <li>{index}</li>;
        })}
      </ul>
      <ul className="Legal">
        <li>Legal</li>
        {data.footer.legal.map((index) => {
          return <li>{index}</li>;
        })}
      </ul>
      <ul className="product">
        <li>Product</li>
        {data.footer.product.map((index) => {
          return <li>{index}</li>;
        })}
      </ul>
      <ul className="Newsletter">
        <li>Newsletter</li>
        <li>Stay Up To Date</li>
        <form className="sub">
          <input type="email"></input>
          <button className="subBtn">Subscribe</button>
        </form>
      </ul>
      <hr></hr>
      <div className="copyright">
        <span>Copyright 2022 Uifry.Com All Rights Reserved</span>
      </div>
    </footer>
  );
};
