import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";

import Modal from "./Modal";

import "./FormStyles.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: null,
    time: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

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
      date: null,
      time: "",
      message: "",
    });

    e.target.reset();
  };

  return (
    <section className="appointment">
      <div className="container single-page">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <Link to="/" className="bton btn-margin">
              <i
                className="fas fa-home"
                style={{
                  paddingRight: "15px",
                }}
              ></i>
              Back to Home
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>
                Need Legal Help?
                <br />
                Schedule an Appointment With Us
              </h2>
              <i className="fas fa-gavel"></i>
              <p>
                Need legal support? Schedule an appointment with our experienced
                lawyers at your convenience. We offer personalized consultations
                to understand your needs and provide effective legal guidance
                tailored to your situation.
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

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <DatePicker
                      name="date"
                      placeholderText="Appointment Date"
                      className="date-picker"
                      dateFormat="dd-MM-yyyy"
                      selected={formData.date}
                      onChange={handleDateChange}
                    />
                    <input
                      type="hidden"
                      name="date"
                      value={
                        formData.date
                          ? formData.date.toISOString().split("T")[0]
                          : ""
                      }
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <select
                      className="nice-select"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Appointment Time
                      </option>
                      <option>Morning (10:00 AM - 12:00 PM)</option>
                      <option>Afternoon (02:00 PM - 05:00 PM)</option>
                      <option>Evening (07:00 PM - 09:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Write briefly about your legal concern here..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <button type="submit" className="bton">
                      Book An Appointment
                    </button>
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

export default AppointmentForm;
