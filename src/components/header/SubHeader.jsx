import React from "react";
import "./Header.css";

const SubHeader = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <ul className="top-contact">
              <li>
                <i className="fa fa-phone"></i> +880 1234 56789
              </li>
              <li>
                <i className="fa fa-envelope"></i> support@yourmail.comX
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
