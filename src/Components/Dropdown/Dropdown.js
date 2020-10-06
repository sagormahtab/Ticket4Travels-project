import React from 'react'
import "../Dropdown/Dropdown.css"
import Drp1 from "../Dropdown/images/plane.png"
import Drp3 from "../Dropdown/images/train2.png"
import Drp5 from "../Dropdown/images/bus2.png"
import Drp8 from "../Dropdown/images/hotel2.png"
function Dropdown() {
  return (
    <div>
      <div className="container-fluid btn-grp">
      <div></div>
        <div className="row ml-3">
        <ul class="nav nav-pills ">
      <li class="nav-item dropdown px-4">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Transports</a>
    <div class="dropdown-menu">
      <a class="dropdown-item mt-2" href="#"><img src={Drp1} width="20px" height="20px"></img> Flights</a>
      <a class="dropdown-item mt-2" href="#">Flights + Hotels</a>
      <a class="dropdown-item mt-2" href="#"> <img src={Drp3} width="20px" height="20px"></img> Trains</a>
      <a class="dropdown-item mt-2" href="#">JR Pass</a>
      <a class="dropdown-item mt-2" href="#"> <img src={Drp5} width="20px" height="20px"></img> Bus & Shuttle</a>
      <a class="dropdown-item mt-2" href="#">Airport Transfer</a>
      <a class="dropdown-item mt-2" href="#">Car Rental</a>
    </div>
  </li>
  <li class="nav-item dropdown px-4">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Accomodation</a>
    <div class="dropdown-menu">
      <a class="dropdown-item mt-2" href="#"> <img src={Drp8} width="20px" height="20px"></img> Hotels</a>
      <a class="dropdown-item mt-2" href="#">Flights + Hotels</a>
    </div>
  </li>

  <li class="nav-item dropdown px-4">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Things to do</a>
    <div class="dropdown-menu">
      <a class="dropdown-item mt-2" href="#">Xperience</a>
      <a class="dropdown-item mt-2" href="#">Eat</a>
    </div>
  </li>
  <li class="nav-item dropdown px-4">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> Bill & Top-Ups</a>
    <div class="dropdown-menu">
      <a class="dropdown-item mt-2" href="#">My Bills</a>
      <a class="dropdown-item mt-2" href="#">Top-ups & Data packages</a>
      <a class="dropdown-item mt-2" href="#">Mobile Post paid</a>
      <a class="dropdown-item mt-2" href="#">Cable Tv & Internet</a>
      <a class="dropdown-item mt-2" href="#">Credit Card</a>
      <a class="dropdown-item mt-2" href="#">Electronic Money</a>
    </div>
  </li>
  <li class="nav-item dropdown px-4">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> Travel Add-ones</a>
    <div class="dropdown-menu">
      <a class="dropdown-item mt-2" href="#">Xperience</a>
      <a class="dropdown-item mt-2" href="#">Airport Transfer</a>
      <a class="dropdown-item mt-2" href="#">Car Rental</a>
      <a class="dropdown-item mt-2" href="#">Gift Voucher</a>
      <a class="dropdown-item mt-2" href="#">Insurance</a>
      <a class="dropdown-item mt-2" href="#">City Guide</a>
    </div>
  </li>
</ul>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
