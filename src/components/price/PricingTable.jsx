import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./PricingTable.css";

const PopupContent = ({ plan }) => {
  return (
    <div>
      <h3>{plan.title} Details</h3>
      <p>
        <strong>Price:</strong> {plan.price} {plan.per}
      </p>
      <h4>Features:</h4>
      <ul>
        {plan.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <h4>Exclusions:</h4>
      <ul>
        {plan.excluded.map((excluded, idx) => (
          <li key={idx}>{excluded}</li>
        ))}
      </ul>
      <Link to="/subscription" className="bton">
        Subscribe
      </Link>
    </div>
  );
};

const PricingTable = () => {
  const [popupContent, setPopupContent] = useState(null);
  const popupRef = useRef(null);

  const pricingData1 = [
    {
      title: "Basic Subscription Plan",
      price: "$15,000",
      per: "Per Year",
      icon: "fa-tooth",
      features: [
        "Cost-effective",
        "Priority support",
        "Predictable monthly costs",
        "Includes multiple services",
        // "Loyalty perks and discounts",
      ],
      excluded: [
        "Cancellation policies",
        // "Recurring cost",
        // "Unused services don’t roll over",
        // "Fixed plans might not suit everyone",
        // "Limited scope",
      ],
    },
    {
      title: "Professional Subscription Plans",
      price: "$25,000",
      per: "Per Year",
      icon: "fa-heart-pulse",
      features: [
        "Better value",
        "Covers a wide range",
        "Priority assistance",
        "Predictable legal expenses",
        // "Additional perks",
      ],
      excluded: [
        // "Limited flexibility",
        "Large upfront",
        // "Might include services you don’t need",
        // "Complex legal cases may require extra fees",
        // "May not be cost-effective",
      ],
    },
    {
      title: "Advanced Subscription Plans",
      price: "$40,000",
      per: "Per Year",
      icon: "fa-heart-pulse",
      features: [
        "Tailored legal services",
        "Dedicated legal support",
        "Scalable pricing",
        "Long-term cost savings",
        // "All legal issues covered",
      ],
      excluded: [
        // "Higher cost",
        // "Custom pricing may lack transparency ",
        // "May require an annual commitment",
        "Not suitable for individuals",
        // "May not cover all legal scenarios",
      ],
    },
  ];

  const pricingData2 = [
    {
      title: "Pay-Per-Use",
      price: "$199",
      per: "Per Visit",
      icon: "fa-scissors",
      features: [
        "Budget-friendly",
        "No long-term commitment",
        "Transparent pricing",
        // "Flexibility",
        // "Quick access",
      ],
      excluded: [
        "Limited access",
        "No ongoing legal support",
        // "Can be expensive",
        // "Might not include follow-ups",
        // "Inconsistent pricing",
      ],
    },
    {
      title: "Enterprise & Custom Plans",
      price: "$3999",
      per: "Per Year",
      icon: "fa-heart-pulse",
      features: [
        "Tailored legal services",
        "Dedicated legal support",
        "Scalable pricing",
        "Long-term cost savings",
        // "All legal issues covered",
      ],
      excluded: [
        // "Higher cost",
        // "Custom pricing may lack transparency ",
        // "May require an annual commitment",
        "Not suitable for individuals",
        // "May not cover all legal scenarios",
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupContent(null);
      }
    };

    if (popupContent) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupContent]);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section className="pricing-table section" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Professional Legal Assistance at Competitive Prices</h2>
              <i className="fas fa-gavel"></i>
              <p>
                We believe in transparent, affordable, and flexible pricing,
                ensuring you receive expert legal support without hidden fees.
                Choose from our tailored plans, including one-time services,
                subscriptions, or enterprise solutions, designed to meet your
                unique legal needs efficiently and cost-effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {pricingData1.map((plan, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="single-table">
                <div className="table-head">
                  <div className="icon">
                    <i className={`fa-solid ${plan.icon}`}></i>
                  </div>
                  <h4 className="title">{plan.title}</h4>
                  <div className="price">
                    <p className="amount">
                      {plan.price}
                      <span>/ {plan.per}</span>
                    </p>
                  </div>
                </div>
                <ul className="table-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check"></i>
                      {feature}
                    </li>
                  ))}
                  {plan.excluded.map((excluded, idx) => (
                    <li key={idx} className="cross">
                      <i className="fa-solid fa-xmark"></i>
                      {excluded}
                    </li>
                  ))}
                </ul>
                <div className="table-bottom">
                  <button
                    className="bton"
                    onClick={() => setPopupContent(plan)}
                  >
                    Learn More...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {pricingData2.map((plan, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="single-table">
                <div className="table-head">
                  <div className="icon">
                    <i className={`fa-solid ${plan.icon}`}></i>
                  </div>
                  <h4 className="title">{plan.title}</h4>
                  <div className="price">
                    <p className="amount">
                      {plan.price}
                      <span>/ {plan.per}</span>
                    </p>
                  </div>
                </div>
                <ul className="table-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check"></i>
                      {feature}
                    </li>
                  ))}
                  {plan.excluded.map((excluded, idx) => (
                    <li key={idx} className="cross">
                      <i className="fa-solid fa-xmark"></i>
                      {excluded}
                    </li>
                  ))}
                </ul>
                <div className="table-bottom">
                  <button
                    className="bton"
                    onClick={() => setPopupContent(plan)}
                  >
                    Learn More...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popupContent && (
        <motion.div
          className="popup-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
        >
          <div className="popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={() => setPopupContent(null)}
            >
              &times;
            </button>
            <PopupContent plan={popupContent} />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default PricingTable;
