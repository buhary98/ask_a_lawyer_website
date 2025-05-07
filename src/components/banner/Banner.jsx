import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import BannerImg1Lg from "../../assets/images/slider-lg-1.jpg";
import BannerImg1Md from "../../assets/images/slider-md-1.jpg";
import BannerImg1Sm from "../../assets/images/slider-sm-1.jpg";

import BannerImg2Lg from "../../assets/images/slider-lg-2.jpg";
import BannerImg2Md from "../../assets/images/slider-md-2.jpg";
import BannerImg2Sm from "../../assets/images/slider-sm-2.jpg";

import BannerImg3Lg from "../../assets/images/slider-lg-3.jpg";
import BannerImg3Md from "../../assets/images/slider-md-3.jpg";
import BannerImg3Sm from "../../assets/images/slider-sm-3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";

const slides = [
  {
    imageLg: BannerImg1Lg,
    imageMd: BannerImg1Md,
    imageSm: BannerImg1Sm,
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
    imageLg: BannerImg2Lg,
    imageMd: BannerImg2Md,
    imageSm: BannerImg2Sm,
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
    imageLg: BannerImg3Lg,
    imageMd: BannerImg3Md,
    imageSm: BannerImg3Sm,
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

const getResponsiveImage = (slide) => {
  if (window.matchMedia("(max-width: 767px)").matches) return slide.imageSm;
  if (window.matchMedia("(max-width: 991px)").matches) return slide.imageMd;
  return slide.imageLg;
};

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenImage, setScreenImage] = useState(getResponsiveImage(slides[0]));

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = document.querySelector("header")?.offsetHeight + 80 || 100;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const updateImage = () => {
      setScreenImage(getResponsiveImage(slides[activeIndex]));
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [activeIndex]);

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
        {slides.map((slide, index) => {
          const image = getResponsiveImage(slide);
          return (
            <SwiperSlide
              key={index}
              className={index === activeIndex ? "swiper-slide-active" : ""}
            >
              <div
                className="single-slider"
                style={{ backgroundImage: `url(${image})` }}
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
                        <button
                          className="button bton"
                          onClick={() => scrollToSection(slide.link)}
                        >
                          {slide.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Banner;
