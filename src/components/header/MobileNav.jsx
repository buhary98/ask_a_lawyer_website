import React from "react";
import "./Header.css";

const MobileNav = ({ isOpen, menuRef, activeSection, scrollToSection }) => {
  return (
    <div className="mobile-nav" ref={menuRef}>
      <ul className={`mob_nav ${isOpen ? "show" : ""}`} aria-hidden={!isOpen}>
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "services", label: "Services" },
          { id: "pricing", label: "Pricing" },
          { id: "blogs", label: "Blogs" },
          { id: "faqs", label: "FAQs" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <li key={id} className={activeSection === id ? "active" : ""}>
            <div onClick={() => scrollToSection(id)} role="menuitem">
              {label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
