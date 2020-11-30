import React from 'react'
import AirC from "../BusCard1/images/air-conditioner.png"
import AirSeat from "../BusCard1/images/airplane.png"
import Usb from "../BusCard1/images/usb.png"
import RestStp from "../BusCard1/images/rest-time.png"
import MinarelWater from "../BusCard1/images/drinks.png"
import Luggage from "../BusCard1/images/travel-case.png"
import BusIMG from "../BusCard1/images/busImage1.jpg"

function BusDetails() {
    return (
        <div>
            <div className="text-left mt-5">
                                <h5 className="text-left">Bus types:<span> regular</span></h5>
                                <h5>Seats: <span> 30 seats</span></h5>
                                <h5>Seats Layout: <span> 1-1</span></h5>
                                <h5>Facilities</h5>

                                <div className="row mt-4">
                                    <div className="col-sm-4 col-md-4 col-4"><img src={AirC} width="20px" height="20px" alt="" className="img-fluid"></img> Air Condition</div>
                                    <div className="col-sm-4 col-md-4 col-4"><img src={AirSeat} width="20px" height="20px" alt="" className="img-fluid"></img> Reclanning Seat</div>
                                    <div className="col-sm-4 col-md-4 col-4"></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4 col-md-4 col-4"><img src={Usb} width="20px" height="20px" alt="" className="img-fluid"></img> Usb Plug</div>
                                    <div className="col-sm-4 col-md-4 col-4"><img src={RestStp} width="20px" height="20px" alt="" className="img-fluid"></img> Rest Stop</div>
                                    <div className="col-sm-4 col-md-4 col-4"></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4 col-md-4 col-4"><img src={MinarelWater} width="20px" height="20px" alt="" className="img-fluid"></img> Minarel Water</div>
                                    <div className="col-sm-4 col-md-4 col-4"><img src={Luggage} width="20px" height="20px" alt="" className="img-fluid"></img> Luggage storage</div>
                                    <div className="col-sm-4 col-md-4 col-4"></div>
                                    <div className="busIMG_div"><img src={BusIMG} width="180px" height="130px" alt="" className="img-fluid"></img></div>
                                </div>
                            </div>
        </div>
    )
}

export default BusDetails
