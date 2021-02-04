import React from "react";
import hotelBanner from "./images/Hote-Search-Page-Banner.jpg";

function HotelPage() {
  return (
    <div>
      <img
        src={hotelBanner}
        alt="hotelBanner"
        className="img-fluid"
        width="100%"
      ></img>
    </div>
  );
}

export default HotelPage;
