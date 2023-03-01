import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-sec">
        <section className="footer-distributed">
          <h3>Share Your Ideas Here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            nihil sunt distinctio animi non explicabo voluptate nobis
            pariatur tempora dolore assumenda rem sit, quas id facilis
            officiis autem praesentium soluta.
          </p>
          <form action="#" method="post">
            <input type="text" name="email" placeholder="Type your Email here" />
            <input type="text" name="name" placeholder="Type your Name here" />
            <textarea name="message" placeholder="Type Your Idea here"></textarea>
            <button>Send</button>
          </form>
        </section>
        <div className="main">
          <div className="logo rowws">
            <div className="footer-header">
              <h1>WebDroid</h1>
              {/* <img src="https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on-transparent-background.png" class="manik" alt="" /> */}
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
          <div className="link rowws">
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
          <div className="link rowws">
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
          <div className="link rowws">
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
