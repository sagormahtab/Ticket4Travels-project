import React from 'react'
import "./about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from  '@fortawesome/free-solid-svg-icons'

import { Card,CardHeader,CardMedia,CardContent, Grid } from '@material-ui/core';

const About = () => {
    return (
        <div className="AboutPage-main-content">
            <h3 className="text-center">Who are we</h3>

            <p className="text-center">We, Tickets4Travel, started our journey in 2020. Necessity drives Innovation, Innovation is necessity. In Bangladesh, we are becoming digital. But, in many sector, we are still lagging behind. Let’s hear how we initiated this startup, Our CEO, Mahjfujur Rahman Miraj, who wants to travel by launch but couldn’t find any digital solutions, he had to waste too many hours, but solutions didn’t happen. The same incident happens in the bus sector. So, He came up with an idea where general people can experience all services in a single platform.  Now, Tickets4Travel, developed an online platform, this serves people with bus, launch, air, train – tickets and hotel booking.
            Tickets4Travel makes people life easier with the innovative solutions. We make people life much easier than before with our unique digital solutions.
            </p>


            <div>
                <h3 className="our-value-header">Our Values</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <Card className="Our-value-CardRoot">
                                <CardHeader 
                                avatar={
                                    <FontAwesomeIcon icon={faLightbulb} size="lg" color="#36B87B" pull="center"/>
                                }/>
                                <CardContent>
                                <h3 className="text-center">Innovative</h3>
                                <p className="text-center">Tickets4Travel, is always promising to find innovative solutions. We are obliging to work for making people’s life easier with our digital solutions for recurring problems. </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-md-4 col-12"></div>
                        <div className="col-md-4 col-12"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
