import React from 'react'
import { Card } from 'antd';
import "../LaunchCard1/LaunchCard1.css"
import yatch1 from "../LaunchCard1/images/yatch.png"


function LaunchCard1() {
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-md-10">
                        <div><hr></hr></div>

                        <div>

                            <ul class="nav justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Launch/Ship</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Dep.time</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Arr.Time</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Price.Range</a>
                                </li>
                                <li class="nav-item">
                                    <button type="button" class="btnCard ">See Other data</button>
                                </li>

                            </ul>
                        </div>
                        <div><hr></hr></div>
                    </div>
                </div>

                <div className="row">
                    <div>
                        <Card style={{ width: 1100 }} className="LaunchCard1_shadow">
                            <p className="text-left mb-0">Surovi 8</p>
                            <div className="mt-0">

                                <ul class="nav justify-content-center ">
                                    <li class="nav-item px-5">
                                        <a class="nav-link " href="#">8.00 PM</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">4.30 AM</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">4 hours</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">500.00 - 4000.00</a>
                                    </li>


                                </ul>
                                <img src={yatch1} width="20px" height="20px" className="yatch1_div"></img>
                            </div>

                            <div className="mt-0">

                                <ul class="nav justify-content-center ">
                                    <li class="nav-item px-5">
                                        <a class="nav-link " href="#">SadarGhat</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">Name</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">Direct</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">500.00 - 4000.00</a>
                                    </li>


                                </ul>
                                
                            </div>

                            <div className="row mt-5">
                            <div className="col-md-3 text-left">Launch details</div>
                            <div className="col-md-3 text-left">Fare info</div>
                            <div className="col-md-3"></div>
                            <div className="col-md-3"><button type="button" class="btnCard btn-success">Select Cabins/Seats</button></div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row mt-3">
                    <div>
                        <Card style={{ width: 1100 }} className="LaunchCard1_shadow">
                            <p className="text-left mb-0">Surovi 8</p>
                            <div className="mt-0">

                                <ul class="nav justify-content-center ">
                                    <li class="nav-item px-5">
                                        <a class="nav-link " href="#">8.00 PM</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">4.30 AM</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">4 hours</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">500.00 - 4000.00</a>
                                    </li>


                                </ul>
                                <img src={yatch1} width="20px" height="20px" className="yatch1_div"></img>
                            </div>

                            <div className="mt-0">

                                <ul class="nav justify-content-center ">
                                    <li class="nav-item px-5">
                                        <a class="nav-link " href="#">SadarGhat</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">Name</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">Direct</a>
                                    </li>
                                    <li class="nav-item px-5">
                                        <a class="nav-link" href="#">500.00 - 4000.00</a>
                                    </li>


                                </ul>
                                
                            </div>

                            <div className="row mt-5">
                            <div className="col-md-3 text-left">Launch details</div>
                            <div className="col-md-3 text-left">Fare info</div>
                            <div className="col-md-3"></div>
                            <div className="col-md-3"><button type="button" class="btnCard btn-success">Select Cabins/Seats</button></div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LaunchCard1
