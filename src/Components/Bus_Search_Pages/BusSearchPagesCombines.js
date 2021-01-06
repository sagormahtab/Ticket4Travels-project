import React, { useEffect, useState } from "react";
import BusBanner from "./BusBanner/BusBanner";
import BusSearchR from "./BusSearchR-part/BusSearchR";
import BusCard1 from "./BusCard1/BusCard1";
import BusLeftSideBar from "./BusCard1/BusLeftSideBar";
import axios from "axios";
import { useBus } from "../../BusContext";

function BusSearchPagesCombines() {
  const { bus } = useBus();
  const [buss, setBuss] = useState(null);

  useEffect(() => {
    const { from, to } = bus;
    let { date, returnDate } = bus;
    date = JSON.parse(JSON.stringify(date));
    if (returnDate) {
      returnDate = new Date(returnDate);
      returnDate = JSON.parse(JSON.stringify(returnDate));
    } else {
      returnDate = null;
    }

    axios
      .get(
        `https://bus-api-sm.herokuapp.com/api/v1/bus-list?from=${from}&to=${to}&date=${date}${
          returnDate ? `&returnDate=$${returnDate}` : ""
        }`
      )
      .then(function (response) {
        console.log(response, response.data.data);
        setBuss(response.data.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <BusBanner />
      <BusSearchR />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <BusLeftSideBar />
          </div>
          <div className="col-md-8">
            {buss && buss.map((bus) => <BusCard1 key={bus._id} bus={bus} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusSearchPagesCombines;
