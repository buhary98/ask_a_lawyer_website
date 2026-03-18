import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "./Lawyers.css";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await fetch(
          "https://askalawyer.hk/cms/wp-json/wp/v2/lawyers",
        );

        const data = await response.json();

        setLawyers(data || []);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news: {error.message}</div>;
  if (!lawyers.length) return <div>No lawyers found</div>;

  return (
    <section className="lawyer" id="lawyers">
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
            {lawyers.map((lawyer) => {
              const acf = lawyer.acf || {};

              return (
                <SwiperSlide key={lawyer.id}>
                  <div className="lawyer-card">
                    {acf.lawyer_image && (
                      <img src={acf.lawyer_image} alt={acf.lawyer_name} />
                    )}
                    <div className="lawyer-overlay">
                      <h4>{acf.lawyer_name}</h4>
                      <span>{acf.lawyer_title}</span>
                      <p>{acf.lawyer_description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Lawyers;
