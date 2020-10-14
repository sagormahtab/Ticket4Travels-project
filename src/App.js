import React from 'react'
import "./App.css"
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import HeadFirst from "./Components/HeaderFrist/HeaderFirst"
import Navbar from "./Components/NavBar/Navbar"
import Home from "./Components/NavBar/pages/Home"
import MyBooking from "./Components/NavBar/pages/MyBooking"
import MyInbox from "./Components/NavBar/pages/MyInbox"
import Saved from "./Components/NavBar/pages/Saved"
import HelpCenter from "./Components/NavBar/pages/HelpCenter"
import PartnerUs from "./Components/NavBar/pages/PartnerUs"
import ContactUs from "./Components/NavBar/pages/ContactUs"
import Dropdown from "./Components/Dropdown/Dropdown"
import Carousel from "./Components/Carousel/Carousel"
import InputForm from "./Components/inputForm_part/InputForm"
import Login from "./Components/exclusiveMember_part/Login"
import Dropdown2 from "./Components/exclusiveMember_part/Dropdown2/Dropdown2"
import HotelPic from "./Components/ExtraSpace_hotelPic/HotelPic"
import PopularDeal from "./Components/popularDeals_part/PopularDeal"
import PartnerShip from "./Components/partnerShip_part/PartnerShip"
import Book from "./Components/booking Document_part/Book"
import Interest from "./Components/interest_part/Interest"
import Footer from "./Components/Footer_part/Footer"
import Login_page from "./Components/Register_Log-in-page/Login_page"
import Form1 from "./Components/Register_Log-in-page/RegisterPage-1/Form1"
import Form2 from "./Components/Register_Log-in-page/Account_Information/Form2"
function App() {
  return (
    <div>
      <Router>
      <HeadFirst />
      <Navbar  />
      
      <Dropdown/>
      <Switch>
           <Route exact path="/" component={Home}/>
           <Route  path="/caro"> <Carousel /></Route>
           <Route  path="/inputform"> <InputForm /></Route>
           <Route  path="/login"> <Login/></Route>
           <Route  path="/drop"> <Dropdown2/></Route>
           <Route  path="/hotelpic"> <HotelPic/></Route>
           <Route  path="/populardeal"> <PopularDeal/></Route>
           <Route  path="/partnership"> <PartnerShip/></Route>
           <Route  path="/book"> <Book/></Route>
           <Route  path="/interest"> <Interest/></Route>


           <Route path="/my_booking" component={MyBooking} />

           <Route path="/my_inbox" component={MyInbox} />

           <Route path="/saved" component={Saved} />

           <Route path="/help_center" component={HelpCenter} />

           <Route path="/partner_us" component={PartnerUs} />

           <Route path="/contact_us" component={ContactUs} />
           <Route path="/login_form" component={Login_page}></Route>
           <Route path="/account_inforamtion" component={Form2}></Route>

           
        </Switch>    
      </Router>
      <Footer />
    </div>
  )
}

export default App
