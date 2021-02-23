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



const Pricing = () => {
  return (
    <>
      <Router>
        <section className="pricing">
            <h2>Pricing</h2>
            <div className="pricing-boxes">
                <div className="pricing-box">
                    <h3>Basic</h3>
                    <span>$0</span>
                    <ul>
                        <li className="li-check">100 MB HDD</li>
                        <li className="li-check">1 Subdomain</li>
                        <li className="li-check">2 E-mails</li>
                        <li>Two years Licence</li>
                        <li>Full support</li>
                    </ul>
                    <button>Begin</button>
                </div>
                <div className="pricing-box pricing-box-2nd">
                  <h3>Professional</h3>
                  <span>$25</span>
                  <p>Limited offer</p>
                  <ul>
                    <li className="li-check">500 MB HDD</li>
                    <li className="li-check">2 Subdomains</li>
                    <li className="li-check">5 E-mails</li>
                    <li className="li-check">One year Licence</li>
                    <li>Full support</li>
                  </ul>
                  <button>Begin</button>
                </div>
                <div className="pricing-box pricing-box-3rd">
                <h3>Premium</h3>
                    <span>$60</span>
                    <p>Limited offer</p>
                    <ul>
                        <li className="li-check">2 GB HDD</li>
                        <li className="li-check">5 Subdomains</li>
                        <li className="li-check">20 E-mails</li>
                        <li className="li-check">Two years Licence</li>
                        <li className="li-check"> Full support</li>
                    </ul>
                    <button>Begin</button>
                </div>
            </div>
        </section>
      </Router>
    </>
  );
};

export default Pricing;