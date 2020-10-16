import React from 'react'
import { Card } from 'antd';
import { Radio } from 'antd';
import NxxtPng from "../BusCard1/images/next.png"
import AirC from "../BusCard1/images/air-conditioner.png"
import AirSeat from "../BusCard1/images/airplane.png"
import Usb from "../BusCard1/images/usb.png"
import RestStp from "../BusCard1/images/rest-time.png"
import MinarelWater from "../BusCard1/images/drinks.png"
import Luggage from "../BusCard1/images/travel-case.png"
import BusIMG from "../BusCard1/images/busImage1.jpg"
import "../BusCard1/busCard1.css"




function BusCard1() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-4">

                        <Card style={{ width: 300, height: 100 }} className="busCard1_boxshadow">
                            <h5 className="text-left">Sort In results</h5>
                            <p className="text-left">Sort your search results by:</p>
                        </Card>
                        <Card style={{ width: 300 }} className="busCard1_boxshadow">
                            <div className="row">
                                <div className="col-sm-6 col-md-6"><Radio>Depart time</Radio></div>
                                <div className="col-sm-6 col-md-6"><Radio>Lowest Time</Radio></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-6 col-md-6"><Radio>Arrival time</Radio></div>
                                <div className="col-sm-6 col-md-6"><Radio>Duration</Radio></div>
                            </div>
                        </Card>

                        <div className="mt-4">
                            <Card size="small" title="Filter Results" extra={<a href="#">Reset Filter</a>} style={{ width: 300 }} className="busCard1_boxshadow">
                                <p>Sort your search results based on your selected catagory</p>

                            </Card>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-8">

                        <Card style={{ width: 690 }} className="busCard1_boxshadow">
                            <h5 className="text-left">Name</h5>
                            <p className="text-left">Luxery Shuttle</p>


                            <div className="row mt-5">
                                <div className="col-sm-3 col-md-3">00.01</div>
                                <div className="col-sm-3 col-md-3">04.00</div>
                                <div className="col-sm-3 col-md-3">3h 59m</div>
                                <div className="col-sm-3 col-md-3">Amount</div>
                            </div>
                            <div className="busarrow_div"><img src={NxxtPng} width="20px" height="20px"></img></div>
                            <div className="row mt-3">
                                <div className="col-sm-3 col-md-3"><p>Name of the destination</p></div>
                                <div className="col-sm-3 col-md-3"><p>Name of the destiantion</p></div>
                                <div className="col-sm-3 col-md-3"></div>
                                <div className="col-sm-3 col-md-3"></div>
                            </div>
                            <div className="busbuttonn"><button type="button" class="btn btn-success busButton1">Book Now</button>
                            </div>

                            <div className="row mt-5">
                                <div className="col-sm-4 col-md-4 busColorDiv busD_border">Bus Details</div>
                                <div className="col-sm-4 col-md-4 busColorDiv">Train Details </div>
                                <div className="col-sm-4 col-md-4 busColorDiv">Price Details</div>
                            </div>
                            <div className="text-left mt-5">
                                <h5 className="text-left">Bus types:<span> regular</span></h5>
                                <h5>Seats: <span> 30 seats</span></h5>
                                <h5>Seats Layout: <span> 1-1</span></h5>
                                <h5>Facilities</h5>

                                <div className="row mt-4">
                                    <div className="col-sm-4 col-md-4"><img src={AirC} width="20px" height="20px"></img> Air Condition</div>
                                    <div className="col-sm-4 col-md-4"><img src={AirSeat} width="20px" height="20px"></img> Reclanning Seat</div>
                                    <div className="col-sm-4 col-md-4"></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4 col-md-4"><img src={Usb} width="20px" height="20px"></img> Usb Plug</div>
                                    <div className="col-sm-4 col-md-4"><img src={RestStp} width="20px" height="20px"></img> Rest Stop</div>
                                    <div className="col-sm-4 col-md-4"></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4 col-md-4"><img src={MinarelWater} width="20px" height="20px"></img> Minarel Water</div>
                                    <div className="col-sm-4 col-md-4"><img src={Luggage} width="20px" height="20px"></img> Luggage storage</div>
                                    <div className="col-sm-4 col-md-4"></div>
                                    <div className="busIMG_div"><img src={BusIMG} width="180px" height="130px"></img></div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusCard1
