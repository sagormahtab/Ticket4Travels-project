import React from "react";
import BusB from "../BusBanner/images/Bus-Search-Page-Banner.png";

const busBannerStyle = {
  height: "30vh",
  background: `url(${BusB})`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
function BusBanner() {
  return <div style={busBannerStyle}></div>;
}

export default BusBanner;
