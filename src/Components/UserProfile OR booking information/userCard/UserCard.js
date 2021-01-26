import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import UsrPNGG from "../userCard/images/user.png"
import "../userCard/userCard.css"


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 500,
        [theme.breakpoints.down("sm")]: {
            width: "400px"
        },
    },
    media: {
        height: 140
    }
}));


function UserCard() {
    const classes = useStyles()
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-4">
                        <Card className={classes.root}>
                            <CardContent>
                                <div className="row">
                                    <div className="col-md-2 col-4"><img src={UsrPNGG} alt="" className="img-fluid"></img></div>
                                    <div className="col-md-10 col-8">
                                        <h5>Ismail Hosain</h5>
                                        <p>name@gmail.comm</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
