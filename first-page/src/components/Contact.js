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



const Contact = () => {
  return (
    <>
      <Router>
        <section className="contact">
            <div className="contact-container">
                <div className="contact-box">
                    <div className="contact-info-text">
                        <h1>Any questions?</h1>
                        <p>Leave your email address or call us!</p>
                    </div>
                    <div className="contact-info-numbers">
                        <p>info@bestshop.xyz</p>
                        <p>123 456 789</p>
                    </div>
                </div>
                <div className="contact-box">
                    <form method="get">
                        <label for="name">name</label>
                        <input type="text" id="name" name="name"></input>
                        <label for="email">email</label>
                        <input type="text" id="email" name="email"></input>
                        <div className="contact-box-checkbox">
                            <input type="checkbox" id="agree" name="agree"></input>
                            <label for="agree">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas non urna id commodo. Sed vulputate scelerisque mauris ac dapibus. Praesent ac sem tortor. Nam ut sodales quam. Donec metus nisi, tincidunt ac ornare nec, vestibulum nec urna. Duis et auctor lectus. Vivamus vel risus vestibulum, viverra tortor eget, luctus est.</label>
                        </div>
                        <input type="submit" value="Send"></input>
                    </form>
                </div>
            </div>
        </section>
      </Router>
    </>
  );
};

export default Contact;