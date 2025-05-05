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
      name: "Chaudhry M. Kamran",
      title: "Principal Solicitor",
      description:
        "He leads the legal team, offering strategic advice, overseeing complex cases, ensuring compliance, and maintaining high professional standards while representing clients with expertise, integrity, and dedication.",
    },
    {
      image: LawyerImg2,
      name: "Dosani Mehboobali Ahmedali",
      title: "Senior Associate",
      description:
        "He handles complex legal matters, mentors junior staff, and supports case strategy development. They bring extensive experience, ensuring high-quality legal advice, client representation, and efficient case management.",
    },
    {
      image: LawyerImg3,
      name: "Kotwani Monisha",
      title: "Associate",
      description:
        "She supports senior lawyers in legal research, drafting documents, and managing client cases. They contribute to case preparation, ensure accuracy, and develop expertise across various legal practice areas.",
    },
    {
      image: LawyerImg4,
      name: "Ahmed Ashfaq",
      title: "Pending Admission as a Solicitor",
      description:
        "A legal professional pending admission as a Solicitor, actively gaining practical experience, supporting legal teams, and preparing for full qualification while demonstrating strong commitment and legal knowledge.",
    },
    {
      image: LawyerImg5,
      name: "Irene Cheng",
      title: "Solicitor (Consultant)",
      description:
        "She offers specialized legal expertise on a flexible basis, advising on complex issues, supporting case strategy, and enhancing the firm’s capabilities without full-time engagement or operational responsibilities.",
    },
    {
      image: LawyerImg6,
      name: "Simran Sajhwani",
      title: "Trainee Solicitor",
      description:
        "She undergoes structured training across legal departments, gaining hands-on experience in casework, client interaction, and legal procedures, building essential skills toward becoming a fully qualified solicitor.",
    },
    {
      image: LawyerImg7,
      name: "Ann Cheung",
      title: "Senior Associate",
      description:
        "She is a seasoned legal professional who manages complex cases, advises clients, mentors junior lawyers, and contributes to strategic decisions, ensuring high-quality legal services and consistent client satisfaction.",
    },
    {
      image: LawyerImg8,
      name: "Soumya Jain",
      title: "Registered Foreign Lawyer (India)",
      description:
        "She provides expert legal insight on Indian law, supporting cross-border matters, advising on international cases, and collaborating with local teams to ensure culturally informed legal solutions.",
    },
    {
      image: LawyerImg9,
      name: "Rafay Ali",
      title: "Trainee Solicitor",
      description:
        "He gains practical legal experience under supervision, rotating through various departments, assisting with research, drafting, and client work, while developing skills essential for qualification as a solicitor.",
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
