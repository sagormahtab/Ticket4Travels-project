import React from "react";
import BusBanner from "./BusBanner/BusBanner";
import BusSearchR from "./BusSearchR-part/BusSearchR";
import BusCard1 from "./BusCard1/BusCard1";
import BusLeftSideBar from "./BusCard1/BusLeftSideBar";
import buses from "../../fakeData/buses";

function BusSearchPagesCombines() {
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
            {buses.data.map((bus) => (
              <BusCard1 key={bus._id} bus={bus} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusSearchPagesCombines;
