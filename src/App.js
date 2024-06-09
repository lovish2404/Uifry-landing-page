import React from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
export const App = () => {
  return (
    <section className="main">
      <BrowserRouter>
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <Footer></Footer>
      </BrowserRouter>
    </section>
  );
};
