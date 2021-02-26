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



const Footer = () => {
  return (
    <>
      <Router>
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <h1>BestShop</h1>
                    <p>© 2019 BestShop LTD, All Rights Reserved</p>
                </div>
                <div className="footer-social">
                    <button></button>
                    <button></button>
                </div>
            </div>
        </footer>
      </Router>
    </>
  );
};

export default Footer;