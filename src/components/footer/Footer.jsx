import React from "react";

import "./Footer.css";

const Footer = () => {
  const socialMedia = [
    {
      name: "facebook",
      link: "https://facebook.com",
    },
    {
      name: "google-plus",
      link: "https://plus.google.com",
    },
    {
      name: "twitter",
      link: "https://twitter.com",
    },
    {
      name: "vimeo",
      link: "https://vimeo.com",
    },
    {
      name: "pinterest",
      link: "https://pinterest.com",
    },
  ];

  const quickLink = [
    [
      {
        name: "Home",
        link: "home",
      },
      {
        name: "About Us",
        link: "about",
      },
      {
        name: "Our Services",
        link: "services",
      },
      {
        name: "Reviews",
        link: "testimonials",
      },
      {
        name: "Our Plans",
        link: "pricing",
      },
    ],
    [
      {
        name: "Why Choose Us",
        link: "choose",
      },
      {
        name: "Our Features",
        link: "feautes",
      },
      {
        name: "Lawyers",
        link: "lawyers",
      },
      {
        name: "FAQs",
        link: "fAQs",
      },
      {
        name: "Our Blogs",
        link: "blogs",
      },
    ],
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = document.querySelector("header")?.offsetHeight + 80 || 100;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer section" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
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
                <ul className="social">
                  {socialMedia.map((platform, index) => (
                    <li key={index}>
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`fa-brands fa-${platform.name}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h2>Quick Links</h2>
                <div className="row">
                  {quickLink.map((column, colIndex) => (
                    <div key={colIndex} className="col-lg-6 col-md-6 col-12">
                      <ul>
                        {column.map((linkItem, linkIndex) => (
                          <li key={linkIndex}>
                            <div onClick={() => scrollToSection(linkItem.link)}>
                              <i
                                className="fa-solid fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              {linkItem.name}
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
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="copyright-content">
                <p>
                  © Copyright 2025 Ask A Lawyer (Chaudhry&nbsp;Solicitors) | All
                  Rights Reserved
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
