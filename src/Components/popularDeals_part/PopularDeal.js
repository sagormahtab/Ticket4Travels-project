import React from 'react'
// import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import "../popularDeals_part/popularDeal.css"
import icn1 from "../popularDeals_part/images/travel2.png"
import icn2 from "../popularDeals_part/images/bus2.png"
import icn3 from "../popularDeals_part/images/cruise-ship.png"
import icn4 from "../popularDeals_part/images/hotel2.png"
import icn5 from "../popularDeals_part/images/train2.png"

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
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/11/22/1606063932894-b21249bf3958d1ab498e7dcbc427823d.png?tr=q-75,w-304,h-152" alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-4">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/11/20/1605843458118-2e8efa988d099565a34d66b766661fc7.png?tr=q-75,w-304,h-152" alt=""></img>
                    </div>
                    <div className="col-md-4">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/11/22/1606057880097-721ad40a35e013b2693f3e992931ef5c.jpeg?tr=q-75,w-304,h-152" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="container card1">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/11/22/1606047422793-df3e055481633e09c757cce056346d2d.png?tr=q-75,w-304,h-152" alt=""></img>
                    </div>
                    <div className="col-md-4">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/11/22/1606052180871-802201b45f176d8a47fee836c997f409.png?tr=q-75,w-304,h-152" alt=""></img>
                    </div>
                    <div className="col-md-4">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/11/03/1604406597744-18ed3031874ef5090ef2c5c79bdb3b7b.jpeg?tr=q-75,w-304,h-152" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularDeal
