import { Card, CardContent, CardHeader, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    avatar: {
        backgroundColor: "#30dd89",
    },
    heading: {
        fontSize: "200px"
    }
}));



const HowToSignUp = () => {
    const classes = useStyles()
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <Card>
                        <CardContent>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        1
                                    </Avatar>
                                }
                                title={
                                    <Typography variant="h6">Visit Our website and from the right upper corner, click on the "Register" button.</Typography>
                                }

                            />
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        2
                                    </Avatar>
                                }
                                title={
                                    <Typography variant="h6">On the "Register" page, provide email and phone number to sign up or sign up with your Facebook acoount/ Gmail account.</Typography>
                                }

                            />
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        3
                                    </Avatar>
                                }
                                title={
                                    <Typography variant="h6">A confirmation mail will be sent through your email address.</Typography>
                                }

                            />
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        3
                                    </Avatar>
                                }
                                title={
                                    <Typography variant="h6">Finally, your profile will be created; Enjoy our services.</Typography>
                                }

                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HowToSignUp
