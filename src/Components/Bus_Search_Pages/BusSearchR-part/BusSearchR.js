import React from "react";
import ArrowPng from "../BusSearchR-part/images/next.png";
import "../BusSearchR-part/busSearch.css";
import { useBus } from "../../../BusContext";
import { format } from "date-fns";

function BusSearchR() {
  const { bus } = useBus();
  let { from, to, date } = bus;
  date = format(new Date(date), "dd MMMM, yyyy");

  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <h3 className="text-left mr-3 mb-0">{from}</h3>
              <img
                src={ArrowPng}
                width="20px"
                alt=""
                className="img-fluid"
              ></img>
              <h3 className="ml-3 mb-0">{to}</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0"> {date}</p>
              <button type="button" className="btn btn-success">
                Change Search
              </button>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default BusSearchR;
