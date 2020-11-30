import React from 'react'
import WaveOnly from "../Additional-Information-part/images/wave-only.png"
import RewardPng from "../Additional-Information-part/images/reward.png"
import CustomerCare from "../Additional-Information-part/images/customer-agent.png"
import OnlineBook from "../Additional-Information-part/images/online-booking.png"
import OnlinePaymentt from "../Additional-Information-part/images/online-payment.png"
import { Card } from 'antd';
import { DatePicker } from 'antd';
import Button from '@material-ui/core/Button';
import "../Additional-Information-part/addition-information.css"
import AppleStr from "../Additional-Information-part/images/apple store2.jpg"
import google_Store from "../Additional-Information-part/images/play store1.png"


// const dateFormat = 'YYYY/MM/DD';

// const customFormat = value => {
//     return `custom format: ${value.format(dateFormat)}`;
//   };


function AdditionalInformation() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">

                    <img src={WaveOnly} width="1000" height="500" className="waveClss_div img-fluid" alt="" ></img>
                    <div className="container ml-3 under_DIV ">
                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6 col-12 mt-5">
                                <div className="text-left"><img src={RewardPng} width="40px" height="40px" alt="" className="img-fluid"></img></div>
                                <h5 className="text-left">Reward For your booking</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt-5">
                                <div className="text-left"><img src={CustomerCare} width="40px" height="40px" alt="" className="img-fluid"></img></div>
                                <h5 className="text-left">Extra support after you book</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 mt-5">
                                <div className="text-left"><img src={OnlineBook} width="40px" height="40px" alt="" className="img-fluid"></img></div>
                                <h5 className="text-left">Reward For your booking</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt-5">
                                <div className="text-left"><img src={OnlinePaymentt} width="40px" height="40px" alt="" className="img-fluid"></img></div>
                                <h5 className="text-left">Extra support after you book</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-3 additonalCard
                    _div">
                    <Card style={{ width: 380 }}>
                        <h2 className="">Additional Inforamtion</h2>
                        <p className="text-left bg-Color mt-5">Fill out information below to receice Special offer just for YOU !!</p>
                        <h5 className="text-left mt-3">Gender</h5>
                        <form>
                            <div class="form-group" required>
                                <select class="form-control" required>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div>
                            <h5 className="text-left mt-3">Birth Date</h5>
                                <div className="text-left"><DatePicker placeholder="Date-month-year" style={{width:"50%"}} required/></div>
                            </div>
                            {/* <div className=" mt-4"><button type="submit" class="btn  additonalBTN" > Done </button></div> */}
                            <Button type="submit" variant="contained" color="primary"  className="mt-3">Done</Button>
                            <div className="mt-3"><a href="accountInformation" className="additonalstg">Skip this stage</a></div>
                            
                        </form>

                    </Card>
                    <div className="mt-5 additional-str ml-5">
                            <img src={google_Store} width="110px" height="60px" alt="" className="img-fluid"></img>
                            <img src={AppleStr} width="110px" height="45px" alt="" className="img-fluid"></img>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInformation
