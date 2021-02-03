import React from 'react'
import WomenPIC from "../RegisterPage-1/images/women pic with background prj.png"
import Fb from "../RegisterPage-1/images/facebook.png"
import Google from "../RegisterPage-1/images/google-symbol.png"
import google_Store from "../RegisterPage-1/images/play store1.png"
import Apple_Store from "../RegisterPage-1/images/apple store2.jpg"
import "../RegisterPage-1/registerPage_one.css"
import useForm from "./useForm"
import validate from "./validateInfo"

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, TextField, Button } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 600,
        [theme.breakpoints.down("md")]: {
            maxWidth: 480
        }
    },
}));




function RegisterPageOne({ submitForm }) {


    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    const classes = useStyles();



    return (
        <div>
            <div className="">
                <div className="row" style={{ width: "100%" }}>
                    <div className="col-sm-6 col-md-6 ">
                        <div className="womeIMG_div"> <img src={WomenPIC} alt="" className="img-fluid"></img></div>


                    </div>
                    <div className="col-sm-12 col-md-6  mt-5">
                        <h2 className="text-left ml-2"><span className="joinSpan m-0">Join</span> <span className="us-become-header">Us Become</span></h2>
                        <h2><span className="Tickets4Travel-header mt-0 ml-5">Tickets4Travel's</span> <span className="member-header">Member</span></h2>

                        <div>
                            <Card className={classes.root}>
                                <CardContent >
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <Typography variant="h5">Mobile Number</Typography>
                                            <TextField
                                                label="Enter Phone"
                                                variant="outlined"
                                                type="text"
                                                name="phone"
                                                fullWidth
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                            {errors.phone && <p>{errors.phone}</p>}
                                        </div>

                                        <div className="form-group">
                                            <Typography variant="h5">Email</Typography>
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                type="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                fullWidth

                                            />
                                            {errors.email && <p>{errors.email}</p>}
                                        </div>
                                        <CardActions>
                                            <Button type="submit" variant="contained" style={{ backgroundColor: "#30dd89" }}>
                                                Join
                                    </Button>
                                        </CardActions>
                                    </form>



                                    <div className="mt-3">
                                        <p>By clicking the button below Your agree to <span className="ticket-Text_Div">Tickets4travel</span> <span className="ticket-Text_Div2"> <a href="/terms&conditions">Terms & conditions</a> </span> & <span className="ticket-Text_Div2"><a href="/privacy&policy">privacy poilicy</a></span></p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default RegisterPageOne
