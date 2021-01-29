import React from 'react'
import "../exclusiveMember_part/login.css"
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    link: {
        "&:hover": {
            textDecoration: "none"
        }
    }
}));



function Login() {
    const classes = useStyles()
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center font-weight-bold">Exclusivly For Tickets4Travel Member</h1>
                            <div className="text-center ">
                                <Link to="/login" className={classes.link}>
                                    <Button variant="outlined" color="primary" size="large">Log In</Button>
                                </Link>
                                <span className="text-center"> OR </span>
                                <Link to="/register" className={classes.link}>
                                    <Button variant="outlined" color="primary" size="large">Register</Button>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
