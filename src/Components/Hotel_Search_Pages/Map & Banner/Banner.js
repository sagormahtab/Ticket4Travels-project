import React from 'react'
import "../Map & Banner/banner.css"
import rightArrow from "../Map & Banner/images/right-arrow.png"
import HotelSearch from "../Map & Banner/images/Hotel-Search-Page-App-bar.png"

function Banner() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">


                            <div class="card" style={{ width: "18rem" }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 lol"><img src={HotelSearch} height="130px" width="600px"></img></div>
                        <div className="navBar">
                            <ul class="nav nav-pills nav-fill">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">All</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Clean Stay</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pay Upon Check-in</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Fan <img src={rightArrow} height="40px" width="30px" className="imgClass"></img></a>
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
