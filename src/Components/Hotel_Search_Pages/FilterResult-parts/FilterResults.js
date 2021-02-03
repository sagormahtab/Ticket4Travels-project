import React from 'react'
import { Card, CardContent, CardHeader, Checkbox, CardMedia, Button, } from '@material-ui/core';

import "../FilterResult-parts/filterResults.css"
import architecture from "../FilterResult-parts/images/architecture-1048092_1920.jpg"
import impressionLogo from "./images/Final Logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'



import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: "wrap",
        width: "100%",
        height: "auto"
    },
    hotelContent: {
        flex: '1 1  auto',
        [theme.breakpoints.down('sm')]: {
            flex: "100%"
          },

    },
    checkInWithTex: {
        flex: '1 1 0 auto',
        
        [theme.breakpoints.down('sm')]: {
            flex: "100%"
          },
    },
    priceFilter: {
        height: 40,
        width: "300px"
    },
    input: {
        marginLeft: 30,
        width: 42,
    },
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },

    cardMedia: {
        width: 200,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop: '30'
    },

    link: {
        "&:hover": {
            textDecoration: "none"
        }
    }
}));


export default function InputSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <Card className="hotelFilter1 mt-4">
                                <CardHeader title="Booking Policy" />
                                <hr></hr>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />Free cencelation
                            </Card>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                            <Link to="/hotel_details" className={classes.link}>
                                <Card className={classes.root}>
                                    <CardMedia>
                                        <img src={architecture} alt="" width="200px" height="240px"></img>
                                    </CardMedia>
                                    <CardContent className={classes.hotelContent}>
                                        <CardHeader title="The Raintree Hotel" />
                                        <Button variant="outlined" color="primary" className="ml-3">Hotels</Button>
                                        <div className="ml-2"><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="mt-3" />
                                            <span style={{ color: "#8f8f8f" }}> cox,s bazar, Bangladesh</span>
                                        </div>
                                        <div className="ImpressiveLogo"><img src={impressionLogo} alt="ourLogo" width="50px" height="70px" className="img-fluid"></img><span style={{ color: "#1ba0e2" }} className="impressiveRate">Impressive - 8.6</span></div>
                                    </CardContent>

                                    <CardContent className={classes.checkInWithTex}>
                                        <p style={{ color: "#1ba0e2" }} className="mb-0 mt-5">Pay up check In</p>
                                        <p style={{ color: "#1ba0e2" }} className="mb-0">Available</p>
                                        <p className="Amount">RP 3333</p>
                                    </CardContent>
                                    {/* <Accordion >
                                          <AccordionSummary style={{margin: "0"}} expandIcon={<ExpandMoreIcon style={{padding:"0"}}/>}>
                                              <p className="AccordionText">Inclusive of Taxes</p>
                                          </AccordionSummary>
                                          <AccordionDetails >
                                              <div className="row">
                                                  <div className="col-md-3"></div>
                                                  <div className="col-md-6">
                                                      <p>Night(s) 1 (January 16, 2021)</p>
                                                  </div>
                                                  <div className="col-md-3">Rp 206.612</div>
                                              </div>
                                          </AccordionDetails>
                                      </Accordion> */}
                                </Card>
                            </Link>
                        </div>
                    </div>



                    <div className="row mt-2">
                        <div className="col-md-4 col-12">
                            <Card className="hotelPriceRange" >

                                <CardHeader title="Price Range Per Night" />
                                <hr></hr>
                                <CardContent>
                                    <div className={classes.priceFilter}>

                                        <Grid container spacing={2} alignItems="center">

                                            <Grid item xs>
                                                <Slider
                                                    value={typeof value === 'number' ? value : 0}
                                                    onChange={handleSliderChange}
                                                    aria-labelledby="input-slider"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Input
                                                    className={classes.input}
                                                    value={value}
                                                    margin="dense"
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    inputProps={{
                                                        step: 10,
                                                        min: 0,
                                                        max: 100,
                                                        type: 'number',
                                                        'aria-labelledby': 'input-slider',
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-md-4">
                            <Card>
                                <CardHeader title="Star Rating" />
                                <CardContent>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}

                                        /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                                    </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}

                                        /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                                    </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}

                                        /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                                    </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}

                                        /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                                    </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}

                                        /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" /> <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-4 ">
                            <Card >
                                <CardHeader title="Facilities" />
                                <hr></hr>
                                <CardContent>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Wifi
                                            </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Non AC
                                            </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Air Coindition
                                            </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Power Supply
                                            </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Parking
                                            </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Airport transfer
                                            </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Fitness center
                                            </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />24-hour Front desk
                                           </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Wheelchain acess
                                           </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Resturent
                                           </div>
                                    <div>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />Swimming pool
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



