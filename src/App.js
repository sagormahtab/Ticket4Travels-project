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
import Footer from "./Components/Footer_part/Footer"
// import Footer from "./Components/Footer_part/Footer"
import Login_page from "./Components/Register_Log-in-page/LoginPage"
import Form2 from "./Components/Register_Log-in-page/Account_Information/Form2"
import FlightSearchPagesCombines from './Components/Flight_Search_Pages/FlightSearchPagesCombines';
import FlightName from "./Components/Flight_Search_Pages/Initial-Flight-booking-page/card1/FlightName"
import BusSearchPagesCombines from './Components/Bus_Search_Pages/BusSearchPagesCombines';
import BusPreBookingPageInfo from "./Components/Bus_Search_Pages/Initial-Bus-booking-page/BusPreBookingPageInfo"
import LaunchSearchPagesCombines from './Components/Launch_Search_Pages/LaunchSearchPagesCombines';
import LaunchPreBookingPageInfo from "./Components/Launch_Search_Pages/Initial-Launch-booking-page/LaunchPreBookingPageInfo"
import HotelSearchPagesCombines from './Components/Hotel_Search_Pages/HotelSearchPagesCombines';
import HotelPreBookingPageInfo from "./Components/Hotel_Search_Pages/Initial-Hotel-booking-page/HotelPreBookingPageInfo"
import TrainSearchPagesCombines from './Components/Train_Search_Pages/TrainSearchPagesCombines';
import TrainPreBookingPageInfo from "./Components/Train_Search_Pages/Initial-Train-booking-page/TrainPreBookingPageInfo"
import BookingSteper_Combine from "./Components/Stepper-page(booking,payment,process,Eticket)/BookingSteper_Combine"

function App() {
  return (
    <div>
    
      <Router>
      <HeadFirst />
      <Navbar  />
      
      <Dropdown/>
      <Switch>
           <Route exact path="/" component={Home}/>


           <Route path="/my_booking" component={MyBooking} />

           <Route path="/my_inbox" component={MyInbox} />

           <Route path="/saved" component={Saved} />

           <Route path="/help_center" component={HelpCenter} />

           <Route path="/partner_us" component={PartnerUs} />

           <Route path="/contact_us" component={ContactUs} />
           <Route path="/login_form" component={Login_page}></Route>
           <Route path="/account_inforamtion" component={Form2}></Route>


           {/* Flight-Search-start */}
           <Route path="/flight_search" component={FlightSearchPagesCombines}></Route>
           <Route path="/flightPre_Booking" component={FlightName}></Route>
           
           {/* Flight-Search-END */}
           {/* Train-Search-start */}
           <Route path="/train_search" component={TrainSearchPagesCombines}></Route>
           <Route path="/trainPre_Booking" component={TrainPreBookingPageInfo}></Route>
           {/* Train-Search-END */}

           {/* bUS-SEARCH-START */}
           <Route path="/bus_search" component={BusSearchPagesCombines}></Route>
           <Route path="/busPre_Booking" component={BusPreBookingPageInfo}></Route>
           {/* bUS-SEARCH-end */}

           {/* Launch-search-start */}
           <Route path="/launch_search" component={LaunchSearchPagesCombines}></Route>
           <Route path="/launchPre_Booking" component={LaunchPreBookingPageInfo}></Route>
           {/* Launch-search-end */}


           {/* hotel-search-start */}
           <Route path="/hotel_search" component={HotelSearchPagesCombines}></Route>
           <Route path="/hotelPre_Booking" component={HotelPreBookingPageInfo}></Route>
           {/* hotel-search-end  */}

           {/* Information-for-booking-page(form)-START
           <Route path="/your_information" component={InformationForbooking_Comvbines}></Route>
            Information-for-booking-page(form)-END */}

            <Route path="/booking_Stepper" component={BookingSteper_Combine}></Route>



           
        </Switch>    
      </Router>
      <Footer />
    </div>
  )
}

export default App
