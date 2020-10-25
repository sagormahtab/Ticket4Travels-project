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
import Login_page from "./Components/Register_Log-in-page/Login_page"
import Form2 from "./Components/Register_Log-in-page/Account_Information/Form2"
import FlightSearch_pagesCombines from './Components/Flight_Search_Pages/FlightSearch_pagesCombines';
import FlightName from "./Components/Flight_Search_Pages/Initial-Flight-booking-page/card1/FlightName"
import BusSearch_pagesCombines from './Components/Bus_Search_Pages/BusSearch_pagesCombines';
import BusPreBooking_pageInfo from "./Components/Bus_Search_Pages/Initial-Bus-booking-page/BusPreBooking_pageInfo"
import LaunchSearch_pagesCombines from './Components/Launch_Search_Pages/LaunchSearch_pagesCombines';
import LaunchPreBooking_pageInfo from "./Components/Launch_Search_Pages/Initial-Launch-booking-page/LaunchPreBooking_pageInfo"
import HotelSearch_pagesCombines from './Components/Hotel_Search_Pages/HotelSearch_pagesCombines';
import InformationForbooking_Comvbines from './Components/Information-for-bookingPart(Form)/InformationForbooking_Comvbines';
import TrainSearch_pagesCombines from './Components/Train_Search_Pages/TrainSearch_pagesCombines';
import TrainPreBooking_pageInfo from "./Components/Train_Search_Pages/Initial-Train-booking-page/TrainPreBooking_pageInfo"
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
           <Route path="/flight_search" component={FlightSearch_pagesCombines}></Route>
           <Route path="/flightPre_Booking" component={FlightName}></Route>
           
           {/* Flight-Search-END */}
           {/* Train-Search-start */}
           <Route path="/train_search" component={TrainSearch_pagesCombines}></Route>
           <Route path="/trainPre_Booking" component={TrainPreBooking_pageInfo}></Route>
           {/* Train-Search-END */}

           {/* bUS-SEARCH-START */}
           <Route path="/bus_search" component={BusSearch_pagesCombines}></Route>
           <Route path="/busPre_Booking" component={BusPreBooking_pageInfo}></Route>
           {/* bUS-SEARCH-end */}

           {/* Launch-search-start */}
           <Route path="/launch_search" component={LaunchSearch_pagesCombines}></Route>
           <Route path="/launchPre_Booking" component={LaunchPreBooking_pageInfo}></Route>
           {/* Launch-search-end */}


           {/* hotel-search-start */}
           <Route path="/hotel_search" component={HotelSearch_pagesCombines}></Route>
           {/* hotel-search-end  */}

           {/* Information-for-booking-page(form)-START
           <Route path="/your_information" component={InformationForbooking_Comvbines}></Route>
            Information-for-booking-page(form)-END */}



           
        </Switch>    
      </Router>
      <Footer />
    </div>
  )
}

export default App
