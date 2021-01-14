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

const Header = () => {
  return (
    <>
      <Router>
        <header>
            <div className="header-container">
                <h1>Sell More!</h1>
                <p>Open shop on our platform and increase your sales</p>
                <button>Open your shop</button>
            </div>
        </header>
      </Router>
    </>
  );
};

export default Header;