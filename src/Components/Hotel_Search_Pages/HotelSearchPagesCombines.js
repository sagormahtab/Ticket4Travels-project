import React from "react";
import HotelPage from "./hotelBanner/HotelPage";
import SearchResult from "./HotelSearchResults-part/SearchResult";
import Banner from "./Map & Banner/Banner";
import SortResults from "./Sort-Results-part/SortResults";
import FilterResults from "./FilterResult-parts/FilterResults";

function HotelSearchPagesCombines() {
  return (
    <div>
      <HotelPage />
      <SearchResult />
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* <Banner /> */}
            <SortResults />
          </div>
          <div className="col-md-8">
            <FilterResults />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSearchPagesCombines;
