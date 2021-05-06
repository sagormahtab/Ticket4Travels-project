import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

const HotelJourneyDetails = ({ hotelCart }) => {
  const { name } = JSON.parse(sessionStorage.getItem("selectedHotel"));
  const {
    checkin,
    checkout,
    location,
    roomType,
    roomNumber,
    amount,
  } = hotelCart;

  return (
    <>
      <Card style={{ width: "300px" }} className="booking_Card2">
        <CardHeader title="Booking Details" />
        <hr></hr>
        <CardContent>
          <h4 className="base-text-color">{location}</h4>
          <p>{name}</p>
          <p>
            Checkin date -{" "}
            {new Intl.DateTimeFormat("default", {
              dateStyle: "long",
            }).format(new Date(checkin))}
          </p>
          <p>{roomType}</p>
          <p>
            Checkout at,{" "}
            {new Intl.DateTimeFormat("default", {
              dateStyle: "long",
            }).format(new Date(checkout))}
          </p>
          <p>{roomNumber} room(s)</p>
          <p>Amount to pay - {amount}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default HotelJourneyDetails;
