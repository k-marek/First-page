import React from "react";
import ReactDOM from "react-dom";
import NaviMenu from "./NaviMenu";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Benefits from "./Benefits";

const Home = () => {
  return (
    <>
      <NaviMenu />
      <Header />
      <WhyUs/>
      <Benefits/>
      
    </>
  );
};

export default Home;
