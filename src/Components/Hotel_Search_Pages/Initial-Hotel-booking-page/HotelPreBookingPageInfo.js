import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Button } from "@material-ui/core";
import "../Initial-Hotel-booking-page/hotelPreBooking.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import hotelImage from "./images/hotel-img1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { useHotelCart } from "../../../Context/HotelCartContext";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

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
  const selectedHotel = JSON.parse(sessionStorage.getItem("selectedHotel"));
  const selectedRoom = JSON.parse(sessionStorage.getItem("selectedRoom"));
  let roomType;
  let roomPrice;
  let roomNumber;
  let vat;
  let hotelCharges;
  let totalPay;
  let { checkin, checkout, persons, baby } = JSON.parse(
    sessionStorage.getItem("searchedData")
  );
  const nights = differenceInCalendarDays(
    new Date(checkout),
    new Date(checkin)
  );
  const { hotelCart, setHotelCart } = useHotelCart();

  if (hotelCart) {
    roomType = hotelCart.roomType;
    roomPrice = hotelCart.roomPrice;
    roomNumber = hotelCart.roomNumber;

    hotelCharges = +roomPrice * +roomNumber * nights;
    vat = Math.round(+roomPrice * 0.15 * 100) / 100;
    totalPay = hotelCharges + vat;
  }
  checkin = new Intl.DateTimeFormat("default", { dateStyle: "medium" })
    .format(new Date(checkin))
    .split(" ");
  checkin[1] = checkin[1].slice(0, -1);

  checkout = new Intl.DateTimeFormat("default", { dateStyle: "medium" })
    .format(new Date(checkout))
    .split(" ");
  checkout[1] = checkout[1].slice(0, -1);

  if (selectedRoom) {
    hotelCharges = +selectedRoom.roomPrice * +selectedRoom.roomNumber * nights;
    vat = Math.round(+selectedRoom.roomPrice * 0.15 * 100) / 100;
    totalPay = hotelCharges + vat;
  }

  useEffect(() => {
    if (totalPay) {
      setHotelCart({
        ...hotelCart,
        amount: totalPay,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPay]);

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
                      {selectedHotel.name}
                    </span>
                  </div>
                  <CardContent className="pt-0">
                    {new Array(+selectedHotel.star.split(" ")[0])
                      .fill("star")
                      .map((el, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          size="lg"
                          color="#DFC857"
                        />
                      ))}

                    <div className="mt-4">
                      <p>{roomType || selectedRoom.roomType}</p>
                      <div className="row">
                        <div
                          className="col-md-5 col-12 Check-In"
                          style={{ backgroundColor: "#D3D3D2 " }}
                        >
                          <p className="text-center mb-0">Check-In</p>
                          <h2 className="text-center">{checkin[1]}</h2>
                          <p className="text-center mb-0">{`${checkin[0]}, ${checkin[2]}`}</p>
                        </div>
                        <div
                          className="col-md-5 col-12 ml-1 Check-Out"
                          style={{ backgroundColor: "#D3D3D2 " }}
                        >
                          <p className="text-center mb-0">Check-Out</p>
                          <h2 className="text-center">{checkout[1]}</h2>
                          <p className="text-center mb-0">{`${checkout[0]}, ${checkout[2]}`}</p>
                        </div>
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
                    <p>{roomNumber || selectedRoom.roomNumber} Room</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <span
                        style={{ fontWeight: "bold", fontSize: "12px" }}
                        className="px-0"
                      >
                        {nights} Night
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
                      <span style={{ fontSize: "14px" }}>{persons} Adult</span>
                      <span className="d-block" style={{ fontSize: "14px" }}>
                        {baby} Children
                      </span>
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
                  not be applicable.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-3 col-12">
            <Card>
              <CardContent>
                <div className="row align-items-center">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Room Fare</span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>
                      BDT {roomPrice || selectedRoom.roomPrice}
                    </span>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Num of Rooms</span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>
                      X {roomNumber || selectedRoom.roomNumber}
                    </span>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Nights</span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>X {nights}</span>
                  </div>
                </div>

                <hr></hr>
                <div className="row align-items-center">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Hotel Charges</span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>BDT {hotelCharges}</span>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>
                      Service Charge & VAT (15%)
                    </span>
                  </div>
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>BDT {vat}</span>
                  </div>
                </div>

                <hr></hr>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <span style={{ fontSize: "15px" }}>Sub Total</span>
                  </div>
                  <div className="col-md-6 col-6 ">
                    <span style={{ fontSize: "15px" }}>BDT {totalPay}</span>
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
                      BDT {totalPay}
                    </span>
                  </div>
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
