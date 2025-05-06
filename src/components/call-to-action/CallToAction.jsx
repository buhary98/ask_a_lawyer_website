import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = document.querySelector("header")?.offsetHeight + 80 || 100;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="call-action overlay section" id="call-action">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="content">
              <h2>
                Need Immediate Legal&nbsp;Assistance?
                <br />
                Call&nbsp;Us&nbsp;Now @&nbsp;1234&nbsp;56789
              </h2>
              <p>
                Facing a legal challenge? Our experienced lawyers are here to
                provide quick and professional assistance. Get the right legal
                support when you need it the most. Reach out to us now!
              </p>
              <div className="button">
                <button
                  className="bton"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
