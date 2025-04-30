import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic
    console.log("Subscribed with email:", email);
  };

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            {/* Start Newsletter Text */}
            <div className="subscribe-text">
              <h6>Sign up for newsletter</h6>
              <p>
                Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                <br /> homero alterum.
              </p>
            </div>
            {/* End Newsletter Text */}
          </div>
          <div className="col-lg-6 col-12">
            {/* Start Newsletter Form */}
            <div className="subscribe-form">
              <form onSubmit={handleSubmit} className="newsletter-inner">
                <input
                  name="EMAIL"
                  placeholder="Your email address"
                  className="common-input"
                  value={email}
                  onChange={handleChange}
                  required
                  type="email"
                />
                <button type="submit" className="bton">
                  Subscribe
                </button>
              </form>
            </div>
            {/* End Newsletter Form */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
