import React from 'react'
import { Card } from 'antd';
import TrainLogo from "../TrainCard2/images/train.png"
import "../TrainCard2/trainCard2.css"


function TrainCard2() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    
             

                    <div className="row mt-4">
                        <div className="col-sm-12 col-md-12 ">

                            <Card style={{ width: 1110, height: 190 }} className="TrainCard2_shadow">
                                <p className="text-left fonnt_div">Train Time</p>
                                <p className="text-left">Class Name</p>

                                <div className="row">
                                    <div className="col-sm-3 col-md-3 fonnt_div">Time</div>
                                    <div className="col-sm-3 col-md-3 text-left"><img src={TrainLogo} width="20px" height="20px"></img></div>
                                    <div className="col-sm-3 col-md-3 text-left fonnt_div">Time</div>
                                    <div className="col-sm-3 col-md-3 text-left fonnt_div">Duration</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 col-md-3">place Name</div>
                                    <div className="col-sm-3 col-md-3"></div>
                                    <div className="col-sm-3 col-md-3 text-left">Your place</div>
                                    <div className="col-sm-3 col-md-3 text-left">Direction</div>
                                </div>
                                <span className="color_chng">Amount</span>
                                <span><p className="small_divv">Fully booked</p></span>

                                <div className="row">
                                    <div className="col-sm-3 col-md-3 mb-0 ">Train details</div>

                                    <div className="col-sm-3 col-md-3 border_div">Price details</div>
                                    <div className="col-sm-3 col-md-3 text-left"></div>
                                    <div className="col-sm-3 col-md-3 text-left"></div>

                                </div>
                            </Card>
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 timeline">
                            <Card style={{ width: 1110 }} className="TrainCard2_shadow">
                                <div className="">
                                    <p className="fonnt_div text-left">Train name</p>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">Adult Fare(x1)</div>
                                        <div className="col-sm-6 col-md-6 amoun_div">Amount</div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">Infont Fare(x0)</div>
                                        <div className="col-sm-6 col-md-6 amoun_div">Amount</div>
                                        
                                    </div>

                                    <hr></hr>

                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">Your Pay</div>
                                        <div className="col-sm-6 col-md-6 amoun_div">Amount</div>
                                        
                                    </div>
                                    
                                </div>
                               
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainCard2
