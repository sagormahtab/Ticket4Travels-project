import React from 'react';
import Book from '../../booking Document_part/Book';
import Carousel from '../../Carousel/Carousel';
import Dropdown2 from '../../exclusiveMember_part/Dropdown2/Dropdown2';
import Login from '../../exclusiveMember_part/Login';
import HotelPic from '../../ExtraSpace_hotelPic/HotelPic';
// import InputForm from '../../inputForm_part/InputForm';
import Interest from '../../interest_part/Interest';
import PartnerShip from '../../partnerShip_part/PartnerShip';
import PopularDeal from '../../popularDeals_part/PopularDeal';

function Home() {
  return (
    <div >
      <Carousel/>
      {/* <InputForm/> */}
      <h3 className="text-center mt-5 mb-5">Form input field comming soon!!!</h3>
      <Login/>
      <Dropdown2/>
      <HotelPic/>
      <PopularDeal/>
      <PartnerShip/>
      <Book/>
      <Interest/>
    </div>
  );
}

export default Home;
