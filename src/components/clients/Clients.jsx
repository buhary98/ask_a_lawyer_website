import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ClientstImg1 from "../../assets/images/client1.png";
import ClientstImg2 from "../../assets/images/client2.png";
import ClientstImg3 from "../../assets/images/client3.png";
import ClientstImg4 from "../../assets/images/client4.png";
import ClientstImg5 from "../../assets/images/client5.png";

import "swiper/css";
import "swiper/css/autoplay";
import "./Clients.css";

const clientLogos = [
  ClientstImg1,
  ClientstImg2,
  ClientstImg3,
  ClientstImg4,
  ClientstImg5,
  ClientstImg1,
  ClientstImg2,
  ClientstImg3,
  ClientstImg4,
  ClientstImg5,
];

const Clients = () => {
  return (
    <section className="clients overlay">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index} className="single-clients">
              <img src={logo} alt={`Client ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
