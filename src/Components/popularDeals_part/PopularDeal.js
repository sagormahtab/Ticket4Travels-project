import React from 'react'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import "../popularDeals_part/popularDeal.css"
import icn1 from "../popularDeals_part/images/travel2.png"
import icn2 from "../popularDeals_part/images/bus2.png"
import icn3 from "../popularDeals_part/images/cruise-ship.png"
import icn4 from "../popularDeals_part/images/hotel2.png"
import icn5 from "../popularDeals_part/images/train2.png"

function PopularDeal() {
    return (
        <div className="container-fluid">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2 font-weight-bold "><span>Popular Deals</span> All</div>
                    <div className="col-md-2"><img src={icn1} height="40px" width="40px"></img></div>
                    <div className="col-md-2"><img src={icn2} height="40px" width="40px"></img></div>
                    <div className="col-md-2"><img src={icn3} height="40px" width="40px"></img></div>
                    <div className="col-md-2"><img src={icn4} height="40px" width="40px"></img></div>
                    <div className="col-md-2"><img src={icn5} height="40px" width="40px"></img></div>
                </div>
            </div>
            <div className="container card1">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="" class="card-img-top" alt="lol" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="" class="card-img-top" alt="lol" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="" class="card-img-top" alt="lol" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container card1">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="" class="card-img-top" alt="lol" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="" class="card-img-top" alt="lol" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="" class="card-img-top" alt="lol" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularDeal
