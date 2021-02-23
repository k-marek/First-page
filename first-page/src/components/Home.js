import React from "react";
import ReactDOM from "react-dom";
import NaviMenu from "./NaviMenu";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Benefits from "./Benefits";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <NaviMenu />
      <Header />
      <WhyUs/>
      <Benefits/>
      <Pricing/>
    </>
  );
};

export default Home;
