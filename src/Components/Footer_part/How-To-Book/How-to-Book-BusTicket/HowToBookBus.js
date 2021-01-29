import { Card, CardContent, CardHeader, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "#30dd89",
    },
}));


const HowToBookBus = () => {
    const classes = useStyles()
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <Card>
                        <CardContent>
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    1
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >Select "Bus" service from the website's homepage</Typography>
                                }
                            />
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    2
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >Select your "From" as in starting point and "To" as in your destination.</Typography>
                                }
                            />
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    3
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >Provide your "Date of Journey". You can also provide your "Date of Return".</Typography>
                                }
                            />
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    4
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >After clicking "Search Bus"; you will be routed to the list available bus services.</Typography>
                                }
                            />
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    5
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >Select your desired bus operators on available time .</Typography>
                                }
                            />
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    6
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >Choose your available seats; One user can select 4 seats (maximum).</Typography>
                                }
                            />
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    7
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >Confirm your booking by providing necessary informations.</Typography>
                                }
                            />
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    8
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >Choose your suitable payment methods.</Typography>
                                }
                            />
                            <CardHeader avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    9
                                </Avatar>
                            }
                                title={
                                    <Typography variant="h6" >After your payment, we will provide you a E-ticket through your given email address within 60 minutes confirming your payment.</Typography>
                                }
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HowToBookBus
