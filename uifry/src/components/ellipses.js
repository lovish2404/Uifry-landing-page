import React from "react";

export const Ellipses = ({ children, className }) => {
  if (className) {
    console.log(className);
  }
  return (
    <>
      <div className="backgroundEllipses">
        <div id="first" className="ellipse"></div>
        <div id="second" className="ellipse"></div>
        <div id="third" className="ellipse"></div>
      </div>
      {children}
    </>
  );
};
