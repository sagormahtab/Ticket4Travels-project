import React from "react";
import { Card, CardContent, CardMedia, Button } from "@material-ui/core";
import "../Initial-Hotel-booking-page/hotelPreBooking.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import hotelImage from "./images/hotel-img1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  HotelButton: {
    width: 300,
    height: 70,
  },
  CardRoot: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
  },
  hotelContent: {
    flex: "1 1  auto",
    [theme.breakpoints.down("sm")]: {
      flex: "100%",
    },
  },
  bookNowContent: {
    flex: "1 1  auto",
    marginTop: "10px",
  },
}));

function HotelPreBookingPageInfo() {
  const classes = useStyles();

  return (
    <div>
      <div className="container mt-5 mb-5">
        <h3>Review & Confirm Your Booking</h3>
        <div className="row">
          <div className="col-md-9 col-sm-12 col-12">
            <Card>
              <CardContent className={classes.CardRoot}>
                <CardMedia>
                  <img
                    src={hotelImage}
                    alt="Hotel"
                    width="250px"
                    height="250px"
                  ></img>
                </CardMedia>

                <CardContent className={classes.hotelContent}>
                  <div className="ml-1">
                    <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                      The Raintree Dhaka
                    </span>
                  </div>
                  <CardContent className="pt-0">
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="sm" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="sm" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="sm" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="sm" />

                    <div className="row mt-4">
                      <div
                        className="col-md-5 col-12 Check-In"
                        style={{ backgroundColor: "#D3D3D2 " }}
                      >
                        <p className="text-center">Check-In</p>
                        <h2 className="text-center">18</h2>
                      </div>
                      <div
                        className="col-md-5 col-12 ml-1 Check-Out"
                        style={{ backgroundColor: "#D3D3D2 " }}
                      >
                        <p className="text-center">Check-Out</p>
                        <h2 className="text-center">18</h2>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-4">
                        <span style={{ fontWeight: "bold" }}>Inclusion:</span>
                      </div>

                      <div className="col-md-8">
                        <div>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            color="green"
                            size="sm"
                          />{" "}
                          <span>Breakfast</span>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            color="green"
                            size="sm"
                          />{" "}
                          <span>Shower</span>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            color="green"
                            size="sm"
                          />{" "}
                          <span>Air Conditioner</span>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            color="green"
                            size="sm"
                          />{" "}
                          <span>Television</span>
                        </div>
                      </div>
                    </div>

                    <div className="row"></div>
                  </CardContent>
                </CardContent>

                <CardContent className={classes.bookNowContent}>
                  <div>
                    <p>1 Room</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <span
                        style={{ fontWeight: "bold", fontSize: "12px" }}
                        className="px-0"
                      >
                        1 Night & 2 Days
                      </span>
                    </div>
                    <div className="col-md-6 col-6 px-0">
                      <span style={{ fontSize: "14px" }}>Change Room</span>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <span>Room Capacity:</span>
                    </div>
                    <div className="col-md-6 col-6">
                      <span style={{ fontSize: "14px" }}>1 Adult</span>
                    </div>
                  </div>
                  <hr></hr>
                </CardContent>
              </CardContent>

              <CardContent style={{ backgroundColor: "#D3D3D2" }}>
                <h6>Cancellation Policy:</h6>
                <p className="m-0" style={{ fontSize: "14px" }}>
                  {" "}
                  Before 7 Days of check in: FREE cancellation
                </p>
                <p className="m-0" style={{ fontSize: "14px" }}>
                  {" "}
                  Within 7 Days of check in: Full amount of the first night's
                  charge
                </p>
                <p className="m-0" style={{ fontSize: "14px" }}>
                  {" "}
                  Failure to arrive at the hotel or property will be treated as
                  No-show and will incur the first night’s charge.
                </p>
                <p className="m-0" style={{ fontSize: "14px" }}>
                  {" "}
                  During Blackout/Long Holidays period Cancellation policy will
                  not be applicable..
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-3 col-12">
            <Card>
              <CardContent>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Hotel Charges</span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>BDT 20,750.00</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Discount</span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>BDT 13,280.00</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Hotel Offer (64%)</span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>BDT 13,280.00</span>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Sub Total</span>
                  </div>
                  <div className="col-md-6 col-6 ">
                    <span style={{ fontSize: "15px" }}>BDT 7,470.00</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>
                      Service Charge & VAT
                    </span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>BDT 1,979.55</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>
                      Service Charge (10%)
                    </span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>BDT 747.00</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <sapn style={{ fontSize: "15px" }}>VAT (15%)</sapn>
                  </div>
                  <div className="col-md-6 col-6">
                    <sapn style={{ fontSize: "15px" }}>BDT 1,232.55</sapn>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                      You Pay
                    </span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                      BDT 9,449.55
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-6">Total Savings:</div>
                  <div className="col-md-6 col-6">BDT 16,799.20</div>
                </div>
              </CardContent>
            </Card>
            <Link to="/booking_Stepper">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="p-3 mt-3"
              >
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HotelPreBookingPageInfo;
