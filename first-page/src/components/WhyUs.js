import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as LinkScroll,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import person from "./../assets/images/Person.svg";
import eye from "./../assets/images/Eye.svg";
import catalog from "./../assets/images/Catalog.svg";

const WhyUs = () => {
  return (
    <>
      <Router>
        <section className="why-us">
            <div className="why-us-container">
                <h1>The most popular sale platform in the country</h1>
                <div className="why-us-boxes">
                    <div className="why-us-box">
                        <div className="entries">
                          <img src={person} className="entries-img" alt="daily entries"/>
                        </div>
                        <h2>100000+</h2>
                        <p>daily entries</p>
                    </div>
                    <div className="why-us-box">
                      <div className="seen">
                          <img src={eye} className="seen-img" alt="seen products every day"/></div>
                      <h2>2000000+</h2>
                      <p>seen products every day</p>
                    </div>
                    <div className="why-us-box">
                      <div className="posts">
                        <img src={catalog} className="posts-img" alt="added posts daily"/></div>
                      <h2>10000+</h2>
                      <p>added posts daily</p>
                    </div>
                </div>
            </div>
        </section>
      </Router>
    </>
  );
};

export default WhyUs;