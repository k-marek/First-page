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
import macbook from "../assets/images/Macbook2.png";
import iphone from "../assets/images/iPhone2.png";
import trumpet from "../assets/images/Trumpet.png";


const Benefits = () => {
  return (
    <>
      <Router>
        <section className="benefits">
            <div className="benefits-container">
                <div className="benefits-box">
                    <div className="box-text">
                        <h2>Be always first</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta velit quam. In ut eros quam. Sed ipsum dolor, vestibulum a diam id, dapibus eleifend urna.</p>
                    </div>
                    <div className="box-img">
                        <img src={macbook}/>
                    </div>
                </div>
                <div className="benefits-box">
                    <div className="box-img box-img-2nd">
                        <img src={iphone}/>
                    </div>
                    <div className="box-text box-text-2nd">
                    <h2>Your shop is where you are!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta velit quam. In ut eros quam. Sed ipsum dolor, vestibulum a diam id.</p>
                    </div>
                </div>
                <div className="benefits-box-container">
                <div className="benefits-box benefits-box-3rd">
                    <div className="box-text box-text-3rd">
                      <h2>Increase recognition of your brand</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta velit quam. In ut eros quam. Sed ipsum dolor, vestibulum a diam id.</p>
                    </div>              
                    <div className="box-img-container">
                        <img src={trumpet}/>
                    </div>
                </div>
                </div>
                
            </div>
        </section>
      </Router>
    </>
  );
};

export default Benefits;