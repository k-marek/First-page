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

const NaviMenu = () => {
  return (
    <>
      <Router>
        <section className="navi">
          <div className="navi-container">
            <a href="#">BestShop</a>
            <nav>
              <ul>
                <LinkScroll to="whyUs" smooth={true}>
                    Why Us
                </LinkScroll>
                <LinkScroll to="benefits" smooth={true}>
                    Benefits
                </LinkScroll>
                <LinkScroll to="prices" smooth={true}>
                    Prices
                </LinkScroll>
                <LinkScroll to="contact" smooth={true}>
                    Contact
                </LinkScroll>
              </ul>
            </nav>
          </div>
        </section>
      </Router>
    </>
  );
};

export default NaviMenu;