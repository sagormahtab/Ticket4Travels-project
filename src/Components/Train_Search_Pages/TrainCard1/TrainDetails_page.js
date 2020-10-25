import React from 'react'
import Timmer from "../TrainCard1/images/timer.png"
import {Link} from "react-router-dom"


function TrainDetails_page() {
    return (
        <div>
            <div className="container mt-4">
            <div className="col-lg-12 col-md-12 timeline">
                           
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
                                <div className=""> <Link to="/trainPre_Booking"><button type="button" class="btn btn-success butt_div">Choose</button></Link>
                                </div>

                        </div>
            </div>
        </div>
    )
}

export default TrainDetails_page
