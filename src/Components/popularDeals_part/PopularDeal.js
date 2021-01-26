import React from 'react'
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
                <div className="row mt-5 mb-5">
                    <div className="col-md-2 font-weight-bold "><span>Popular Deals</span> All</div>
                    <div className="mt-5"></div>
                    <div className="col-md-2 col-lg-2 col-sm-2 col-2"><img src={icn1} height="40px" width="40px" alt="" className="img-fluid"></img></div>
                    <div className="col-md-2 col-lg-2 col-sm-2 col-2"><img src={icn2} height="40px" width="40px" alt="" className="img-fluid"></img></div>
                    <div className="col-md-2 col-lg-2 col-sm-2 col-2"><img src={icn3} height="40px" width="40px" alt="" className="img-fluid"></img></div>
                    <div className="col-md-2 col-lg-2 col-sm-2 col-2"><img src={icn4} height="40px" width="40px" alt="" className="img-fluid"></img></div>
                    <div className="col-md-2 col-lg-2 col-sm-2 col-2"><img src={icn5} height="40px" width="40px" alt="" className="img-fluid"></img></div>
                </div>




                <div className="row mt-5">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
                        <img src={img1} alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
                        <img src={img2} alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
                        <img src={img3} alt="" className="img-fluid"></img>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
                        <img src={img4} alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
                        <img src={img5} alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
                        <img src={img6} alt="" className="img-fluid"></img>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PopularDeal
