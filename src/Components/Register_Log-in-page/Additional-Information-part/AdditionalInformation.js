import React from 'react'
import WaveOnly from "../Additional-Information-part/images/wave-only.png"
import RewardPng from "../Additional-Information-part/images/reward.png"
import CustomerCare from "../Additional-Information-part/images/customer-agent.png"
import OnlineBook from "../Additional-Information-part/images/online-booking.png"
import OnlinePaymentt from "../Additional-Information-part/images/online-payment.png"
import "../Additional-Information-part/addition-information.css"
import AppleStr from "../Additional-Information-part/images/apple store2.jpg"
import google_Store from "../Additional-Information-part/images/play store1.png"


import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, TextField, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 500,
        [theme.breakpoints.down("md")]: {
            maxWidth: 400
        }
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


function AdditionalInformation() {

    const classes = useStyles();

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
                    <Card className={classes.root}>
                        <CardContent style={{ width: '100%', height: 500 }}>
                            <Typography variant="h3">Additional Infomation</Typography>
                            <p className="text-left bg-Color mt-5">Fill out information below to receice Special offer just for YOU !!</p>
                            <Typography variant="h5" className="text-left mt-3">Gender</Typography>
                            <form>
                                <div class="form-group" required>
                                    <select class="form-control" required>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <Typography variant="h5" className="text-left mt-3">Birth Date</Typography>
                                <div className={classes.container}>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />
                                </div>
                                <CardActions><Button type="submit" variant="contained" color="primary" className="mt-3">Done</Button>
                                    <div className="mt-3"><a href="accountInformation" className="additonalstg">Skip this stage</a></div></CardActions>
                            </form>
                        </CardContent>
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
