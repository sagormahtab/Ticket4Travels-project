import React from 'react'
import { Card, CardContent,  CardHeader, Checkbox, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
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
            <div className=" mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Card >
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
                        <div className="col-md-6 col-6 form1">
                            <Autocomplete
                                id="combo-box-demo"
                                freeSolo
                                options={cityList}
                                getOptionLabel={(option) => option.title}
                                fullWidth
                                renderInput={(params) => <TextField required {...params} label="City hotel place to go" variant="outlined" />}
                            />
                        </div>
                        <div className="col-md-2 col-6 formControl">

                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel >Total Price</InputLabel>
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
