import React, { useEffect, useRef } from "react";
import "./Facts.css";

const Facts = () => {
  const factsData = [
    {
      icon: "fa-balance-scale",
      count: 1463,
      label: "Cases Handled",
      fast: true,
    },
    {
      icon: "fa-user-large",
      count: 8,
      label: "Experienced Lawyers",
      fast: false,
    },
    { icon: "fa-face-smile", count: 135, label: "Clients Served", fast: false },
    {
      icon: "fa-calendar-days",
      count: 12,
      label: "Years of Expertise",
      fast: false,
    },
  ];

  const countersRef = useRef([]);

  useEffect(() => {
    const isVisible = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    const animateCount = () => {
      countersRef.current.forEach((counter, index) => {
        if (
          counter &&
          isVisible(counter) &&
          !counter.classList.contains("counter-loaded")
        ) {
          counter.classList.add("counter-loaded");
          const target = parseInt(counter.getAttribute("data-count"), 10);
          let start = 0;
          const duration = factsData[index].fast ? 5000 : 10000;
          const stepTime = Math.abs(Math.floor(duration / target));

          const updateCounter = () => {
            start += 1;
            counter.textContent = start;
            if (start < target) {
              setTimeout(updateCounter, stepTime);
            } else {
              counter.textContent = target;
            }
          };
          updateCounter();
        }
      });
    };

    const handleScroll = () => animateCount();

    window.addEventListener("scroll", handleScroll);
    animateCount();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fun-facts section overlay" id="facts">
      <div className="container">
        <div className="row">
          {factsData.map((fact, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <div className="single-fun">
                <i className={`fa-solid ${fact.icon}`}></i>
                <div className="content">
                  <span
                    ref={(el) => (countersRef.current[index] = el)}
                    className="count-digit"
                    data-count={fact.count}
                  >
                    0
                  </span>
                  <p>{fact.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
