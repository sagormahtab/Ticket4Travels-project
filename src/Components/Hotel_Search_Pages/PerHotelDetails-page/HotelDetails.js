import React, { useState } from 'react'
import { Card, TextField, CardContent, Button, CardHeader } from '@material-ui/core';
import "./hotelDetails.css"
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'




const HotelDetails = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [persons, setPersons] = useState(1);
    const [room, setRoom] = useState(1);



    return (
        <div className="container">
            <Card>
                <CardContent>
                    <div className="row">
                        <div className="col-md-3">
                            <TextField id="outlined-basic" label="Where Are You Going?" variant="outlined" fullWidth />
                        </div>
                        <div className="col-md-2">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    className="ml-2"
                                    variant="outline"
                                    format="MM/dd/yyyy"
                                    label="Check-In"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="col-md-2">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    className="ml-2"
                                    variant="outline"
                                    format="MM/dd/yyyy"
                                    label="Check-Out"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="col-md-3" >
                            <ExpansionPanel >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <div> <p>{persons} Persons in {room} Room</p></div>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                    <div className="expandPanel">
                                        <div className="row">
                                            <h6>Room 1:</h6>
                                            <div className="col-md-6">
                                                <p className="text-uppercase">adults</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="def-number-input number-input">
                                                    <button onClick={() => persons > 0 && setPersons(persons - 1)} type="button" className="minus"></button>
                                                    <input className="quantity" name="quantity" value={persons} type="number" />
                                                    <button onClick={() => setPersons(persons + 1)} type="button" className="plus"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                        </div>
                        <div className="col-md-2 ">
                            <Button variant="contained" color="primary" fullWidth>Search</Button>
                        </div>
                    </div>
                    <hr></hr>


                    <div className="row mt-3">
                        <div className="col-md-6">
                            Images
                        </div>
                        <div className="col-md-6">
                            <CardHeader title="The Raintree Dhaka" />
                            <div className="ml-3">
                                <FontAwesomeIcon icon={faStar} size="lg" color="yellow" />
                                <FontAwesomeIcon icon={faStar} size="lg" color="yellow" />
                                <FontAwesomeIcon icon={faStar} size="lg" color="yellow" />
                                <FontAwesomeIcon icon={faStar} size="lg" color="yellow" />
                            </div>

                            <div className="ml-3">
                                <FontAwesomeIcon icon={faMapMarkedAlt} size="md" /><span className="ml-2">House no- 49, Road no- 27, Block no- k, Banani, Dhaka-1213, Bangladesh</span>
                            </div>

                            <Button variant="outlined">WONDERFUL LOCATION 4.5/5</Button>
                            <hr></hr>

                            <div className="row">
                                <div className="col-md-8">
                                    <div className="col-md-6">
                                        <div className="col-md-12">
                                            <div className="col-md-12">Check-In</div>
                                            <div className="col-md-12">16</div>
                                            <div className="col-md-12">16 | jan 2021</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="col-md-12">
                                            <div className="col-md-12">Check-Out</div>
                                            <div className="col-md-12">17</div>
                                            <div className="col-md-12">17 | jan 2021</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-4">
                        <div className="col-md-12">
                            <p>Featuring a Rooftop Infinity swimming pool and fitness centre, The Raintree Dhaka is located in Dhaka, 300 m from AIUB. Guests can enjoy the on-site multi-cuisine restaurant. Each room has a flat-screen TV with satellite channels. Certain rooms include a seating area to relax in after a busy day. You will find a kettle in the room. Rooms include a private bathroom equipped with a shower. Extras include bathrobes, slippers and free toiletries. You will find a 24-hour front desk at the property. Free airport shuttle can be arranged. Southeast University is 400 m from The Raintree Dhaka, while Embassy of Spain is 400 m away. Shah Jalal International Airport is 5 km from the property. This property also has one of the best-rated locations in Dhaka! Guests are happier about it compared to other properties in the area. This property is also rated for the best value in Dhaka! Guests are getting more for their money when compared to other properties in this city. </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default HotelDetails
