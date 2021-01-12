import React from 'react'
import { Card, CardContent, Typography, CardHeader, Checkbox, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import "../Sort-Results-part/sortResults.css"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));




const cityList = [
    { title: 'Dhaka' },
    { title: 'narayangonj' },
];




function SortResults() {
    const classes = useStyles();
    const [price, setPrice] = React.useState('');

    const handleChange = (event) => {
        setPrice(event.target.value);
    };
    return (
        <div>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Card style={{ width: "300px" }}>
                                <CardHeader title="Sort In result" subheader="Sort your search result by:-">
                                </CardHeader>
                                <hr></hr>
                                <CardContent>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />Depart Time
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />Lowest Time
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-lg-6 col-md-6">
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />Arrival Time
                                    </div>
                                        <div className="col-lg-6 col-md-6">
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />Duration
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-md-3 col-12 form1">
                            <Autocomplete
                                id="combo-box-demo"
                                freeSolo
                                options={cityList}
                                getOptionLabel={(option) => option.title}
                                style={{ width: '300px' }}
                                renderInput={(params) => <TextField required {...params} label="City hotel place to go" variant="outlined" />}
                            />
                        </div>
                        <div className="col-md-3 col-6 form2">

                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Total Price</InputLabel>
                                <Select
                                    value={price}
                                    onChange={handleChange}
                                    label="Total price"
                                >
                                    <MenuItem value="Per Room,Per Night">Per Room,Per Night</MenuItem>
                                    <MenuItem value="Total Price">Total Price</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortResults
