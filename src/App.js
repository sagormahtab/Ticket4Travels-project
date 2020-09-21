import React from 'react'
import "./App.css"
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import HeadFirst from "./Components/HeaderFrist/HeaderFirst"
import Navbar from "./Components/NavBar/Navbar"
import Home from "./Components/NavBar/pages/Home"
import Dropdown from "./Components/Dropdown/Dropdown"
import Carousel from "./Components/Carousel/Carousel"
import Slider from "./Components/FormMenu_part/Slider"
import Login from "./Components/exclusiveMember_part/Login"
import Dropdown2 from "./Components/exclusiveMember_part/Dropdown2/Dropdown2"
import HotelPic from "./Components/ExtraSpace_hotelPic/HotelPic"
import PopularDeal from "./Components/popularDeals_part/PopularDeal"
import PartnerShip from "./Components/partnerShip_part/PartnerShip"
import Book from "./Components/booking Document_part/Book"
import Interest from "./Components/interest_part/Interest"
import Footer from "./Components/Footer_part/Footer"
function App() {
  return (
    <div>
      <Router>
      <HeadFirst />
      <Navbar />
      <Dropdown/>
      <Carousel />
      {/* <Slider /> */}
      <Login />
      <Dropdown2 />
      <HotelPic />
      <PopularDeal />
      <PartnerShip />
      <Book />
      <Interest />
      <Footer />
        <Switch>
           <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
