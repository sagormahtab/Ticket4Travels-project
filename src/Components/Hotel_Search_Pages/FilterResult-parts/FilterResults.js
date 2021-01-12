import React from 'react'
import { Card, CardContent, Typography, CardHeader, Checkbox, CardMedia } from '@material-ui/core';
import "../FilterResult-parts/filterResults.css"
import architecture from "../FilterResult-parts/images/architecture-1048092_1920.jpg"
import travelLogo from "../FilterResult-parts/images/Final Logo.png"
import placeName from "../FilterResult-parts/images/placeholder.png"
// import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        width: 250,
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

    cover: {
        width: 200,
    },
});


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
                        <div className="col-md-6">
                            <Card className="hotelFilter1 mt-4" style={{ width: "300px" }}>
                                <CardHeader title="Booking Policy" />
                                <hr></hr>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />Free cencelation
                            </Card>
                        </div>
                        <div className="col-md-6 col-12 hotel_details">
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            Live From Space
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Mac Miller
                                        </Typography>
                                    </CardContent>

                                </div>
                                <CardMedia
                                    className={classes.cover}
                                    image="./images/placeholder.png"
                                /><img src={architecture} alt="hotel-pic" className="img-fluid filterimage1 " ></img>
                            </Card>
                        </div>
                    </div>



                    <Card style={{ width: 300 }} className="hotelPriceRange">
                        <CardContent>
                            <h5 className="text-left">price range per Night</h5>
                            <div className={classes.root}>

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
                    {/* <Card style={{ width: 300 }} className="hotelRating">
                        <h3 className="text-left">Start rating</h3>
                        <Checkbox onChange={onChange}><Rate /></Checkbox>
                        <Checkbox onChange={onChange}><Rate /></Checkbox>
                        <Checkbox onChange={onChange}><Rate /></Checkbox>
                    </Card> */}
                    <div className="">
                        <div className="">
                            <div className="row mt-4">
                                <div className="col-md-6 ">
                                    <Card style={{ width: "300px" }}>
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

                                {/* <div className="col-md-6 col-12 hotel_part2">
                                        <div className="row">

                                            <div className="col-md-4 col-4 px-0">
                                                <Link to="/hotelPre_Booking">
                                                    <img src={architecture} alt="hotel-pic" className="img-fluid filterimage2"></img>
                                                </Link>
                                            </div>

                                            <div className="col-md-4 col-4 px-0">
                                                <Card className="hotelfilterCard1">
                                                    <h5 className="text-left">Hotel Name</h5>
                                                    <div className="text-left"><button className="button4">Hotel</button></div>
                                                    <div className="rate_part2"><Rate /></div>
                                                    <div className="text-left  mt-3"><img src={placeName} width="20px" height="20px" alt="" className="img-fluid"></img>PlaceName</div>
                                                    <div className="text-left"><img src={travelLogo} width="50px" height="30px" alt="" className="img-fluid"></img>Convinient8.0</div>
                                                </Card>
                                            </div>
                                            <div className="col-md-4 col-4 px-0">
                                                <Card className="hotelfilterCard2">
                                                    <h5 className="text-right">Save 10%</h5>
                                                    <p className="text-right">Pay upon check-in available</p>
                                                    <p className="text-right font-weight-bold">Amount</p>
                                                    <div className="text-right">
                                                        <Dropdown overlay={menu}>
                                                            <a className="ant-dropdown-link" href onClick={e => e.preventDefault()}>
                                                                Including of Taxes! <DownOutlined />
                                                            </a>
                                                        </Dropdown>
                                                    </div>
                                                </Card>
                                            </div>


                                        </div>
                                   
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 hotel_part3">
                            <div className="row">
                                <div className="col-md-4 col-4 px-0">
                                    <Link to="/hotelPre_Booking">
                                        <img src={architecture} alt="hotel-pic" height="200px" width="200px"></img>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-4">
                                    <Card style={{ width: 280, height: 200 }}>
                                        <h5 className="text-left">Hotel Name</h5>
                                        <div className="text-left"><button className="button4">Hotel</button></div>
                                        <div className="rate_part2"><Rate /></div>
                                        <div className="text-left  mt-3"><img src={placeName} width="20px" height="20px" alt="" className="img-fluid"></img>PlaceName</div>
                                        <div className="text-left"><img src={travelLogo} width="50px" height="30px" alt="" className="img-fluid"></img>Convinient8.0</div>
                                    </Card>
                                </div>
                                <div className="col-md-4">
                                    <Card style={{ width: 160, height: 200 }}>
                                        <h5 className="text-right">Save 10%</h5>
                                        <p className="text-right">Pay upon check-in available</p>
                                        <p className="text-right font-weight-bold">Amount</p>
                                        <div className="text-right">
                                            <Dropdown overlay={menu}>
                                                <a className="ant-dropdown-link" href onClick={e => e.preventDefault()}>
                                                    Including of Taxes!<DownOutlined />
                                                </a>
                                            </Dropdown>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}



