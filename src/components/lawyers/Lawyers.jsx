import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import LawyerImg1 from "../../assets/images/lawyer1.png";
import LawyerImg2 from "../../assets/images/lawyer2.png";
import LawyerImg3 from "../../assets/images/lawyer3.png";
import LawyerImg4 from "../../assets/images/lawyer4.png";
import LawyerImg5 from "../../assets/images/lawyer5.png";
import LawyerImg6 from "../../assets/images/lawyer6.png";
import LawyerImg7 from "../../assets/images/lawyer7.png";
import LawyerImg8 from "../../assets/images/lawyer8.png";
import LawyerImg9 from "../../assets/images/lawyer9.png";

import "./Lawyers.css";

const Lawyers = () => {
  const lawyers = [
    {
      image: LawyerImg1,
      name: "Ava Martinez",
      title: "Corporate & Business Law Expert",
      description:
        "Specializes in legal compliance, contracts, and governance for businesses of all sizes.",
    },
    {
      image: LawyerImg2,
      name: "Daniel Singh",
      title: "Litigation & Dispute Resolution",
      description:
        "Experienced in court and arbitration for civil and commercial disputes.",
    },
    {
      image: LawyerImg3,
      name: "Lena O'Hara",
      title: "Regulatory & Compliance Advisor",
      description:
        "Ensures institutions meet legal and ethical standards, mitigating legal risks.",
    },
    {
      image: LawyerImg4,
      name: "Michael Zhou",
      title: "International Business Law",
      description:
        "Handles cross-border legal matters, trade regulations, and business structuring.",
    },
    {
      image: LawyerImg5,
      name: "Ava Martinez",
      title: "Corporate & Business Law Expert",
      description:
        "Specializes in legal compliance, contracts, and governance for businesses of all sizes.",
    },
    {
      image: LawyerImg6,
      name: "Daniel Singh",
      title: "Litigation & Dispute Resolution",
      description:
        "Experienced in court and arbitration for civil and commercial disputes.",
    },
    {
      image: LawyerImg7,
      name: "Lena O'Hara",
      title: "Regulatory & Compliance Advisor",
      description:
        "Ensures institutions meet legal and ethical standards, mitigating legal risks.",
    },
    {
      image: LawyerImg8,
      name: "Michael Zhou",
      title: "International Business Law",
      description:
        "Handles cross-border legal matters, trade regulations, and business structuring.",
    },
    {
      image: LawyerImg9,
      name: "Michael Zhou",
      title: "International Business Law",
      description:
        "Handles cross-border legal matters, trade regulations, and business structuring.",
    },
  ];

  return (
    <section className="lawyer">
      <div className="container">
        <div className="lawyer-inner">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={700}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 25 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {lawyers.map((lawyer, index) => (
              <SwiperSlide key={index}>
                <div className="lawyer-card">
                  <img src={lawyer.image} alt={lawyer.name} />
                  <div className="lawyer-overlay">
                    <h4>{lawyer.name}</h4>
                    <span>{lawyer.title}</span>
                    <p>{lawyer.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Lawyers;

/* import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const scheduleData = [
    {
      icon: "fa fa-ambulance",
      title: "Corporate & Business Law",
      description:
        "Corporate & Business Law deals with legal aspects of businesses, ensuring compliance and protecting interests. It covers contracts, corporate structuring, and regulatory matters, assisting startups to large corporations with essential legal documentation and governance.",
      link: "#",
      label: "Legal Solutions for Businesses & Enterprises",
    },
    {
      icon: "fa fa-prescription",
      title: "Litigation & Dispute Resolution",
      description:
        "Litigation & Dispute Resolution specializes in handling legal conflicts through mediation, arbitration, or court proceedings. It covers civil and criminal cases, ensuring fair settlements and effective legal representation for individuals, businesses, and organizations.",
      link: "#",
      label: "Expert Representation & Conflict Resolution",
    },
    {
      icon: "fa fa-clock",
      title: "Regulatory & Compliance Law",
      description:
        "Regulatory & Compliance Law ensures businesses, institutions, and individuals follow legal regulations, policies, and industry standards. It helps prevent violations, penalties, and risks, ensuring ethical operations and adherence to governmental and corporate requirements.",
      link: "#",
      label: "Ensuring Legal Compliance & Risk Management",
    },
  ];

  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner">
          <div className="row">
            {scheduleData.map((item, index) => (
              <div
                className={`col-lg-3 col-md-${index === 2 ? "12" : "6"} col-12`}
                key={index}
              >
                <div
                  className={`single-schedule ${
                    index === 0 ? "first" : index === 1 ? "middle" : "last"
                  }`}
                >
                  <div className="inner">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="single-content">
                      <span>{item.label}</span>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule; */
