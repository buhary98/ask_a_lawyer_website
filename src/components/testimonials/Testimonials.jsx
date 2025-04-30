import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mazhar Ghafar",
      feedback:
        "Chaudhry Solicitors have an excellent team who value every client. I'm thankful to Mr. Karam and Ms. Somya for handling my case. I highly recommend them to anyone needing legal help. Thank you for solving my problem professionally.",
    },
    {
      name: "Irfan Mushtaq",
      feedback:
        "Mr. John Safdar of Chaudhry Solicitors provided clear instructions and guidance. He diligently handled my visa process, and I am truly grateful. My entire family joins me in appreciating his exceptional support throughout the entire journey.",
    },
    {
      name: "Anas Khan",
      feedback:
        "I sincerely thank Mr. Ahmed Ashfaq for his exceptional service. His expertise and attention to detail in handling my personal injury claim from a road accident were outstanding. I truly appreciate his dedication throughout the entire process.",
    },
    {
      name: "Sudais Jani",
      feedback:
        "Mr. Ahmed Ashfaq of Chaudhry Solicitors diligently secured my visa, and I am truly grateful for his services. My entire family deeply appreciates his professionalism, dedication, and exceptional work throughout the process. Thanks for your support.",
    },
    {
      name: "Angelica Louise",
      feedback:
        "We had the pleasure of working with Mr. Chaudhry and his team, who provided exceptional support. His legal knowledge, clear communication, and cross-examination skills stood out. We highly recommend Chaudhry Solicitors for legal assistance.",
    },
    {
      name: "Luqman Chakim",
      feedback:
        "On behalf of my family, I sincerely thank Chaudhry Solicitors, especially Mr. Ahmed Ashfaq, for guiding us through the visa process with clear and detailed information. Their excellent service and cooperation make them truly worth recommending to others.",
    },
    {
      name: "Anny Andw",
      feedback:
        "I sincerely thank Mr. Ahmed Ashfaq for his exceptional help in securing my husband’s dependent visa. His professionalism and dedication made the process smooth and stress-free. I highly recommend him to anyone needing reliable visa assistance.",
    },
    {
      name: "JasmineRd Kumar",
      feedback:
        "I sincerely thank Chaudhry Solicitors, especially Mr. Ahmed Ashfaq. He handled my tough case with professionalism, efficiency, and dedication, resolving it within days. I had lost hope, but his support restored it. I highly recommend him to friends.",
    },
  ];

  return (
    <section className="testimonials overlay section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="content">
              <div className="section-title">
                <h2>How Our Legal Expertise Helped Clients Achieve Justice</h2>
                <i className="fas fa-gavel"></i>
                <p>
                  Our clients' success speaks for itself. Read real stories from
                  individuals and businesses who trusted us for legal guidance.
                  Their experiences highlight our commitment to professionalism,
                  reliability, and achieving the best legal outcomes.
                </p>
              </div>
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
                  460: { slidesPerView: 1, spaceBetween: 10 },
                  576: { slidesPerView: 2, spaceBetween: 20 },
                  992: { slidesPerView: 3, spaceBetween: 25 },
                  1200: { slidesPerView: 4, spaceBetween: 30 },
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
                      <div className="inner-content">
                        <h4>{testimonial.name}</h4>
                        <p>"{testimonial.feedback}"</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
