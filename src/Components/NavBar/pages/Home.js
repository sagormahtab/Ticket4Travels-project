import React from "react";
import Book from "../../booking Document_part/Book";
import Carousel from "../../Carousel/Carousel";
import Dropdown2 from "../../exclusiveMember_part/Dropdown2/Dropdown2";
import Login from "../../exclusiveMember_part/Login";
import HotelPic from "../../ExtraSpace_hotelPic/HotelPic";
import InputForm from "../../inputForm_part/InputForm";
import Interest from "../../interest_part/Interest";
import PartnerShip from "../../partnerShip_part/PartnerShip";
import PopularDeal from "../../popularDeals_part/PopularDeal";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function Home() {
  return (
    <div>
      <Carousel />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InputForm />
      </MuiPickersUtilsProvider>
      <Login />
      {/* <Dropdown2 /> */}
      <HotelPic />
      <PopularDeal />
      <PartnerShip />
      <Book />
      <Interest />
    </div>
  );
}

export default Home;
