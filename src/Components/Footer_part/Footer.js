import React from "react";
// import Wave_png from "../Footer_part/images/Wave.png"
import paypal from "../Footer_part/images/paypal1.jpg";
import visa from "../Footer_part/images/visa (1).png";
import bikas from "../Footer_part/images/bikas1.png";
import play from "../Footer_part/images/play store1.png";
import apple from "../Footer_part/images/apple store2.jpg";
import fb from "../Footer_part/images/fb1.png";
import insta from "../Footer_part/images/instsgram.png";
import Youtube from "../Footer_part/images/youtube.png";
import "./footer.css";

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
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h3>About us</h3>
              <p>How to book</p>
              <p>Contact us</p>
              <p>Help Center</p>
              <p>Installment</p>
              <img
                src={paypal}
                alt="paypal"
                height="40px"
                width="70px"
                className="logog img-fluid mt-4"
              ></img>
            </div>
            <div className="col-md-3 col-sm-6">
              <h3>Follow us On</h3>
              <div>
                <img
                  src={fb}
                  width="40px"
                  height="30px"
                  alt=""
                  className="img-fluid mb-2 mr-2"
                ></img>
                 Facebook
              </div>
              <div>
                <img
                  src={fb}
                  width="40px"
                  height="30px"
                  alt=""
                  className="img-fluid mb-2 mr-2"
                ></img>
                Facebook
              </div>
              <div>
                <img
                  src={insta}
                  width="35px"
                  height="30px"
                  alt=""
                  className="img-fluid mb-2 mr-2"
                ></img>
                  Instagram
              </div>
              <div>
                <img
                  src={Youtube}
                  width="35px"
                  height="30px"
                  alt=""
                  className="img-fluid mb-2 mr-2"
                ></img>
                  YouTube
              </div>
              <div>
                <img
                  src={visa}
                  alt="paypal"
                  height="40px"
                  width="60px"
                  className=" logog ml-3 img-fluid mt-3"
                ></img>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <h3>Products</h3>
              <p>Flights</p>
              <p>Hotel</p>
              <p>Train</p>
              <p>Bus</p>
              <img
                src={bikas}
                alt="paypal"
                height="40px"
                width="40px"
                className=" logog ml-3 img-fluid mt-4"
              ></img>
            </div>
            <div className="col-md-3 col-sm-6">
              <h3>Others</h3>
              <h3>Products</h3>
              <p>Flights</p>
              <p>Hotel</p>
              <p>Train</p>
              <p>Bus</p>
              <h2>Download Our App</h2>
              <img
                src={play}
                alt="play+apple"
                className="pa img-fluid"
                height="70px"
                width="130px"
              ></img>
              <img
                src={apple}
                alt="play+apple"
                className="pa img-fluid"
                height="50px"
                width="130px"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
