import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardContent }from '@material-ui/core';
import UsrPNGG from "../userCard/images/user.png"
import "../userCard/userCard.css"


const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
      [theme.breakpoints.down("md")] : {
      maxWidth: 200
      }
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
                        <Card  className={classes.root}>
                            <CardContent>
                            <div className="row">
                            <div className="col-md-4 col-12"><img src={UsrPNGG} height="30px" width="30px" alt="" className="img-fluid"></img></div>
                            <div className="col-md-8 col-12">
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
