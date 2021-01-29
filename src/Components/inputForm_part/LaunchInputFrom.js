import { TextField, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useForm } from "react-hook-form";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    searchInputContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    searchInput: {
        flexBasis: "49%",
    },
    dateInputWrapper: {
        marginTop: "2rem",
        display: "flex",
        justifyContent: "space-between",
    },
    firstDatePicker: {
        marginRight: "2rem",
    },
    searchBtn: {
        background: "#30dd89",
        height: "50px",
        marginTop: "15px",
        "&:hover": {
            background: "#00b894",
        },
        color: "white",
        flexBasis: "25%",
    },
}));

const LaunchInputFrom = () => {
    const classes = useStyles()


    let history = useHistory();
    const redirect = () => {
        history.push('/launch_search');
    }

    const cityList = [
        { title: 'Dhaka' }
    ];
    const cityList2 = [
        { title: 'Cox Bazar' }
    ];

    const { handleSubmit } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
        redirect();
    }


    const [selectedDate, setSelectedDate,] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">

                    {/* From - To Form start */}
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-12 mt-3">
                            <Autocomplete id="combo-box-demo"
                                freeSolo
                                options={cityList}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => <TextField required {...params} label="From" variant="outlined" fullWidth />}
                            />
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-12 mt-3">
                            <Autocomplete id="combo-box-demo"
                                freeSolo
                                options={cityList2}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => <TextField required {...params} label="To" variant="outlined" fullWidth />}
                            />
                        </div>
                    </div>
                    {/* From - To Form End */}


                    <div className="row mt-2">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-2">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    inputVariant="outlined"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date of journey"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>




                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-2">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    inputVariant="outlined"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date of return (optional)"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>



                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-2">
                            <Button
                                className={classes.searchBtn}
                                variant="contained"
                                type="submit"
                                fullWidth
                                startIcon={<Search />}
                                style={{ outline: "0" }}
                            >
                                Search Launch
                        </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default LaunchInputFrom
