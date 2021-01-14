import React from "react";
import "../Map & Banner/banner.css";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import HotelSearch from "../Map & Banner/images/Hotel-Search-Page-App-bar.png";

function Banner() {
  return (
    <div>
      <div className="">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 col-12">
              <Card>
                <CardHeader title="Map" />
                <hr></hr>
                <CardContent>
                  <p>View Map</p>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-8 col-12 hotelapplogo ">
              <img
                src={HotelSearch}
                alt="HotelBanner"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
