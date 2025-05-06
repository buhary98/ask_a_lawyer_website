import React, { useState } from "react";
import VideoPopup from "../videopopup/VideoPopUp";
import "./AboutUs.css";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="about-us section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Experienced Legal Professionals Committed to Your Success</h2>
              <i className="fas fa-gavel"></i>
              <p>
                we provide expert legal guidance tailored to your needs. Our
                experienced professionals simplify legal complexities, offering
                reliable, transparent, and client-focused solutions. Whether
                business or personal, we help you navigate legal challenges with
                confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about-left">
              {/* <div className="video-image">
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
                <button
                  className="video video-popup"
                  onClick={() => setIsOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </button>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-right">
              <h3>Who We Are</h3>
              <p>
                Welcome to Ask a Lawyer, a trusted legal advice platform powered
                by Chaudhry Solicitors.
              </p>
              <p>
                At Chaudhry Solicitors, we understand that legal issues can be
                complex and overwhelming. That’s why we’ve created Ask a
                Lawyer—an accessible, user-friendly platform designed to connect
                you with experienced legal professionals for reliable advice and
                guidance.
              </p>
              <p>
                Our Mission:
                <br />
                Our goal is to make legal support simple, transparent, and
                affordable. Whether you have a quick question or need detailed
                legal assistance, our team of qualified solicitors is here to
                help.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Business & Corporate Law
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Legal Document Drafting & Review
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Dispute Resolution & Mediation
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Employment & HR Legal Support
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Intellectual Property Protection
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>
                      Regulatory & Compliance Advisory
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <VideoPopup
          videoUrl="https://www.youtube.com/embed/RFVXy6CRVR4"
          onClose={() => setIsOpen(false)}
        />
      )}
    </section>
  );
};

export default AboutUs;
