import React, { useState } from "react";
import VideoPopup from "../videopopup/VideoPopUp";

import "./ChooseUs.css";

const ChooseUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="why-choose section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>
                Get Professional Legal Help with Full Transparency and Security.
              </h2>
              <i className="fas fa-gavel"></i>
              <p>
                We provide expert legal guidance with transparency,
                affordability, and confidentiality. Trust our experienced
                lawyers for secure, reliable, and hassle-free legal solutions
                tailored to your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="choose-left">
              <h3>Why Choose Us?</h3>
              <p>
                Trust our experienced legal professionals for secure,
                transparent, and affordable legal services. We prioritize client
                satisfaction, confidentiality, and expert guidance, making legal
                assistance accessible, hassle-free, and efficient for
                individuals and businesses alike.
              </p>
              <p>
                About Chaudhry Solicitors:
                <br />
                With years of experience in the legal industry, Chaudhry
                Solicitors is committed to providing exceptional legal services
                tailored to individual needs. Our team specializes in multiple
                areas of law, ensuring that you receive accurate and practical
                advice.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Expert Legal Advice
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Fast & Convenient
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Trusted & Reliable
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Affordable Solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Video Section */}
          <div className="col-lg-6 col-12">
            <div className="choose-right">
              <div className="video-image">
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>

                {/* Open Video Popup on Click */}
                <button
                  className="video video-popup"
                  onClick={() => setIsOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Component */}
      {isOpen && (
        <VideoPopup
          videoUrl="https://www.youtube.com/embed/RFVXy6CRVR4"
          onClose={() => setIsOpen(false)}
        />
      )}
    </section>
  );
};

export default ChooseUs;
