import React from "react";
import { Link } from "react-router-dom";
import "./PricingTable.css";

const PricingTable = () => {
  const pricingData1 = [
    {
      title: "Basic",
      priceMonth: "1,250",
      priceDiscount: "15,000",
      priceYear: "13,500",
      per1: "Per Month",
      per2: "Per Year",
      icon: "fa-clipboard-check",
      link: "subscription",
      btn: "Subscribe",
      features: [
        "Cost-effective",
        "Priority support",
        "Predictable monthly costs",
      ],
      excluded: ["Cancellation policies", "Limited scope"],
    },
    {
      title: "Professional",
      priceMonth: "2,150",
      priceDiscount: "25,000",
      priceYear: "22,500",
      per1: "Per Month",
      per2: "Per Year",
      icon: "fa-briefcase",
      link: "subscription",
      btn: "Subscribe",
      features: [
        "Better value",
        "Covers a wide range",
        "Priority assistance",
        "Predictable legal expenses",
      ],
      excluded: ["Large upfront"],
    },
    {
      title: "Advanced",
      priceMonth: "3,350",
      priceDiscount: "40,000",
      priceYear: "36,000",
      per1: "Per Month",
      per2: "Per Year",
      icon: "fa-unlock-alt",
      link: "subscription",
      btn: "Subscribe",
      features: [
        "Tailored legal services",
        "Dedicated legal support",
        "Scalable pricing",
        "Long-term cost savings",
        "All legal issues covered",
      ],
      excluded: [],
    },
  ];

  const pricingData2 = [
    {
      title: "Pay-Per-Use",
      icon: "fa-money-check-alt",
      link: "appointment",
      btn: "Book Appointment",
      features: [
        "Budget-friendly",
        "No long-term commitment",
        "Transparent pricing",
      ],
      excluded: ["Limited access", "No ongoing legal support"],
    },
    {
      title: "Enterprise & Custom Plans",
      icon: "fa-users-cog",
      link: "contact",
      btn: "Contact Us",
      features: [
        "Tailored legal services",
        "Dedicated legal support",
        "Scalable pricing",
        "Long-term cost savings",
        "All legal issues covered",
      ],
      excluded: [],
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
                      HK${plan.priceMonth}
                      <span>/ {plan.per1}</span>
                    </p>
                  </div>
                  <div className="price">
                    <p className="discount-amount">
                      ${plan.priceDiscount}
                      {/* <span>10% discount</span> */}
                    </p>
                  </div>
                  <div className="price">
                    <p className="amount">
                      HK${plan.priceYear}
                      <span>/ {plan.per2}</span>
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
                  <Link to={`/${plan.link}`} className="bton">
                    {plan.btn}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-content">
              <p>
                Choose between flexible Pay-Per-Use options for occasional legal
                needs or Enterprise & Custom Plans tailored for businesses
                requiring ongoing, scalable legal support. Both offer
                transparent pricing and access to expert legal services when
                needed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          {pricingData2.map((plan, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="single-table">
                <div className="table-head">
                  <div className="icon">
                    <i className={`fa-solid ${plan.icon}`}></i>
                  </div>
                  <h4 className="title">{plan.title}</h4>
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
                  {plan.title === "Enterprise & Custom Plans" ? (
                    <button
                      className="bton"
                      onClick={() => scrollToSection("contact")}
                    >
                      {plan.btn}
                    </button>
                  ) : (
                    <Link to={`/${plan.link}`} className="bton">
                      {plan.btn}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
