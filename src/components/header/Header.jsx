import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { FaUser, FaGraduationCap, FaCalendarCheck } from "react-icons/fa";

import MobileNav from "./MobileNav";

import LogoSmall from "../../assets/images/favicon.png";
import LogoLarge from "../../assets/images/logo.png";

const Header = () => {
  const sectionArray = [
    "home",
    "about",
    "services",
    "pricing",
    "blogs",
    "fAQs",
    "contact",
  ];

  const sectionLabels = {
    home: "Home",
    about: "About",
    services: "Services",
    pricing: "Pricing",
    blogs: "Blogs",
    fAQs: "FAQs",
    contact: "Contact",
  };

  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== activeSection) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionArray.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      let headerHeight = headerRef.current
        ? headerRef.current.offsetHeight + 80
        : 100;

      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(id);
        if (section) {
          const top =
            section.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    }, 300);
  };

  return (
    <header ref={headerRef} className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-inner">
        <div className="row">
          <div className="col-lg-2 col-md-1 d-flex d-lg-block align-items-center">
            <div className="logo d-none d-lg-block me-2">
              <a href="/">
                <img src={LogoLarge} alt="Ask A Lawyer Logo Large" />
              </a>
            </div>
            <div className="logo d-block d-lg-none me-2">
              <a href="/">
                <img src={LogoSmall} alt="Ask A Lawyer Logo Small" />
              </a>
            </div>
            <div className="d-flex d-md-none d-lg-none align-items-center gap-2 flex-grow-1 justify-content-between">
              <div className="mobile-bton d-flex align-items-center gap-2 ms-auto">
                <a
                  href="https://ahsuite.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bton-1 d-flex align-items-center"
                >
                  <FaUser />
                </a>
                <Link
                  to="/appointment"
                  className="bton-1 d-flex align-items-center"
                >
                  <FaCalendarCheck />
                </Link>
                <Link to="/" className="bton-2 d-flex align-items-center">
                  <FaGraduationCap />
                </Link>
              </div>

              <button
                ref={toggleBtnRef}
                className={`mob_bton ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <span className="mob_icon mob_no-text">
                  <span className="mob_icon-bar"></span>
                  <span className="mob_icon-bar"></span>
                  <span className="mob_icon-bar"></span>
                </span>
              </button>
            </div>
          </div>
          <MobileNav
            isOpen={isOpen}
            menuRef={menuRef}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
          <div className="col-lg-5 col-md-8">
            <nav className="navigation">
              <ul className="nav menu">
                {sectionArray.map((id) => (
                  <li key={id} className={activeSection === id ? "active" : ""}>
                    <div onClick={() => scrollToSection(id)}>
                      {sectionLabels[id]}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-5 col-md-3">
            <div className="header-btn">
              <div className="get-quote">
                <a
                  href="https://ahsuite.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bton-1"
                  style={{ background: "#1A76D1" }}
                >
                  <FaUser />
                  <span
                    className="d-none d-lg-inline"
                    style={{ paddingLeft: "10px" }}
                  >
                    User Login
                  </span>
                </a>
              </div>
              <div className="get-quote">
                <Link to="/appointment" className="bton-1">
                  <FaCalendarCheck />
                  <span
                    className="d-none d-lg-inline"
                    style={{ paddingLeft: "10px" }}
                  >
                    Book Appointment
                  </span>
                </Link>
              </div>
              <div className="get-quote">
                <Link to="/" className="bton-1" style={{ background: "gray" }}>
                  <FaGraduationCap />
                  <span
                    className="d-none d-lg-inline"
                    style={{ paddingLeft: "10px" }}
                  >
                    Our Course (CPD)
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
