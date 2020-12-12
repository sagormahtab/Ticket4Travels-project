import React from 'react'
import "../Map & Banner/banner.css"
import { Card } from 'antd';
// import rightArrow from "../Map & Banner/images/right-arrow.png"
import HotelSearch from "../Map & Banner/images/Hotel-Search-Page-App-bar.png"

function Banner() {
    return (
        <div>
            <div className="">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Card size="small" title="Map"  className="hotelBannerCard">
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                                <a href="hotel_search" class="btn btn-primary">Go somewhere</a>
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

                        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand" href="hotel_search">Navbar</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="hotel_search">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="hotel_search">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="hotel_search" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul></div></nav> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
