import React, { useState, useRef, useEffect } from "react";
import "./FaQ.css";

const faqData = [
  {
    id: "accordion-1",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "We offer legal consultations, document reviews, contract drafting, and ongoing legal support tailored to your needs.",
      },
      {
        question: "How can I contact a lawyer?",
        answer:
          "Simply register, choose a plan, and submit your question. A lawyer will contact you promptly.",
      },
      {
        question: "What is the response time?",
        answer: "Typically within 24 hours on business days.",
      },
      {
        question: "Is my data confidential?",
        answer:
          "Yes, we strictly follow legal confidentiality and data protection protocols.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, subscriptions can be canceled at any time through your user dashboard.",
      },
    ],
  },
  {
    id: "accordion-2",
    items: [
      {
        question: "Do you offer document review?",
        answer:
          "Yes, we review agreements, contracts, and other legal documents as part of our service.",
      },
      {
        question: "Can I choose my lawyer?",
        answer: "You can request a preferred lawyer, subject to availability.",
      },
      {
        question: "Are consultations available on weekends?",
        answer: "Weekend consultations are available under premium plans.",
      },
      {
        question: "Is legal advice covered in all plans?",
        answer:
          "Yes, all plans include professional legal advice tailored to your query.",
      },
      {
        question: "Do you support international legal matters?",
        answer:
          "Yes, we cover various jurisdictions through our network of partner lawyers.",
      },
    ],
  },
];

const FaQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const contentRefs = useRef({});

  const toggleQuestion = (key) => {
    setActiveQuestion(activeQuestion === key ? null : key);
  };

  useEffect(() => {
    Object.entries(contentRefs.current).forEach(([key, el]) => {
      if (el) {
        el.style.height =
          activeQuestion === key ? `${el.scrollHeight}px` : "0px";
      }
    });
  }, [activeQuestion]);

  return (
    <div className="faqs section" id="fAQs">
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
        <div className="row faq-section">
          {faqData.map((group, groupIndex) => (
            <div className="col-md-6" key={group.id}>
              <div id={group.id}>
                {group.items.map((faq, index) => {
                  const key = `${groupIndex}-${index}`;
                  const isActive = activeQuestion === key;

                  return (
                    <div
                      className={`card fadeIn${
                        groupIndex === 0 ? "Left" : "Right"
                      }`}
                      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                      key={key}
                    >
                      <div className="card-header">
                        <div
                          className={`card-link ${isActive ? "" : "collapsed"}`}
                          onClick={() => toggleQuestion(key)}
                          aria-expanded={isActive}
                        >
                          {faq.question}
                        </div>
                      </div>
                      <div
                        ref={(el) => (contentRefs.current[key] = el)}
                        className={`collapse-content ${isActive ? "open" : ""}`}
                      >
                        <div className="card-body">{faq.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaQ;
