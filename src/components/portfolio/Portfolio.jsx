import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import PortfolioImg from "../../assets/images/section-img.png";
import PortfolioImg1 from "../../assets/images/pf1.jpg";
import PortfolioImg2 from "../../assets/images/pf2.jpg";
import PortfolioImg3 from "../../assets/images/pf3.jpg";
import PortfolioImg4 from "../../assets/images/pf4.jpg";
// import PortfolioImg5 from "../../assets/images/pf5.jpg";
// import PortfolioImg6 from "../../assets/images/pf6.jpg";
// import PortfolioImg7 from "../../assets/images/pf7.jpg";
// import PortfolioImg8 from "../../assets/images/pf8.jpg";

import "swiper/css";
import "./Portfolio.css";

const portfolioItems = [
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
];

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
              <img src={PortfolioImg} alt="#" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
                aliquet. pretiumts
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={15}
              breakpoints={{
                300: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1170: { slidesPerView: 4 },
              }}
              className="portfolio-slider"
            >
              {portfolioItems.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="single-pf">
                    <img src={image} alt="Portfolio Item" />
                    <a href="portfolio-details.html" className="bton">
                      View Details
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
