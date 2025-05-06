import React from "react";
import "./Feautes.css";

const Feautes = () => {
  const feautesData = [
    {
      icon: "fas fa-list-check",
      title: "Choose a Service",
      description:
        "Browse our range of legal services, including consultation, contract drafting, compliance, and dispute resolution. Select the service that best fits your needs.",
    },
    {
      icon: "fas fa-paper-plane",
      title: "Submit Your Query",
      description:
        "Fill out a simple form or start a chat to describe your legal issue. Provide key details to help us understand your situation and match you with the right expert.",
    },
    {
      icon: "fas fa-headset",
      title: "Get Expert Help",
      description:
        "A qualified lawyer will review your case and provide professional guidance. You can communicate via chat, phone, or video call, or receive the required legal documents.",
    },
    {
      icon: "fas fa-check-circle",
      title: "Resolve Your Issue",
      description:
        "Receive clear, actionable legal solutions tailored to your situation. Whether it’s legal advice, contract review, or documentation, we ensure a smooth and hassle-free resolution.",
    },
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
    <section className="feautes section" id="feautes">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>
                Understand the Process:
                <br />
                Simple Steps to Legal Assistance
              </h2>
              <i className="fas fa-gavel"></i>
              <p>
                Get legal help in four simple steps—choose a service, submit
                your query, consult with an expert lawyer, and receive clear,
                professional legal solutions quickly and securely.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {feautesData.map((feature, index) => (
            <div className="col-lg-3 col-12" key={index}>
              <div className={`single-features ${index === 3 ? "last" : ""}`}>
                <div className="signle-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-bottom">
              <h5>
                Start your legal journey today! <br /> <br />
                Here to connect with a legal&nbsp;expert.
              </h5>
              <div className="bton" onClick={() => scrollToSection("contact")}>
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feautes;
