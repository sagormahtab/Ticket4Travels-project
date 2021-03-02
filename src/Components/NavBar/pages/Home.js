import React from "react";
import Book from "../../booking Document_part/Book";
import Carousel from "../../Carousel/Carousel";
import Login from "../../exclusiveMember_part/Login";
import HotelPic from "../../ExtraSpace_hotelPic/HotelPic";
import InputForm from "../../inputForm_part/InputForm";
import Interest from "../../interest_part/Interest";
import PartnerShip from "../../partnerShip_part/PartnerShip";
import PopularDeal from "../../popularDeals_part/PopularDeal";

import MobileInputForm from "../../inputForm_part/MobileInputForm";

function Home() {
  return (
    <div>
      <Carousel />
      <InputForm />
      <MobileInputForm />
      <Login />
      <HotelPic />
      <PopularDeal />
      <PartnerShip />
      <Book />
      <Interest />
    </div>
  );
}

export default Home;
