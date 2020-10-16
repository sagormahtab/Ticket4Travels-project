import React from 'react'
import { Card } from 'antd';
import { Checkbox } from 'antd';
import BusArrowPNG2 from "../BusCard2/images/next.png"
import "../BusCard2/busCard2.css"


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }


function BusCard2() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-4 ">

                        <Card style={{ width: 300 }} className="BusCard2_facilitiesDiv busCard2_boxshadow">
                            <h5 className="text-left">Facilites</h5>
                            <div className="row text-left">
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Wifi</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Non AC</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Air Coindition</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Power Supply</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Clean Trip</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Buffet</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Reclaining Seat</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Sleeping Coach</Checkbox></div>
                            </div>
                        </Card>
                        <Card style={{ width: 300 }} className="mt-4 busCard2_boxshadow">
                            <h5 className="text-left">Bus Name</h5>
                            <div className="row text-left">
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Green Line</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Shamoly Square</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Shohag</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Ena</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Hanif</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Gono Poribohon</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Saudia</Checkbox></div>
                               
                            </div>
                        </Card>
                    </div>
                    

                 
                    <div className="col-sm-8 col-md-8 mt-5">

                        <Card style={{ width: 690 }} className="busCard2_boxshadow">
                            <h5 className="text-left">Name</h5>
                            <p className="text-left">Luxery Shuttle</p>


                            <div className="row mt-5">
                                <div className="col-sm-3 col-md-3">00.01</div>
                                <div className="col-sm-3 col-md-3">04.00</div>
                                <div className="col-sm-3 col-md-3">3h 59m</div>
                                <div className="col-sm-3 col-md-3">Amount</div>
                            </div>
                            <div className="busarrow_div"><img src={BusArrowPNG2} width="20px" height="20px"></img></div>
                            <div className="row mt-3">
                                <div className="col-sm-3 col-md-3"><p>Name of the destination</p></div>
                                <div className="col-sm-3 col-md-3"><p>Name of the destiantion</p></div>
                                <div className="col-sm-3 col-md-3"></div>
                                <div className="col-sm-3 col-md-3"></div>
                            </div>
                            <div className="busbuttonn"><button type="button" class="btn btn-success busButton1">Book Now</button>
                            </div>

                            <div className="row mt-5">
                                <div className="col-sm-4 col-md-4 busColorDiv">Bus Details</div>
                                <div className="col-sm-4 col-md-4 busColorDiv TrainDiv">Train Details </div>
                                <div className="col-sm-4 col-md-4 busColorDiv">Price Details</div>
                            </div>
                            <div className="text-left mt-5">
                                <h5 className="text-left">Bus Route</h5>
                                <p className="text-left"> Jkarta-to-pasteriour-Banduge</p>
                            

                               
                            </div>
                        </Card>
                    </div>
                
                </div>
            </div>
        </div>
        
    )
}

export default BusCard2
