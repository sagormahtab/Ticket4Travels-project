import React from 'react'
import WaveOnly from "../Additional-Information-part/images/wave-only.png"
import RewardPng from "../Additional-Information-part/images/reward.png"
import CustomerCare from "../Additional-Information-part/images/customer-agent.png"
import OnlineBook from "../Additional-Information-part/images/online-booking.png"
import OnlinePaymentt from "../Additional-Information-part/images/online-payment.png"
import { Card } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import "../Additional-Information-part/addition-information.css"
import AppleStr from "../Additional-Information-part/images/apple store2.jpg"
import google_Store from "../Additional-Information-part/images/play store1.png"


const dateFormat = 'YYYY/MM/DD';

const customFormat = value => {
    return `custom format: ${value.format(dateFormat)}`;
  };


function Additional_Information() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-6 ">

                    <img src={WaveOnly} width="1000" height="500" className="waveClss_div"></img>
                    <div className="container ml-3 under_DIV">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="text-left"><img src={RewardPng} width="40px" height="40px"></img></div>
                                <h5 className="text-left">Reward For your booking</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="text-left"><img src={CustomerCare} width="40px" height="40px"></img></div>
                                <h5 className="text-left">Extra support after you book</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="text-left"><img src={OnlineBook} width="40px" height="40px"></img></div>
                                <h5 className="text-left">Reward For your booking</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="text-left"><img src={OnlinePaymentt} width="40px" height="40px"></img></div>
                                <h5 className="text-left">Extra support after you book</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 additonalCard
                    _div">
                    <Card style={{ width: 500 }}>
                        <h2 className="">Account Verification</h2>
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
                            <div className="col-lg-4 col-md-4 mt-4"><button type="submit" class="btn  additonalBTN" > Done </button></div>
                            <div className="mt-4"><a href="#" className="additonalstg">Skip this stage</a></div>
                            
                        </form>

                    </Card>
                    <div className="mt-5 additional-str">
                            <img src={google_Store} width="110px" height="60px"></img>
                            <img src={AppleStr} width="110px" height="45px"></img>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Additional_Information
