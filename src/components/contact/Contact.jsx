import React, { useState } from "react";

import ContactImg from "../../assets/images/contact-img.png";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Data:", formData);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Connect with Our Legal Experts for Professional Advice!</h2>
              <i className="fas fa-gavel"></i>
              <p>
                Need legal guidance? Our experts are here to help! Reach out for
                professional advice, consultation, or assistance with your legal
                concerns. Contact us today and get the trusted support you
                deserve for all your legal needs.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Write Your Message Here....."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-4 col-12">
                  <div className="form-group">
                    <div className="button">
                      <button type="submit" className="bton">
                        Request Legal Advice
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-8 col-12">
                  <p>( We will confirm by an Email )</p>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="contact-image">
              <img src={ContactImg} alt="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
