import React from 'react'
// import Wave_png from "../Footer_part/images/Wave.png"
import wave from "../Footer_part/images/wave.svg"
import paypal from "../Footer_part/images/paypal1.jpg"
import visa from "../Footer_part/images/visa1.jpg"
import bikas from "../Footer_part/images/bikas1.png"
import pa from "../Footer_part/images/play store1.png"
import apple from "../Footer_part/images/apple store2.jpg"
import fb from "../Footer_part/images/fb1.png"
import insta from "../Footer_part/images/instsgram.png"
import Youtube from "../Footer_part/images/youtube.png"
import "../Footer_part/footer.css"

function Footer() {
    return (
        <div>
            {/* <img src={Wave_png} alt="wave" className="image1 img-fluid" width="100%"></img> */}
            {/* <img src={svg2} alt="wave" className="image2"></img> */}
            <img src={wave} alt="" className="img-fluid" ></img>
            
            <div className="image3">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-3 col-3"><h3>About us</h3></div>
                        <div className="col-md-3 col-3"><h3>Follow us On</h3></div>
                        <div className="col-md-3 col-3"><h3>Products</h3></div>
                        <div className="col-md-3 col-3"><h3>Others</h3></div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-3 col-3">How to book</div>
                        <div className="col-md-3 col-3"><img src={fb} width="40px" height="30px" alt="" className="img-fluid"></img>Facebook</div>
                        <div className="col-md-3 col-3">Flights</div>
                        <div className="col-md-3 col-3">Flights</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3 col-3">Contact us</div>
                        <div className="col-md-3 col-3"><img src={fb} width="40px" height="30px" alt="" className="img-fluid"></img>Facebook</div>
                        <div className="col-md-3 col-3">Hotel</div>
                        <div className="col-md-3 col-3">Hotel</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3 col-3">Help Center</div>
                        <div className="col-md-3 col-3"><img src={insta} width="30px" height="30px" alt="" className="img-fluid"></img>Instagram</div>
                        <div className="col-md-3 col-3">Train</div>
                        <div className="col-md-3 col-3">Train</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3 col-3">Installment</div>
                        <div className="col-md-3 col-3"><img src={Youtube} width="30px" height="20px" alt="" className="img-fluid"></img>YouTube</div>
                        <div className="col-md-3 col-3">Bus</div>
                        <div className="col-md-3 col-3">Bus</div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-md-3 col-3">
                        <img src={paypal} alt="paypal" height="40px" width="70px" className="logog img-fluid" ></img>
                        </div>
                        <div className="col-md-3 col-3">
                        <img src={visa} alt="paypal" height="40px" width="60px" className=" logog ml-3 img-fluid"></img>
                        </div>
                        <div className="col-md-3 col-3">
                        <img src={bikas} alt="paypal" height="40px" width="40px" className=" logog ml-3 img-fluid"></img>
                        </div>
                        <div className="col-md-3 col-3">
                        <h2>Downloade Our App</h2>
                        <img src={pa} alt="play+apple" className="pa img-fluid" height="70px" width="130px"></img>
                        <img src={apple} alt="play+apple" className="pa img-fluid" height="50px" width="130px"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
