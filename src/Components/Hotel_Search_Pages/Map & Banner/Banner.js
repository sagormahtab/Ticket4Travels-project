import React from 'react'
import "../Map & Banner/banner.css"
import { Card, CardContent, CardHeader } from '@material-ui/core';
// import rightArrow from "../Map & Banner/images/right-arrow.png"
import HotelSearch from "../Map & Banner/images/Hotel-Search-Page-App-bar.png"

function Banner() {
    return (
        <div>
            <div className="">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Card style={{ width: "300px" }}>
                                <CardHeader title="Map" />
                                <hr></hr>
                                <CardContent>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-md-6 col-12 hotelapplogo "><img src={HotelSearch} height="130px" width="600px" alt="" className="img-fluid"></img></div>
                        <div className="navBar">
                            <ul class="nav nav-pills nav-fill">
                                <li class="nav-item">
                                    <a class="nav-link " href="hotel_search">All</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="hotel_search">Clean Stay</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="hotel_search">Pay Upon Check-in</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="hotel_search">Fan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
