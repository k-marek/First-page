import React from "react";
import ReactDOM from "react-dom";
import NaviMenu from "./NaviMenu";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NaviMenu />
      <Header />
      <WhyUs/>
      <Benefits/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
