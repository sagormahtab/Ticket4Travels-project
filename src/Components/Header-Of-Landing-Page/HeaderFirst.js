import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./HeaderFirst.css";

const HeaderFirst = () => {
  return (
    <div
      className="navbar nab-formobile-view"
      style={{ backgroundColor: "#30dd89" }}
    >
      <nav className="nav ml-auto Header-content">
        <div className="nav-link ">
          <FontAwesomeIcon icon={faMailBulk} color="white" />
          <span className="ml-1">
            <a
              href="mailto: contact@tickets4travel.com"
              style={{ color: "white" }}
            >
              contact@tickets4travel.com
            </a>
          </span>
        </div>

        <div className="nav-link ">
          <FontAwesomeIcon icon={faPhone} color="white" />
          <span>
            <a href="tel: +8809611262020" style={{ color: "white" }}>
              +8809611262020
            </a>
          </span>
        </div>
      </nav>

      <div
        className="Header-content-forMobile"
        style={{ width: "100%", height: "20px" }}
      >
        <div className="d-flex flex-row-reverse">
          <div className="ml-2 order-2">
            <FontAwesomeIcon icon={faMailBulk} />
            <span className="ml-2">
              <a
                href="mailto: contact@tickets4travel.com"
                style={{ color: "white" }}
              >
                Email
              </a>
            </span>
          </div>
          <div className="ml-2 order-1">
            <FontAwesomeIcon icon={faPhone} />
            <span className="ml-2">
              <a href="tel: +8809611262020" style={{ color: "white" }}>
                Phone
              </a>
            </span>
          </div>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default HeaderFirst;
