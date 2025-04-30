import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import BannerImg1 from "../../assets/images/slider1.png";
import BannerImg2 from "../../assets/images/slider2.png";
import BannerImg3 from "../../assets/images/slider3.png";

import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";

const slides = [
  {
    image: BannerImg1,
    headingText1: "Get Instant",
    headingText2: "Legal Help",
    headingText3: "from",
    headingText4: "Expert Lawyers",
    subHeadingText:
      "Need quick legal advice? Our experienced lawyers are available 24/7 to provide accurate guidance. No waiting, no hassle—just expert assistance whenever you need it. Connect with a lawyer today and resolve your legal concerns efficiently.",
    buttonText: "Ask a Lawyer Now",
    link: "contact",
  },
  {
    image: BannerImg2,
    headingText1: "",
    headingText2: "Legal Services",
    headingText3: "with Clear & Fair",
    headingText4: "Pricing",
    subHeadingText:
      "Get the legal support you need without breaking the bank. Our clear, upfront pricing ensures you only pay for what you use. Choose from flexible plans designed for individuals and businesses—simple, fair, and completely transparent.",
    buttonText: "View Pricing & Plans",
    link: "pricing",
  },
  {
    image: BannerImg3,
    headingText1: "Your",
    headingText2: "Legal Issues,",
    headingText3: "Handled with",
    headingText4: "Privacy",
    subHeadingText:
      "We prioritize your privacy. Every consultation and document exchange is secured with the highest confidentiality standards. Discuss your legal issues with peace of mind, knowing your information is protected and handled by experienced legal experts.",
    buttonText: "Get Legal Assistance",
    link: "about",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="slider" id="home">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={500}
        navigation={true}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={index === activeIndex ? "swiper-slide-active" : ""}
          >
            <div
              className="single-slider"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="text">
                      <h1>
                        {slide.headingText1} <span>{slide.headingText2}</span>{" "}
                        {slide.headingText3} <span>{slide.headingText4}</span>
                      </h1>
                      <p>{slide.subHeadingText}</p>
                      <div
                        className="button bton"
                        onClick={() => scrollToSection(slide.link)}
                      >
                        {slide.buttonText}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
