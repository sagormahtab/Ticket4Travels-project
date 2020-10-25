import React from 'react'
import { Card } from 'antd';
import "../FilterResult-parts/filterResults.css"
import { Checkbox } from 'antd';
import { Rate } from 'antd';
import architecture from "../FilterResult-parts/images/architecture-1048092_1920.jpg"
import travelLogo from "../FilterResult-parts/images/Final Logo.png"
import placeName from "../FilterResult-parts/images/placeholder.png"
import { Menu, Dropdown } from 'antd';
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
});

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
        </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
);

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

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
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Card title="Default size card" extra={<a href="#">Reset filter</a>} style={{ width: 300, height: 200 }}>
                                <h3 className="text-left">Booking policy</h3>
                                <div className="text-left">
                                    <Checkbox onChange={onChange}>Free cencelation</Checkbox>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6 hotel_details">
                            <div className="row">

                                <div className="col-md-4">
                                    <Link to="/hotelPre_Booking">
                                        <img src={architecture} alt="hotel-pic" height="200px" width="200px"></img>
                                    </Link>
                                </div>

                                <div className="col-md-4">
                                    <Card style={{ width: 270, height: 200 }}>
                                        <h5 className="text-left">Hotel Name</h5>
                                        <div className="text-left"><button className="button3">Hotel</button></div>
                                        <div className="rate_part"><Rate /></div>
                                        <div className="text-left logo1 mt-3"><img src={placeName} width="20px" height="20px"></img>PlaceName</div>
                                        <div className="text-left travelLg"><img src={travelLogo} width="50px" height="30px"></img>Convinient8.0</div>
                                    </Card>
                                </div>
                                <div className="col-md-4">
                                    <Card style={{ width: 160, height: 200 }}>
                                        <h5 className="text-right">Save 10%</h5>
                                        <p className="text-right">Pay upon check-in available</p>
                                        <p className="text-right font-weight-bold">Amount</p>
                                        <div className="text-right">
                                            <Dropdown overlay={menu}>
                                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                    Including of Taxes! <DownOutlined />
                                                </a>
                                            </Dropdown>
                                        </div>
                                    </Card>
                                </div>


                            </div>
                        </div>
                    </div>



                    <Card style={{ width: 300 }}>
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

                    </Card>
                    <Card style={{ width: 300 }}>
                        <h3 className="text-left">Start rating</h3>
                        <Checkbox onChange={onChange}><Rate /></Checkbox>
                        <Checkbox onChange={onChange}><Rate /></Checkbox>
                        <Checkbox onChange={onChange}><Rate /></Checkbox>
                    </Card>
                    <div className="">
                        <div className="">
                            <div className="row">
                                <div className="col-md-6">
                                    <Card style={{ width: 300 }} className="mt-5">
                                        <h3 className="text-left">Facilities</h3>
                                        <div className="text-left">
                                            <Checkbox onChange={onChange}>Wifi</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>AC</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>Non AC</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>Parking</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>Swimming pool</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>Resturent</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>24-hour Front desk</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>Parking</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>Airport transfer</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>Fitness center</Checkbox>
                                            <br></br>
                                            <Checkbox onChange={onChange}>Wheelchain acess</Checkbox>
                                        </div>
                                    </Card>
                                </div>

                                <div className="col-md-6 hotel_part2">
                                    <div className="">
                                        <div className="row">

                                            <div className="col-md-4">
                                                <Link to="/hotelPre_Booking">
                                                    <img src={architecture} alt="hotel-pic" height="200px" width="200px"></img>
                                                </Link>
                                            </div>

                                            <div className="col-md-4 ">
                                                <Card style={{ width: 280, height: 200 }}>
                                                    <h5 className="text-left">Hotel Name</h5>
                                                    <div className="text-left"><button className="button4">Hotel</button></div>
                                                    <div className="rate_part2"><Rate /></div>
                                                    <div className="text-left  mt-3"><img src={placeName} width="20px" height="20px"></img>PlaceName</div>
                                                    <div className="text-left"><img src={travelLogo} width="50px" height="30px"></img>Convinient8.0</div>
                                                </Card>
                                            </div>
                                            <div className="col-md-4">
                                                <Card style={{ width: 160, height: 200 }}>
                                                    <h5 className="text-right">Save 10%</h5>
                                                    <p className="text-right">Pay upon check-in available</p>
                                                    <p className="text-right font-weight-bold">Amount</p>
                                                    <div className="text-right">
                                                        <Dropdown overlay={menu}>
                                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                                Including of Taxes! <DownOutlined />
                                                            </a>
                                                        </Dropdown>
                                                    </div>
                                                </Card>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 hotel_part3">
                            <div className="row">
                                <div className="col-md-4">
                                    <Link to="/hotelPre_Booking">
                                        <img src={architecture} alt="hotel-pic" height="200px" width="200px"></img>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Card style={{ width: 280, height: 200 }}>
                                        <h5 className="text-left">Hotel Name</h5>
                                        <div className="text-left"><button className="button4">Hotel</button></div>
                                        <div className="rate_part2"><Rate /></div>
                                        <div className="text-left  mt-3"><img src={placeName} width="20px" height="20px"></img>PlaceName</div>
                                        <div className="text-left"><img src={travelLogo} width="50px" height="30px"></img>Convinient8.0</div>
                                    </Card>
                                </div>
                                <div className="col-md-4">
                                    <Card style={{ width: 160, height: 200 }}>
                                        <h5 className="text-right">Save 10%</h5>
                                        <p className="text-right">Pay upon check-in available</p>
                                        <p className="text-right font-weight-bold">Amount</p>
                                        <div className="text-right">
                                            <Dropdown overlay={menu}>
                                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                    Including of Taxes!<DownOutlined />
                                                </a>
                                            </Dropdown>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



