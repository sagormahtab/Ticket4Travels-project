import React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import icon from "../Booking-Partt/images/ICOn.png";
import peopleIocn from "../Booking-Partt/images/people.png";
import "../Booking-Partt/booking.css";
import { useBus } from "../../../BusContext";
import { useCart } from "../../../CartContext";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom"

function Booking({
  handleNext,
  handleChange,
  value: { name, email, phone },
  formErrors,
}) {
  const { bus } = useBus();
  const { cart, setCart } = useCart();
  const isValid =
    name.length > 0 &&
    !formErrors.name &&
    email.length > 0 &&
    !formErrors.email &&
    phone.length > 0 &&
    !formErrors.phone;

  const handleSubmit = () => {
    setCart({
      ...cart,
      depDate: bus.date,
      passenger: { name, email, phone },
    });
    handleNext();
  };

  return (
    <div>
      <div className="container mt-3 mb-2">
        <div>
          <h2 className="text-left mb-0">Your Bookings</h2>
          <p className="mt-2">Fill in your details and review bookings</p>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-6 mt-3 booking_1stcard">
            <Card className="booking_Card1">
              <CardContent>
                <div >
                  <div className="row">
                    <div className="col-md-3 col-3 text-left ">
                      <img
                        src={icon}

                        alt=""
                        className="img-fluid"
                      ></img>
                    </div>

                    <div className="col-md-9 col-9 text-left mt-3 px-0">
                      <p>Log in or register to enjoy this-member-only</p>
                      <p>
                        <img
                          src={peopleIocn}
                          width="20px"
                          height="20px"
                          alt=""
                          className="img-fluid"
                        ></img>{" "}
                      Book faster and easier with passenger quick pick
                    </p>
                      <Link to="/login_form">
                        <span className="color_change">Log in or Regiter</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <h2 className="text-left mt-4">Your Information</h2>
            <Card className="booking_informationCard">
              <CardContent>
                <form>
                  <div className="form-group">
                    <h5 className="text-left">Contact name*</h5>
                    <input
                      aria-describedby="nameHelp"
                      autoComplete="off"
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      style={
                        formErrors.name
                          ? { border: "1px solid red", boxShadow: "none" }
                          : { boxShadow: "none" }
                      }
                      onChange={handleChange}
                      value={name}
                      placeholder="Enter name"
                    />
                    <small
                      id="nameHelp"
                      className="form-text text-muted text-left"
                    >
                      As in Passport/Official ID Card (without title/special
                      characters)
                  </small>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <h5 className="text-left">Mobile number*</h5>
                        <input
                          aria-describedby="phoneHelp"
                          className="form-control"
                          id="phone"
                          autoComplete="off"
                          name="phone"
                          type="text"
                          style={
                            formErrors.phone
                              ? { border: "1px solid red", boxShadow: "none" }
                              : { boxShadow: "none" }
                          }
                          onChange={handleChange}
                          value={phone}
                          placeholder="number"
                        />
                        <small
                          id="phoneHelp"
                          className="form-text text-muted text-left"
                        >
                          Mobile No. 01XXXXXXXXX
                      </small>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <h5 className="text-left">Email Address*</h5>
                        <input
                          aria-describedby="emailHelp"
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          style={
                            formErrors.email
                              ? { border: "1px solid red", boxShadow: "none" }
                              : { boxShadow: "none" }
                          }
                          onChange={handleChange}
                          value={email}
                          placeholder="Enter email"
                        />
                        <small
                          id="emailHelp"
                          className="form-text text-muted text-left"
                        >
                          e.g.: email@example.com
                      </small>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4 mt-3 ">
            <Card
              style={{ width: "300px" }}
              className="booking_Card2"
            >
              <CardHeader title="Journey Details" />
              <hr></hr>
              <CardContent>
                <h4 className="base-text-color">
                  {bus.from} - {bus.to}
                </h4>
                <p>{cart.name}</p>
                <p>
                  {new Intl.DateTimeFormat("default", {
                    dateStyle: "long",
                  }).format(new Date(bus.date))}
                </p>
                <ul>
                  {cart.goingToBook.map((st, i) => (
                    <li key={i}>
                      Seat No(s): <span className="base-text-color">{st}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Boarding at {cart.boardingPoint},{" "}
                  {new Intl.DateTimeFormat("default", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    timeZone: "Asia/Dhaka",
                  }).format(new Date(cart.depTime))}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          disabled={!isValid}
          onClick={handleSubmit}
          className="mt-5 px-5 "
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Booking;
