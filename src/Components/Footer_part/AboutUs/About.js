import React from 'react'
import "./about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardContent, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
        flexBasis: '100%',
        transform: 'translateX(42%)',
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <div className="AboutPage-main-content" >
            <div>

                <div className="container">

                    <h2 className="text-center">Who are we</h2>

                    <p className=" mt-4 main-content">We, Tickets4Travel, started our journey in 2020. Necessity drives Innovation, Innovation is necessity. In Bangladesh, we are becoming digital. But, in many sector, we are still lagging behind. Let’s hear how we initiated this startup, Our CEO, Mahfujur Rahman Miraj, who wants to travel by launch but couldn’t find any digital solutions, he had to waste too many hours, but solutions didn’t happen. The same incident happens in the bus sector. So, He came up with an idea where general people can experience all services in a single platform.  Now, Tickets4Travel, developed an online platform, this serves people with bus, launch, air, train – tickets and hotel booking.
                    Tickets4Travel makes people life easier with the innovative solutions. We make people life much easier than before with our unique digital solutions.
                  </p>


                    <h3 className="our-value-header text-center">Our Values</h3>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-5">
                            <Card className="Our-value-CardRoot">
                                <CardHeader
                                    classes={{ avatar: classes.avatar }}
                                    avatar={
                                        <Avatar aria-label="recipe" className="avatar">
                                            <FontAwesomeIcon icon={faLightbulb} size="lg" />
                                        </Avatar>
                                    } />
                                <CardContent contained>
                                    <h4 className="text-center">Innovative</h4>
                                    <p className="text-center mt-4">
                                        Tickets4Travel, is always promising to find innovative solutions. We are obliging to work for making people’s life easier with our digital solutions for recurring problems. </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-5">
                            <Card className="Our-value-CardRoot">
                                <CardHeader
                                    classes={{ avatar: classes.avatar }}
                                    avatar={
                                        <Avatar aria-label="recipe" className="avatar">
                                            <FontAwesomeIcon icon={faShieldAlt} size="lg" />
                                        </Avatar>
                                    } />
                                <CardContent>
                                    <h4 className="text-center">We care about safety</h4>
                                    <p className="text-center mt-4">
                                        Tickets4Travel, is always promising to find innovative solutions. We are obliging to work for making people’s life easier with our digital solutions for recurring problems.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-5">
                            <Card className="Our-value-CardRoot">
                                <CardHeader
                                    classes={{ avatar: classes.avatar }}
                                    avatar={
                                        <Avatar aria-label="recipe" className="avatar">
                                            <FontAwesomeIcon icon={faHandshake} size="lg" />
                                        </Avatar>
                                    } />
                                <CardContent>
                                    <h4 className="text-center">We believe in empowerment</h4>
                                    <p className="text-center mt-4">
                                        Tickets4Travel, is always promising to find innovative solutions. We are obliging to work for making people’s life easier with our digital solutions for recurring problems. </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-md-4 col-12"></div>
                        <div className="col-md-4 col-12"></div>
                    </div>



                </div>


                <div className="row">
                    <div className="col-md-3 col-12 mt-5">

                    </div>
                    <div className="col-md-3 col-12 mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card className="Our-value-CardRoot">
                            <CardHeader
                                classes={{ avatar: classes.avatar }}
                                avatar={
                                    <Avatar aria-label="recipe" className="avatar">
                                        <FontAwesomeIcon icon={faUsers} size="lg" />
                                    </Avatar>
                                } />
                            <CardContent>
                                <h4 className="text-center">We believe in empowerment</h4>
                                <p className="text-center mt-4">
                                    Tickets4Travel, is always promising to find innovative solutions. We are obliging to work for making people’s life easier with our digital solutions for recurring problems. </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-md-3 col-12 mt-5" >
                        <Card className="Our-value-CardRoot">
                            <CardHeader
                                classes={{ avatar: classes.avatar }}
                                avatar={
                                    <Avatar aria-label="recipe" className="avatar">
                                        <FontAwesomeIcon icon={faHandHoldingHeart} size="lg" />
                                    </Avatar>
                                } />
                            <CardContent>
                                <h4 className="text-center">We believe in empowerment</h4>
                                <p className="text-center mt-4">
                                    Tickets4Travel, is always promising to find innovative solutions. We are obliging to work for making people’s life easier with our digital solutions for recurring problems. </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
