import React from "react";

function BusDetails({ bus }) {
  return (
    <div>
      <div className="text-left mt-5">
        <h6 className="text-left">
          Bus types:<span> Regular</span>
        </h6>
        <h6>
          Total Seats: <span>{bus.seat}</span>
        </h6>
        <p>Boarding Points</p>
        <ul>
          {bus.startingPoints.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <p>Dropping Points</p>
        <ul>
          {bus.endingPoints.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BusDetails;
