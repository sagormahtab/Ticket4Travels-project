import React from "react";
// import Wave_png from "../Footer_part/images/Wave.png"

import bikas from "../Footer_part/images/bikas1.png";
import play from "../Footer_part/images/google.png";
import apple from "../Footer_part/images/Apple.png";
import "./footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
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
            <div className="col-md-3 col-sm-6 ">
              {/* <h6>About us</h6> */}
              <div className="about-us "><a href="aboutus" alt="About us">About us</a></div>
              <div className="mt-3 ">
                <div className="mt-3 about-us-content1"><a href="##"> How to book</a></div>
                <div className="mt-3 about-us-content2"><a href="##"> Contact us</a></div>
                <div className="mt-3 about-us-content3"><a href="##"> Help Center</a></div>
                <div className="mt-3 about-us-content4"><a href="##"> Installment</a></div>
              </div>
              <FontAwesomeIcon icon={faCcPaypal} size="3x" color="#3b7bbf" className="paypal" />
            </div>
            <div className="col-md-3 col-sm-6 ">
              <h6 className="followUs-Header">Follow us On</h6>
              <div className="mt-3 mr-1 d-flex  align-items-center followUs-body1">
                <FontAwesomeIcon icon={faFacebookSquare} color="#4267B2" size="lg" />
                <a href="##" className="ml-2"><span>Facebook</span></a>
              </div>
              <div className="mt-3 mr-4 d-flex  align-items-center followUs-body2">
                <FontAwesomeIcon icon={faTwitterSquare} size="lg" color="#1DA1F2" /><a href="##" className="ml-2">Twitter</a>
              </div>
              <div className="mt-3 mr-1 d-flex align-items-center followUs-body3">
                <FontAwesomeIcon icon={faInstagram} size="lg" color="#e95950" /><a href="##" className="ml-2">Instagram</a>
              </div>
              <div className="mt-3 mr-2 d-flex align-items-center followUs-body4">
                <FontAwesomeIcon icon={faYoutube} size="lg" color="#FF0000" /><a href="##" className="ml-2">YouTube</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faCcVisa} size="3x" color="#fcb70a" className="visa" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="products-header">Products</h6>
              <div className="mt-3 products-body1">
                <Link to="/flight" ><a href="##" > Flights</a></Link></div>
              <div className="mt-3 products-body2">
                <Link to="/hotel"><a href="##" className="products-body2"> Hotels</a></Link></div>
              <div className="mt-3 products-body3">
                <Link to="/launch"><a href="##" className="products-body3"> Launch</a></Link></div>
              <div className="mt-3 products-body4">
                <Link to="/bus"><a href="##" className="products-body4"> Bus</a></Link></div>
              <div className="mt-3 products-body5">
                <Link to="/train"><a href="##" className="products-body5"> Train</a></Link></div>
              <img
                src={bikas}
                alt="paypal"
                height="30px"
                width="30px"
                className=" bikash  img-fluid"
              ></img>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="others-Products-Header">Others Products</h6>
              <div className="mt-3 others-Products-body1"><a href="##"> Flights</a></div>
              <div className="mt-3 others-Products-body2"><a href="##"> Hotels</a></div>
              <div className="mt-3 others-Products-body3"><a href="##"> Train</a></div>
              <div className="mt-3 others-Products-body4"><a href="##"> Bus</a></div>
              <p className="mt-5 Our-app-header" style={{ color: "white" }}>Download Our App</p>
              <img
                src={play}
                alt="play"
                className="play img-fluid"
                height="50px"
                width="150px"
              ></img>
              <img
                src={apple}
                alt="apple"
                className="apple img-fluid"
                height="50px"
                width="160px"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
