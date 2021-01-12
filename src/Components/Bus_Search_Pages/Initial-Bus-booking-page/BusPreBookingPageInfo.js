import React from "react";
import { Card, CardContent, CardHeader, Checkbox } from '@material-ui/core';
import pln1 from "../Initial-Bus-booking-page/images/plane.png";
import Arr1 from "../Initial-Bus-booking-page/images/next.png";
import pointing from "../Initial-Bus-booking-page/images/pointing.png";
import nt from "../Initial-Bus-booking-page/images/next.png";
import tik from "../Initial-Bus-booking-page/images/correct.png";
// import add from "../Initial-Bus-booking-page/images/add.png"
// import more from "../Initial-Bus-booking-page/images/more.png"
import "../Initial-Bus-booking-page/busPreBOOK.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  BusButton: {
    width: 300,
    height: 70,
  },
}));

function BusPreBookingPageInfo() {
  const classes = useStyles();
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-112">
            <Card className="flightprebookCard1">
              <CardContent>
                <h3 className="text-left">Flight from Name of the destination to Name of the destination</h3>
                <div className="row mt-4">
                  <div className="col-md-6 col-12 ml-5">
                    <p><img src={pln1} width="20px" height="20px" alt="" className="img-fluid"></img> Name <img src={Arr1} width="20px" height="20px" alt="" className="ml-5 mr-5 img-fluid"></img> Name <span className="ml-3"> | </span> 13sep 2021</p>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6 col-12 margin_div mt-4">
                    <p> 1 Adult <span className=""> | </span> Economy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-md-10 col-12 text-left">

            <Card className="flightprebookCard2">
              <CardHeader title="Flight Details" />
              <CardContent>
                <div className="txxt_div"></div>
                <p>sun, 13 sep, 2021</p>
                <p className="ml-5 mb-0">Lion jt-16</p>
                <p className="logo_color mt-0 mb-0">Logo</p>
                <p className="ml-5 mt-0">Promo</p>

                <div className="row">
                  <div className="col-md-4 col-4">18:00</div>
                  <div className="col-md-4 col-4">21:20</div>
                  <div className="col-md-4 col-4">01h, 50m</div>
                </div>
                <div className="pointing2"><img src={pointing} width="20px" height="20px" alt="" className="img-fluid"></img></div>
                <div className="row mt-3">
                  <div className="col-md-4 col-4">Name</div>
                  <div className="col-md-4 col-4">Name</div>
                  <div className="col-md-4 col-4">
                    <Checkbox
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />Direct
                                    </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-2 se_div">

            <Card style={{ width: "300px" }}>
              <CardHeader title="Additional Information" />
              <CardContent>
                <p className="text-left">CGS <img src={nt} width="20px" height="20px" alt="" className="img-fluid"></img> DPS</p>
                <div className="text-left mt-4">
                  <p><img src={tik} width="20px" height="20px" alt="" className="img-fluid"></img><span className="green_div">Refundable</span></p>
                  <p><img src={tik} width="20px" height="20px" alt="" className="img-fluid"></img><span className="green_div">Refundable</span></p>
                </div>
              </CardContent>
            </Card>
            <Card style={{ width: "300px" }} className="mt-4">
              <CardHeader title="Price Details" />
              <CardContent>
                <div className="row">
                  <div className="col-md-6 col-6">Name</div>
                  <div className="col-md-6 col-6">Amount</div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 col-6">Price you pay</div>
                  <div className="col-md-6 col-6">Amount</div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4">
              <Link to="/booking_Stepper">
                <Button className={classes.BusButton} variant="contained" size="large" color="primary">
                  Continue to Payment
                               </Button>
              </Link>

            </div>
          </div>
        </div>



        {/* <div className="row mt-4">
                    <div className="col-md-10">
                        <h5 className="text-left">Extra convenience for your trips</h5>

                        <Card style={{ width: 550, height: 80 }}>
                            <div className="immg_div"><img src={add} width="20px" height="20px"></img></div>
                            <div className="text-left texxxt_div">
                                <p className="add_hotel mb-0 ">Card content</p>
                                <p className="">lorem lorem lorem lorem koremgsfjgb hjfbgh</p>
                            </div>
                            <div className="div">
                                <img src={more} width="20px" height="20px"></img>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-2"></div>
                </div> */}
      </div>
    </div>
  )
}

export default BusPreBookingPageInfo;
