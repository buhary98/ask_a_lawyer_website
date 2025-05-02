import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>About Us</h2>
                <p>
                  At Chaudhry Solicitors, we understand that&nbsp;legal issues
                  can be complex and overwhelming. That’s why we’ve created Ask
                  a Lawyer—an accessible, user-friendly platform designed to
                  connect you with experienced legal professionals for
                  reliable&nbsp;advice and guidance.
                </p>
                {/* Social Links */}
                <ul className="social">
                  {[
                    "facebook",
                    "google-plus",
                    "twitter",
                    "vimeo",
                    "pinterest",
                  ].map((platform) => (
                    <li key={platform}>
                      <a href="#">
                        <i className={`fa-brands fa-${platform}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h2>Quick Links</h2>
                <div className="row">
                  {[
                    [
                      "Home",
                      "About Us",
                      "Services",
                      "Our Cases",
                      "Other Links",
                    ],
                    [
                      "Consulting",
                      "Finance",
                      "Testimonials",
                      "FAQ",
                      "Contact Us",
                    ],
                  ].map((column, index) => (
                    <div key={index} className="col-lg-6 col-md-6 col-12">
                      <ul>
                        {column.map((link) => (
                          <li key={link}>
                            <div>
                              <i
                                className="fa-solid fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              {link}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Open Hours */}
            {/* <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Open Hours</h2>
                <p>
                  Lorem ipsum dolor sit ame consectetur adipisicing elit do
                  eiusmod tempor incididunt.
                </p>
                <ul className="time-sidual">
                  {[
                    { day: "Monday - Friday", time: "8.00-20.00" },
                    { day: "Saturday", time: "9.00-18.30" },
                    { day: "Monday - Thursday", time: "9.00-15.00" },
                  ].map(({ day, time }) => (
                    <li key={day} className="day">
                      {day} <span>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            {/* Newsletter */}
            {/* <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Newsletter</h2>
                <p>
                  Subscribe to our newsletter to get all our news in your inbox.
                </p>
                <form
                  action="mail/mail.php"
                  method="get"
                  target="_blank"
                  className="newsletter-inner"
                >
                  <input
                    name="email"
                    placeholder="Email Address"
                    className="common-input"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) =>
                      (e.target.placeholder = "Your email address")
                    }
                    required
                    type="email"
                  />
                  <button className="button">
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="copyright-content">
                <p>
                  © Copyright 2025 Ask A Lawyer (Chaudhry Solicitors) | All
                  Rights Reserved
                  {/* <a
                    href="https://www.wpthemesgrid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    wpthemesgrid.com
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
