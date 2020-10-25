import React from 'react'
import "../LaunchCard2/LaunchCard2.css"
import { Card } from 'antd';
import { Select } from 'antd';




const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}




function LaunchCard2() {
    return (
        <div>
            <div className="container mt-2">
                <div>
                    <span className="text-left mb-0"><h1 className="header_colorChang mb-0">Cabin-wise Seat Availavility</h1></span>
                    <h5 className="text-left mt-0">Maximum 2 cabins can be bookded per ticket</h5>
                </div>


                <div className="row mt-2">
                    <div className="col-sm-6 sol-md-6 col-10">
                        <Card style={{ width: 450, height:350 }} className="LaunchCard2_shadow">
                            <div className="row">
                                <hr></hr>
                                <div className=" col-sm-3 col-md-3">Cabin class</div>
                                <div className=" col-sm-3 col-md-3">Seats</div>
                                <div className=" col-sm-3 col-md-3">Fear</div>
                                <div className=" col-sm-3 col-md-3">Availavility</div>
                            </div>
                            <hr></hr>

                            <div className="row">
                                <div className=" col-sm-3 col-md-3">Deck</div>
                                <div className=" col-sm-3 col-md-3">1</div>
                                <div className=" col-sm-3 col-md-3">Tk.200</div>
                                <div className=" col-sm-3 col-md-3">35</div>
                            </div>

                            <div className="row">
                                <div className=" col-sm-3 col-md-3">Signal AC</div>
                                <div className=" col-sm-3 col-md-3">1</div>
                                <div className=" col-sm-3 col-md-3">TK.900</div>
                                <div className=" col-sm-3 col-md-3">17</div>
                            </div>

                            <div className="row">
                                <div className=" col-sm-3 col-md-3">Single Non AC</div>
                                <div className=" col-sm-3 col-md-3">1</div>
                                <div className=" col-sm-3 col-md-3">TK.800</div>
                                <div className=" col-sm-3 col-md-3">30</div>
                            </div>

                            <div className="row">
                                <div className=" col-sm-3 col-md-3">Double AC</div>
                                <div className=" col-sm-3 col-md-3">2</div>
                                <div className=" col-sm-3 col-md-3">TK.1600</div>
                                <div className=" col-sm-3 col-md-3">5</div>
                            </div>

                            <div className="row">
                                <div className=" col-sm-3 col-md-3">Cabin class</div>
                                <div className=" col-sm-3 col-md-3">Seats</div>
                                <div className=" col-sm-3 col-md-3">Fear</div>
                                <div className=" col-sm-3 col-md-3">Availavility</div>
                            </div>

                            <div className="row">
                                <div className=" col-sm-3 col-md-3">Cabin class</div>
                                <div className=" col-sm-3 col-md-3">Seats</div>
                                <div className=" col-sm-3 col-md-3">Fear</div>
                                <div className=" col-sm-3 col-md-3">Availavility</div>
                            </div>

                            <div className="row">
                                <div className=" col-sm-3 col-md-3">Cabin class</div>
                                <div className=" col-sm-3 col-md-3">Seats</div>
                                <div className=" col-sm-3 col-md-3">Fear</div>
                                <div className=" col-sm-3 col-md-3">Availavility</div>
                            </div>


                        </Card>
                    </div>

                    <div className="col-sm-6 col-md-6 text-left">
                        <Card style={{ width: 480 }} className="LaunchCard2_shadow">
                            <div className="row">
                                <div className="col-sm-6 col-md-6">

                                    <p>Cabin Class</p>
                                    <Select placeholder="Select" style={{ width: 200 }} onChange={handleChange}>

                                        <Option value="deck">Deck</Option>
                                        <Option value="single AC">Single AC</Option>
                                        <Option value="Single non AC">Single Non AC</Option>
                                    </Select>

                                </div>
                                <div className="col-sm-6 col-md-6">

                                    <p>Number of Cabins/Seats</p>

                                    <Select placeholder="0" style={{ width: 200 }} onChange={handleChange}>

                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                    </Select>

                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-sm-12 col-md-12 col-10">

                                    <p>Choose Boarding points</p>


                                    <Select placeholder="...Boarding points...." style={{ width: 450 }} onChange={handleChange}>

                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                    </Select>

                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-sm-6 col-md-6">

                                <Select placeholder="0 TAKA" style={{ width: 120 }} onChange={handleChange}>
                                    {/* <Option value="0">0</Option>
                                    <Option value="1">1</Option> */}
                                    
                                </Select>

                                </div>
                                <div className="col-sm-6 col-md-6"><div className="col-sm-6 col-md-6"><button type="button" class="btn btn-success">Continue</button>
                                </div></div>
                            </div>
                        </Card>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default LaunchCard2
