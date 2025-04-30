import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";

import MobileNav from "./MobileNav";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const sectionArray = useMemo(
    () => ["home", "about", "services", "pricing", "blogs", "fAQs", "contact"],
    []
  );

  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      sectionArray.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const offsetSection = sectionElement.offsetTop - 100;
          if (scrollPos >= offsetSection) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionArray]);

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
      const header = document.querySelector(".header");
      const mobileNav = document.querySelector(".mobile-nav");

      let headerHeight = header ? header.offsetHeight + 80 : 100;

      if (window.innerWidth <= 768 && mobileNav) {
        mobileNav.style.display = "none";
        headerHeight = header ? header.offsetHeight : 100;
        mobileNav.style.display = "";
      }

      const offset = headerHeight;

      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    }, 300);
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-12">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    ref={toggleBtnRef}
                    className={`mob_bton ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    <span className="mob_menutxt"></span>
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
              <div className="col-lg-6 col-md-8 col-12">
                <nav className="navigation">
                  <ul className="nav menu">
                    {sectionArray.map((id) => (
                      <li
                        key={id}
                        className={activeSection === id ? "active" : ""}
                      >
                        <div onClick={() => scrollToSection(id)}>
                          {id.replace(/us/, " Us").charAt(0).toUpperCase() +
                            id.replace(/us/, " Us").slice(1)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="col-lg-2 col-md-1 col-12">
                <div className="get-quote">
                  <Link to="/appointment" className="bton">
                    Login/Register
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-1 col-12">
                <div className="get-quote">
                  <Link to="/appointment" className="bton">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
