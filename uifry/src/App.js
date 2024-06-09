import React from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Testimonial } from "./components/testimonials";
import { GetStarted } from "./components/getStarted";
import { Footer } from "./components/footer";
export const App = () => {
  return (
    <section className="main">
      <BrowserRouter>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="radial" id="freeRadial"></div>
        <Features></Features>
        <Testimonial></Testimonial>
        <GetStarted></GetStarted>
        <Footer></Footer>
      </BrowserRouter>
    </section>
  );
};
