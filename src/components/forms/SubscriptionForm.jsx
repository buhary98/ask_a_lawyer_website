import React, { useState } from "react";
import emailjs from "emailjs-com";

import Modal from "./Modal";

import "./FormStyles.css";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    region: "",
    country: "Hong Kong",
    zipCode: "",
    plan: "",
    duration: "",
    transNo: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_igeb57k",
        "template_rgrm3do",
        e.target,
        "t6u7vty3zp_TQLp1B"
      );
      console.log(result.text);
      setShowModal(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      region: "",
      country: "Hong Kong",
      zipCode: "",
      plan: "",
      duration: "",
    });

    e.target.reset();
  };

  return (
    <section className="appointment">
      <div className="container single-page">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Subscribe Now for Trusted Legal Resources and Info</h2>
              <p>
                Stay updated with the latest legal news, expert tips, and
                service updates. Subscribe to our newsletter and get valuable
                legal insights delivered directly to your inbox—no spam, just
                helpful information.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Id"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="address1"
                      placeholder="Address Line 1"
                      value={formData.address1}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="address2"
                      placeholder="Address Line 2"
                      value={formData.address2}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <select
                      className="nice-select"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Region
                      </option>
                      <option>Hongkong Island</option>
                      <option>Kowloon</option>
                      <option>New Territories</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="country"
                      placeholder="Hong Kong"
                      value={formData.country}
                      onChange={handleChange}
                      readOnly
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      type="number"
                      name="zipCode"
                      placeholder="Zip/Postal Code"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <select
                      className="nice-select"
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Plan
                      </option>
                      <option>Basic</option>
                      <option>Pro</option>
                      <option>Premium</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <select
                      className="nice-select"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Duration
                      </option>
                      <option>Monthly</option>
                      <option>Yearly</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="transNo"
                      placeholder="Transaction Number"
                      value={formData.transNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <button type="submit" className="bton">
                      Subscribe
                    </button>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <button className="bton">Pay Now</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          message="Your appointment request has been sent successfully!"
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default SubscriptionForm;
