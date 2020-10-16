import React from 'react'
import { Card } from 'antd';
import { Checkbox } from 'antd';
import "../BusCard3/busCard3.css"
import BusCARD3aRRWO from "../BusCard3/images/next.png"

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }


function BusCard3() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-4">

                    <Card style={{ width: 300 }} className="BusCard3_depoertdiv busCard3_boxshadow">
                            <h5 className="text-left">Departare Name</h5>
                            <div className="row text-left">
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 06.00</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 12.00</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 18.00</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>18.00 - 0.00</Checkbox></div>
                                
                            </div>
                    </Card>

                    <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
                            <h5 className="text-left">Arrival Time</h5>
                            <div className="row text-left">
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 06.00</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 12.00</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 18.00</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>18.00 - 0.00</Checkbox></div>
                                
                            </div>
                    </Card>
                    <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
                            <h5 className="text-left">Seat Arrangment</h5>
                            <div className="row text-left">
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>1 - 1</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>1 - 2</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>2 - 2</Checkbox></div>
                               
                                
                            </div>
                    </Card>
                    <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
                            <h5 className="text-left">Fleet Name</h5>
                            <div className="row text-left">
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Hino</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>TATA</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Ashok Lealynd</Checkbox></div>
                                <div className="col-sm-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Marcedez</Checkbox></div>
                                
                               
                            </div>
                        </Card>
                    </div>
                    <div className="col-sm-8 col-md-8 mt-5">

                    <Card style={{ width: 690 }} className="busCard3_boxshadow">
                            <h5 className="text-left">Name</h5>
                            <p className="text-left">Luxery Shuttle</p>


                            <div className="row mt-5">
                                <div className="col-sm-3 col-md-3">00.01</div>
                                <div className="col-sm-3 col-md-3">04.00</div>
                                <div className="col-sm-3 col-md-3">3h 59m</div>
                                <div className="col-sm-3 col-md-3">Amount</div>
                            </div>
                            <div><img src={BusCARD3aRRWO} width="20px" height="20px"></img></div>
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
                                <div className="col-sm-4 col-md-4 busColorDiv ">Train Details </div>
                                <div className="col-sm-4 col-md-4 busColorDiv Price_divv">Price Details</div>
                            </div>
                            <div className="text-left mt-5">
                                <div className="row text-center">
                                    <div className="col-sm-6 col-md-6 dark_divv">Total Flare(x1)</div>
                                    <div className="col-sm-6 col-md-6 acue_divv">Amount</div>
                                </div>
                                <div className="row mt-3 text-center">
                                    <div className="col-sm-6 col-md-6">Your pay</div>
                                    <div className="col-sm-6 col-md-6">Amount</div>
                                </div>
                            

                               
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusCard3
