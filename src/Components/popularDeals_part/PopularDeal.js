import React from 'react'
// import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import "../popularDeals_part/popularDeal.css"
import icn1 from "../popularDeals_part/images/travel2.png"
import icn2 from "../popularDeals_part/images/bus2.png"
import icn3 from "../popularDeals_part/images/cruise-ship.png"
import icn4 from "../popularDeals_part/images/hotel2.png"
import icn5 from "../popularDeals_part/images/train2.png"
import img1 from "./images/Banner-2-Short.jpg"
import img2 from "./images/Banner-3-Short.jpg"
import img3 from "./images/Banner-4-Short.jpg"
import img4 from "./images/Banner-6-Short.jpg"
import img5 from "./images/banner-7-Short.jpg"
import img6 from "./images/Banner-8-Short.jpg"

function PopularDeal() {
    return (
        <div className="">
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-2 font-weight-bold "><span>Popular Deals</span> All</div>
                    <div className="mt-5"></div>
                    <div className="col-md-2 col-sm-2 col-2"><img src={icn1} height="40px" width="40px" alt=""></img></div>
                    <div className="col-md-2 col-sm-2 col-2"><img src={icn2} height="40px" width="40px" alt=""></img></div>
                    <div className="col-md-2 col-sm-2 col-2"><img src={icn3} height="40px" width="40px" alt=""></img></div>
                    <div className="col-md-2 col-sm-2 col-2"><img src={icn4} height="40px" width="40px" alt=""></img></div>
                    <div className="col-md-2 col-sm-2 col-2"><img src={icn5} height="40px" width="40px" alt=""></img></div>
                </div>
            </div>
            <div className="container card1">
                <div className="row">
                    <div className="col-md-4">
                        <img src={img1} alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-4">
                        <img src={img2} alt=""></img>
                    </div>
                    <div className="col-md-4">
                        <img src={img3}  alt=""></img>
                    </div>
                </div>
            </div>
            <div className="container card1">
                <div className="row">
                    <div className="col-md-4">
                        <img src={img4} alt=""></img>
                    </div>
                    <div className="col-md-4">
                        <img src={img5} alt=""></img>
                    </div>
                    <div className="col-md-4">
                        <img src={img6}  alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularDeal
