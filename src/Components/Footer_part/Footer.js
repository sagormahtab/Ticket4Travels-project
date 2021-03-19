import React from "react";
// import Wave_png from "../Footer_part/images/Wave.png"
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fill-opacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,144C384,139,480,85,576,90.7C672,96,768,160,864,176C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 ">
              {/* <h6>About us</h6> */}
              <div className="about-us">
                <h6 className="d-flex justify-content-center text-center align-items-center">
                  About Tickets4travel
                </h6>
              </div>
              <div className="mt-3 ">
                <div className="mt-3 about-us-content1 d-flex justify-content-center text-center align-items-center">
                  <Link to="/how-to-book">
                    <a href="##"> How to book</a>
                  </Link>
                </div>
                <div className="mt-3 about-us-content4 d-flex justify-content-center text-center align-items-center">
                  <Link to="/aboutus">
                    <a href="##"> About us</a>
                  </Link>
                </div>
                <div className="mt-3 about-us-content4 d-flex justify-content-center text-center align-items-center">
                  <Link to="/careers-with-us">
                    <a href="##"> Careeers With Us</a>
                  </Link>
                </div>
                <div className="mt-3 about-us-content4 d-flex justify-content-center text-center align-items-center">
                  <Link to="/meet-our-team">
                    <a href="##"> Meet Our Team</a>
                  </Link>
                </div>
                <div className="mt-3 about-us-content2 d-flex justify-content-center text-center align-items-center">
                  <Link to="/contactWithUs">
                    <a href="##"> Contact us</a>
                  </Link>
                </div>
                <div className="mt-3 about-us-content3 d-flex justify-content-center text-center align-items-center">
                  <Link to="/partnership">
                    <a href="##"> PartnerShip with us</a>
                  </Link>
                </div>
              </div>
              {/* <FontAwesomeIcon icon={faCcPaypal} size="3x" color="#3b7bbf" className="paypal" /> */}
            </div>
            <div className="col-md-4 col-sm-6 ">
              <h6 className="followUs-Header d-flex justify-content-center text-center align-items-center">
                Follow us On
              </h6>
              <div className="mt-3 mr-1 d-flex  justify-content-center text-center align-items-center followUs-body1">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="#4267B2"
                  size="lg"
                />
                <a
                  href="https://www.facebook.com/Tickets4Travel-100339085420852"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <span>Facebook</span>
                </a>
              </div>
              <div className="mt-3 mr-4 d-flex justify-content-center text-center align-items-center followUs-body2">
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  size="lg"
                  color="#1DA1F2"
                />
                <a
                  href="https://twitter.com/Tickets4T"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  Twitter
                </a>
              </div>
              <div className="mt-3 mr-1 d-flex justify-content-center text-center align-items-center followUs-body3">
                <FontAwesomeIcon icon={faInstagram} size="lg" color="#e95950" />
                <a
                  href="https://www.instagram.com/tickets4travel/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  Instagram
                </a>
              </div>
              <div className="mt-3 mr-2 d-flex justify-content-center text-center align-items-center followUs-body4">
                <FontAwesomeIcon icon={faYoutube} size="lg" color="#FF0000" />
                <a
                  href="https://www.youtube.com/channel/UC1ULM4XtHOAABUUcIOcwZUA"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  YouTube
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <h6 className="products-header d-flex justify-content-center text-center align-items-center">
                Services
              </h6>
              <div className="mt-3 products-body1 d-flex justify-content-center text-center align-items-center">
                <Link to="/flight">
                  <a href="##"> Flights</a>
                </Link>
              </div>
              <div className="mt-3 products-body2 d-flex justify-content-center text-center align-items-center">
                <Link to="/hotel">
                  <a href="##" className="products-body2">
                    Hotels
                  </a>
                </Link>
              </div>
              <div className="mt-3 products-body3 d-flex justify-content-center text-center align-items-center">
                <Link to="/launch">
                  <a href="##" className="products-body3">
                    Launch
                  </a>
                </Link>
              </div>
              <div className="mt-3 products-body4 d-flex justify-content-center text-center align-items-center">
                <Link to="/bus">
                  <a href="##" className="products-body4">
                    Bus
                  </a>
                </Link>
              </div>
              <div className="mt-3 products-body5 d-flex justify-content-center text-center align-items-center">
                <Link to="/train">
                  <a href="##" className="products-body5">
                    Train
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
