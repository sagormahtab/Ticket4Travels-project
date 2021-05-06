import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

const BusJourneyDetails = ({ busCart, bus }) => {
  return (
    <>
      <Card style={{ width: "300px" }} className="booking_Card2">
        <CardHeader title="Journey Details" />
        <hr></hr>
        <CardContent>
          <h4 className="base-text-color">
            {bus.from} - {bus.to}
          </h4>
          <p>{busCart.name}</p>
          <p>
            {new Intl.DateTimeFormat("default", {
              dateStyle: "long",
            }).format(new Date(bus.date))}
          </p>
          <ul>
            {busCart.goingToBook.map((st, i) => (
              <li key={i}>
                Seat No(s): <span className="base-text-color">{st}</span>
              </li>
            ))}
          </ul>
          <p>
            Boarding at {busCart.boardingPoint},{" "}
            {new Intl.DateTimeFormat("default", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZone: "Asia/Dhaka",
            }).format(new Date(busCart.depTime))}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default BusJourneyDetails;
