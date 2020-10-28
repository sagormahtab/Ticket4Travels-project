import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';


const FlightInputForm =() => {

    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);
    const [babies, setBabies] = useState(0);

    const cityList = [
        { title: 'Dhaka' },
        { title: 'Narayangonj' },
        { title: 'Chittagong' },

    ];

    const { register, handleSubmit } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
        // redirect();
    };
    return (
        <div className="container">
           
                <div className="row">
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* Where we start our journey FROM START */}
                    <div className="col-lg-4 col-md-4">
                        <h6 className="text-uppercase font-weight-bold">From</h6>
                        <Autocomplete
                            // id="combo-box-demo"
                            
                            options={cityList}
                            getOptionLabel={(option) => option.title}
                            style={{ width: '100%' }}
                            renderInput={(params) => <TextField required {...params} label="Where you want to Start your Journey" variant="outlined" />}
                        />
                    </div>
                    {/* Where we start our journey FROM END */}

                    {/* Where We want ot go TO START */}
                    <div className="col-lg-4 col-md-4">
                        <h6 className="text-uppercase font-weight-bold">To</h6>
                        <Autocomplete
                            // id="combo-box-demo"
                            // freeSolo
                            options={cityList}
                            getOptionLabel={(option) => option.title}
                            style={{ width: '100%' }}
                            renderInput={(params) => <TextField required {...params} label="Where you want to Go" variant="outlined" />}
                        />
                    </div>
                    {/* Where We want ot go TO END */}

                    {/* Number of pasenger(adult,child etc) start */}
                    <div className="col-lg-4 col-md-4">
                        <ExpansionPanel defaultExpanded="true" style={{ boxShadow: '2px 2px 7px 0px #c7c7c7' }}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div>
                                    <small className="text-muted">Guests</small>
                                    <p>{adults} adults, {childs} child</p>
                                </div>

                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="childBabyAdult">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="text-uppercase">adults</p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="def-number-input number-input">
                                                <button onClick={() => adults > 0 && setAdults(adults - 1)} type="button" className="minus"></button>
                                                <input className="quantity" name="quantity" value={adults} type="number" />
                                                <button onClick={() => setAdults(adults + 1)} type="button" className="plus"></button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="text-uppercase">childs</p>
                                            <small className="text-muted">Age 2-12</small>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="def-number-input number-input">
                                                <button onClick={() => childs > 0 && setChilds(childs - 1)} type="button" className="minus"></button>
                                                <input className="quantity" name="quantity" value={childs} type="number" />
                                                <button onClick={() => setChilds(childs + 1)} type="button" className="plus"></button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="text-uppercase">babies</p>
                                            <small className="text-muted">Younger than 2</small>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="def-number-input number-input">
                                                <button onClick={() => babies > 0 && setBabies(babies - 1)} type="button" className="minus"></button>
                                                <input className="quantity" name="quantity" value={babies} type="number" />
                                                <button onClick={() => setBabies(babies + 1)} type="button" className="plus"></button>
                                            </div>
                                        </div>

                                    </div>
                                    <Button outline color="success" className="rounded-pill float-right">Apply</Button>
                                   
                                   
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                    {/* Number of pasenger(adult,child etc) End */}

                  </form>
                </div>
            
        </div>
    )
}

export default FlightInputForm
