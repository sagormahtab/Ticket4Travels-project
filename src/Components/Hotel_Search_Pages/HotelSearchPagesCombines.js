import React, { useEffect, useState } from "react";
import HotelPage from "./hotelBanner/HotelPage";
import SearchResult from "./HotelSearchResults-part/SearchResult";
// import Banner from "./Map & Banner/Banner";
import SortResults from "./Sort-Results-part/SortResults";
import HotelCard from "./FilterResult-parts/HotelCard";
import { format } from "date-fns";
import queryString from "query-string";
import axios from "axios";
import { useHotelCart } from "../../Context/HotelCartContext";

function HotelSearchPagesCombines() {
  const { setHotelCart } = useHotelCart();
  const [hotel, setHotel] = useState(null);
  let { location, checkin, checkout } = queryString.parse(
    window.location.search
  );

  useEffect(() => {
    if (checkin && checkout && location) {
      setHotelCart({
        checkin: JSON.parse(JSON.stringify(checkin)),
        checkout: JSON.parse(JSON.stringify(checkout)),
        location: JSON.parse(JSON.stringify(location)),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  checkin = format(new Date(checkin), "dd MMMM, yyyy");
  checkout = format(new Date(checkout), "dd MMMM, yyyy");

  useEffect(() => {
    axios
      .get(
        `https://hotel-api-sm.herokuapp.com/api/v1/hotel-list?location=${location}`
      )
      .then(function (response) {
        setHotel(response.data.data);
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HotelPage />
      <SearchResult location={location} checkin={checkin} checkout={checkout} />
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* <Banner /> */}
            <SortResults />
          </div>
          <div className="col-md-8">
            {hotel && hotel.map((htl, i) => <HotelCard hotel={htl} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSearchPagesCombines;
