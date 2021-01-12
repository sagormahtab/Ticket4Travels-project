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
        maxWidth: 500,
        [theme.breakpoints.down("md")]: {
            maxWidth: 400
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
                <div className="row">
                    <div className="col-sm-6 col-md-6 ">
                        <div className="womeIMG_div"> <img src={WomenPIC} width="600px" height="450px" alt="" className="img-fluid"></img></div>
                        <div className="mt-5">
                            <img src={google_Store} width="110px" height="60px" alt="" className="img-fluid"></img>
                            <img src={Apple_Store} width="110px" height="45px" alt="" className="img-fluid"></img>
                        </div>
                        <p className="ml-5">Downlode Our app</p>


                    </div>
                    <div className="col-sm-6 col-md-6  mt-5">
                        <h2 className="text-left ml-2"><span className="ticekt-Text_Div2 m-0">Join</span> Us Become</h2>
                        <h2><span className="ticekt-Text_Div2 mt-0 ml-5">Tickets4Travel</span> Member</h2>

                        <div>
                            <Card className={classes.root}>
                                <CardContent style={{ width: '100%', height: 500 }}>
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
                                            <Button type="submit" variant="contained" color="primary">
                                                Join
                                    </Button>
                                        </CardActions>
                                    </form>

                                    <div>

                                        <Button className="mt-4 mr-5" variant="outlined" color="primary"> <img src={Fb} width="20px" height="20px" alt="" className="img-fluid"></img> <span className="ml-2">Register using Facbook</span> </Button>

                                        <Button className="mt-2" variant="outlined" color="primary"> <img src={Google} width="20px" height="20px" alt="" className="img-fluid"></img> <span className="ml-2">Register using Facbook</span> </Button>

                                    </div>

                                    <div className="mt-3">
                                        <p>By clicking the button below Your agree to <span className="ticekt-Text_Div">Tickets4travel</span> <span className="ticekt-Text_Div2"> Terms & conditions </span> & <span className="ticekt-Text_Div2"> privacy poilicy</span></p>
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
