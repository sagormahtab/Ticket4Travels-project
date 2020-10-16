import React from 'react'
import { Card } from 'antd';
import Airoplan from "../card-part/images/plane.png"
import bag from "../card-part/images/work.png"
import "../card-part/allCard.css"

function AllCard() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <Card style={{ width: 1000 }}>
                                <p className="text-left"><span className="logo_cls">Logo</span> | Flight Name</p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-right">Flight Time</div>
                                        <div className="col-md-3"><img src={Airoplan} width="40px" height="20px"></img></div>
                                        <div className="col-md-3 text-left">Land time</div>
                                        <div className="col-md-3 text-left">Duration</div>
                                    </div>
                                </div>
                                <div className="container mt-3">
                                    <div className="row">
                                        <div className="col-md-4 text-center">Name</div>
                                        <div className="col-md-4">Name</div>
                                        <div className="col-md-4 text-left">Direct</div>
                                        <div className="bag_part"><img src={bag} width="20px" height="20px"></img></div>
                                        <div className="button1"><button type="button" class="btn">Success</button></div>
                                    </div>
                                </div>
                                <p className="text-left mt-4">Flight details</p>
                                <div className="fare_info">Fare info</div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <Card style={{ width: 1000 }}>
                                <p className="text-left"><span  className="logo_cls">Logo</span> | Flight Name</p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-right">Flight Time</div>
                                        <div className="col-md-3"><img src={Airoplan} width="40px" height="20px"></img></div>
                                        <div className="col-md-3 text-left">Land time</div>
                                        <div className="col-md-3 text-left">Duration</div>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="col-md-4 text-center">Name</div>
                                        <div className="col-md-4">Name</div>
                                        <div className="col-md-4 text-left">Direct</div>
                                        <div className="bag_part"><img src={bag} width="20px" height="20px"></img></div>
                                        <div className="button1"><button type="button" class="btn">Success</button></div>
                                    </div>
                                </div>
                                <p className="text-left mt-4">Flight details</p>
                                <div className="fare_info">Fare info</div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <Card style={{ width: 1000 }}>
                                <p className="text-left"><span  className="logo_cls">Logo</span> | Flight Name</p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-right">Flight Time</div>
                                        <div className="col-md-3"><img src={Airoplan} width="40px" height="20px"></img></div>
                                        <div className="col-md-3 text-left">Land time</div>
                                        <div className="col-md-3 text-left">Duration</div>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="col-md-4 text-center">Name</div>
                                        <div className="col-md-4">Name</div>
                                        <div className="col-md-4 text-left">Direct</div>
                                        <div className="bag_part"><img src={bag} width="20px" height="20px"></img></div>
                                        <div className="button1"><button type="button" class="btn">Success</button></div>
                                    </div>
                                </div>
                                <p className="text-left mt-4">Flight details</p>
                                <div className="fare_info">Fare info</div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <Card style={{ width: 1000 }}>
                                <p className="text-left"><span  className="logo_cls">Logo</span> | Flight Name</p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 text-right">Flight Time</div>
                                        <div className="col-md-3"><img src={Airoplan} width="40px" height="20px"></img></div>
                                        <div className="col-md-3 text-left">Land time</div>
                                        <div className="col-md-3 text-left">Duration</div>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="col-md-4 text-center">Name</div>
                                        <div className="col-md-4">Name</div>
                                        <div className="col-md-4 text-left">Direct</div>
                                        <div className="bag_part"><img src={bag} width="20px" height="20px"></img></div>
                                        <div className="button1"><button type="button" class="btn">Success</button></div>
                                    </div>
                                </div>
                                <p className="text-left mt-4">Flight details</p>
                                <div className="fare_info">Fare info</div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCard
