import React from 'react'
import { Card } from 'antd';
import { Checkbox } from 'antd';
import TrainLogo from "../TrainCard1/images/train.png"
import Timmer from "../TrainCard1/images/timer.png"
import "../TrainCard1/trainCard.css"


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


function TrainCard1() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-md-10">
                        <div><hr></hr></div>

                        <div>

                            <ul class="nav ">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Filter:</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Class</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Station</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Train</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Time</a>
                                </li>


                            </ul>
                        </div>
                        <div><hr></hr></div>
                    </div>

                    <div>
                        <Card style={{ width: 1110 }} className="TrainCard1_shadow">
                            <div className="row">
                                <div className="col-sm-3 col-md-3">

                                    <Checkbox onChange={onChange}>Air Condition class</Checkbox>

                                </div>
                                <div className="col-sm-3 col-md-3">

                                    <Checkbox onChange={onChange}>First class</Checkbox>
                                </div>
                                <div className="col-sm-3 col-md-3">lol<span><hr width="10px"></hr></span></div>

                                <div className="col-sm-3 col-md-3">lol</div>
                            </div>
                        </Card>
                    </div>

                    <div className="row mt-3">
                        <div className="col-sm-12 col-md-12">

                            <Card style={{ width: 1110, height: 190 }} className="TrainCard1_shadow">
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

                                <div className="row">
                                    <div className="col-sm-3 col-md-3 mb-0 border_div">Train details</div>

                                    <div className="col-sm-3 col-md-3">Price details</div>
                                    <div className="col-sm-3 col-md-3 text-left"></div>
                                    <div className="col-sm-3 col-md-3 text-left"></div>

                                </div>
                            </Card>
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 timeline">
                            <Card style={{ width: 1110 }} className="TrainCard1_shadow">
                                <div className="">
                                    <p className="fonnt_div text-left">Train name</p>
                                    <p className="text-left">Class Name</p>
                                    <div className="row border_divvv">
                                        <div className="col-sm-3 col-md-3 fonnt_div ">Time</div>
                                        <div className="col-sm-3 col-md-3 fonnt_div">Place Name</div>
                                        <div className="col-sm-3 col-md-3"></div>
                                        <div className="col-sm-3 col-md-3"></div>
                                        <div className="timmer_div mt-3 mb-3"> <img src={Timmer} width="20px" height="20px"></img>Duraion</div>
                                    </div>
                                    <div className="row border_divvv">
                                        <div className="col-sm-3 col-md-3 fonnt_div ">Time</div>
                                        <div className="col-sm-3 col-md-3 fonnt_div">Place Name</div>
                                        <div className="col-sm-3 col-md-3"></div>
                                        <div className="col-sm-3 col-md-3"></div>

                                    </div>
                                </div>
                                <div className=""><button type="button" class="btn btn-success butt_div">Choose</button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainCard1
