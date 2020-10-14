import React from 'react'
import WaveOnly from "../Verification-code_Page/images/wave-only.png"
import RewardPng from "../Verification-code_Page/images/reward.png"
import CustomerCare from "../Verification-code_Page/images/customer-agent.png"
import OnlineBook from "../Verification-code_Page/images/online-booking.png"
import OnlinePaymentt from "../Verification-code_Page/images/online-payment.png"
import "../Verification-code_Page/verificationPage.css"
import { Card } from 'antd';
import { useHistory } from "react-router-dom";



function VerificationPage() {

    

// function HomeButton  () {
  let history = useHistory();

  const handleClick = ()=> {
    history.push("/account_inforamtion");
  }

    return (
        <div>
            <div className="">
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
                    <div className="col-lg-6 col-md-6 VerificationCard
                    _div">
                        <Card style={{ width: 500 }}>
                            <h2 className="">Account Verification</h2>
                            <p className="text-left bg-Color mt-5">Verification code has been send to <span className="acqua_colorDiv">name@gmail.com</span> Please insert Verifiaction code to verify</p>

                            <h5 className="text-left mt-4">Verification code</h5>
                            <form>
                            <div className="row">
                                <div className="col-lg-8 col-md-8"><input type="text" class="form-control"  aria-describedby="emailHelp" required/></div>
                                <div className="col-lg-4 col-md-4"><button type="submit" class="btn btn-success bbtn" onClick={handleClick}>SUBMIT</button></div>
                            </div>
                            <p className="text-left mt-2">Haven't receive the verifivation code? <span className="acqua_colorDiv">Resend</span></p>
                            
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationPage
