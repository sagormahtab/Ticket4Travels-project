import React from 'react'
import svg1 from "../Footer_part/images/wave (1).svg"
import svg2 from "../Footer_part/images/wave (2).svg"
import paypal from "../Footer_part/images/paypal1.jpg"
import visa from "../Footer_part/images/visa1.jpg"
import bikas from "../Footer_part/images/bikas1.png"
import pa from "../Footer_part/images/play store1.png"
import apple from "../Footer_part/images/apple store2.jpg"
import "../Footer_part/footer.css"

function Footer() {
    return (
        <div>
            <img src={svg1} alt="wave" className="image1"></img>
            <img src={svg2} alt="wave" className="image2"></img>
            <div className=" container-fluid image3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">About us</div>
                        <div className="col-md-3">Follow us On</div>
                        <div className="col-md-3">products</div>
                        <div className="col-md-3">Others</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">About us</div>
                        <div className="col-md-3">Follow us On</div>
                        <div className="col-md-3">products</div>
                        <div className="col-md-3">Others</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">About us</div>
                        <div className="col-md-3">Follow us On</div>
                        <div className="col-md-3">products</div>
                        <div className="col-md-3">Others</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">About us</div>
                        <div className="col-md-3">Follow us On</div>
                        <div className="col-md-3">products</div>
                        <div className="col-md-3">Others</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">About us</div>
                        <div className="col-md-3">Follow us On</div>
                        <div className="col-md-3">products</div>
                        <div className="col-md-3">Others</div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={paypal} alt="paypal" height="40px" width="70px" className="logog"></img>
                            <img src={visa} alt="paypal" height="40px" width="50px" className=" logog ml-3"></img>
                            <img src={bikas} alt="paypal" height="40px" width="40px" className=" logog ml-3"></img>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 mt-5"> <h1> Downlode Our app</h1></div>
                        <img src={pa} alt="play+apple" className="pa" height="70px" width="120px"></img>
                        <img src={apple} alt="play+apple" className="pa" height="50px" width="110px"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
