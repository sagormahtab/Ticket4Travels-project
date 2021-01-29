import { Card, CardContent, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { Link } from "react-router-dom"
import LoginPageImg from "./images/women pic with background prj.png"
import "./loginPage.css"



const useStyles = makeStyles(() => ({
    link: {
        "&:hover": {
            textDecoration: "none"
        }
    }
}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <div className="row" style={{ width: "100%" }}>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <img className="img-fluid" alt="LoginPageImage" src={LoginPageImg}></img>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <h2 className="text-left ml-2 mt-5"><span className="Login-header m-0">Log in </span> <span className="others-header">With Us If you are</span></h2>
                <h2><span className="ticekts4Travel-Header mt-0 ml-5">Tickets4Travel's</span><span className="member-header"> Member</span> </h2>

                <div>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="mt-3">
                                    <h5>Enter Your Email</h5>
                                    <TextField type="email" label="Email" variant="outlined" fullWidth />
                                </div>
                                <div className="mt-3">
                                    <h5>Enter Your Password</h5>
                                    <TextField type="password" label="Password" variant="outlined" fullWidth />
                                </div>

                                <div className="mt-4">
                                    <Link to="/" className={classes.link}><Button variant="contained" style={{ backgroundColor: "#30dd89" }}>Log In</Button></Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default LoginPage
