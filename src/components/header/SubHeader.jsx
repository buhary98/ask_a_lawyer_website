import React from "react";
import "./Header.css";

const SubHeader = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6 col-md-5 col-12">
            <ul className="top-link">
              {[
                { name: "About", link: "#" },
                { name: "Doctors", link: "#" },
                { name: "Contact", link: "#" },
                { name: "FAQ", link: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="col-lg-12 col-md-12 col-12">
            <ul className="top-contact">
              <li>
                <i className="fa fa-phone"></i> +880 1234 56789
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:support@yourmail.com">support@yourmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
