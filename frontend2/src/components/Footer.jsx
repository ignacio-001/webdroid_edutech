import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer__page">
        <div className="footer__box">
          <div className="illustration__wrapper">
            <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
          </div>
          <form>
            <h3>Share Your Idea</h3>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              nihil sunt distinctio animi non explicabo voluptate nobis
              pariatur tempora dolore assumenda rem sit, quas id facilis
              officiis autem praesentium soluta.
            </p> */}
            <input type="email" name="email" placeholder="Type your Email here" required/>  
            <input type="text" name="name" placeholder="Type your Name here" required/>
            <input type="phone" name="phone" placeholder="Type your mobile number here" required/>
            <input type="text" name="idea" placeholder="Type your Project Idea here" required/>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <footer className="footer-sec">
        <div className="main">
          <div className="logo row">
            <div className="footer-header">
              <h1>WebDroid</h1>
            </div>
            <div className="logo-des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nihil sunt distinctio animi non explicabo voluptate nobis
                pariatur tempora dolore assumenda rem sit, quas id facilis
                officiis autem praesentium soluta.
              </p>

              <a href="#" className="btn-know">
                Know More
              </a>
            </div>
          </div>
          <div className="link row">
            <div className="footer-header">
              <h3>Links</h3>
            </div>
            <div className="link-des">
              <a href="#" className="footer-links">
                Home
              </a>
              <a href="#" className="footer-links">
                About Us
              </a>
              <a href="#" className="footer-links">
                Software Projects
              </a>
              <a href="#" className="footer-links">
                Hardware Projects
              </a>
              <a href="#" className="footer-links">
                Free Projects
              </a>
            </div>
          </div>
          <div className="link row">
            <div className="footer-header">
              <h3>Projects</h3>
            </div>
            <div className="link-des">
              <a href="/python" className="footer-links">
                Python
              </a>
              <a href="/android" className="footer-links">
                Android
              </a>
              <a href="/iot" className="footer-links">
                IoT/Robotics
              </a>
              <a href="/webbased" className="footer-links">
                Web-Based
              </a>
              <a href="/drone" className="footer-links">
                Drone
              </a>
              <a href="/cloud" className="footer-links">
                Cloud
              </a>
            </div>
          </div>
          <div className="link row">
            <div className="footer-header">
              <h3>Projects</h3>
            </div>
            <div className="link-des">
              <a href="/python" className="footer-links">
                Python
              </a>
              <a href="/android" className="footer-links">
                Android
              </a>
              <a href="/iot" className="footer-links">
                IoT/Robotics
              </a>
              <a href="/webbased" className="footer-links">
                Web-Based
              </a>
              <a href="/drone" className="footer-links">
                Drone
              </a>
              <a href="/cloud" className="footer-links">
                Cloud
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>© Copyright 2023 | WebDroid.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
