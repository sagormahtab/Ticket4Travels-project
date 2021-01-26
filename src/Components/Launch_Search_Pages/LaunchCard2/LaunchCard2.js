import React from 'react'
import "../LaunchCard2/LaunchCard2.css"
import { Card, CardContent, Button, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));




function LaunchCard2() {

    const [age, setAge] = React.useState('');
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange2 = (event) => {
        setName(event.target.value);
    };

    const classes = useStyles()

    return (
        <div>
            <div className="container mt-2">
                <div>
                    <span className="text-left mb-0"><h1 className="header_colorChang mb-0">Cabin-wise Seat Availavility</h1></span>
                    <h5 className="text-left mt-0">Maximum 2 cabins can be bookded per ticket</h5>
                </div>


                <div className="row mt-2">
                    <div className="col-sm-6 sol-md-6 col-12">
                        <Card className="LaunchCard2_shadow">
                            <CardContent>
                                <div className="row">
                                    <hr></hr>
                                    <div className=" col-sm-3 col-md-3 col-3">Cabin class</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Seats</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Fear</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Availavility</div>
                                </div>
                                <hr></hr>

                                <div className="row">
                                    <div className=" col-sm-3 col-md-3 col-3">Deck</div>
                                    <div className=" col-sm-3 col-md-3 col-3">1</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Tk.200</div>
                                    <div className=" col-sm-3 col-md-3 col-3">35</div>
                                </div>

                                <div className="row">
                                    <div className=" col-sm-3 col-md-3 col-3">Signal AC</div>
                                    <div className=" col-sm-3 col-md-3 col-3">1</div>
                                    <div className=" col-sm-3 col-md-3 col-3">TK.900</div>
                                    <div className=" col-sm-3 col-md-3 col-3">17</div>
                                </div>

                                <div className="row">
                                    <div className=" col-sm-3 col-md-3 col-3">Single Non AC</div>
                                    <div className=" col-sm-3 col-md-3 col-3">1</div>
                                    <div className=" col-sm-3 col-md-3 col-3">TK.800</div>
                                    <div className=" col-sm-3 col-md-3 col-3">30</div>
                                </div>

                                <div className="row">
                                    <div className=" col-sm-3 col-md-3 col-3">Double AC</div>
                                    <div className=" col-sm-3 col-md-3 col-3">2</div>
                                    <div className=" col-sm-3 col-md-3 col-3">TK.1600</div>
                                    <div className=" col-sm-3 col-md-3 col-3">5</div>
                                </div>

                                <div className="row">
                                    <div className=" col-sm-3 col-md-3 col-3">Cabin class</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Seats</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Fear</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Availavility</div>
                                </div>

                                <div className="row">
                                    <div className=" col-sm-3 col-md-3 col-3">Cabin class</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Seats</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Fear</div>
                                    <div className=" col-sm-3 col-md-3 col-3">Availavility</div>
                                </div>

                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-sm-6 col-md-6 col-12 text-left">
                        <Card className="LaunchCard3_shadow">
                            <CardContent>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-6">

                                        <p>Cabin Class</p>

                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-outlined-label">Class</InputLabel>
                                            <Select

                                                value={name}
                                                onChange={handleChange2}
                                                label="Age"
                                            >
                                                <MenuItem value="one">One</MenuItem>
                                                <MenuItem value="Two">Two</MenuItem>
                                                <MenuItem value="Three">Three</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </div>
                                    <div className="col-sm-6 col-md-6 col-6">

                                        <p>Number of Cabins/Seats</p>

                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-outlined-label">Cabins</InputLabel>
                                            <Select

                                                value={age}
                                                onChange={handleChange}
                                                label="Age"
                                            >
                                                <MenuItem value={1}>One</MenuItem>
                                                <MenuItem value={2}>Two</MenuItem>
                                                <MenuItem value={3}>Three</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-sm-12 col-md-12 col-12">

                                        <p>Choose Boarding points</p>

                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-outlined-label">points</InputLabel>
                                            <Select

                                                value={age}
                                                onChange={handleChange}
                                                label="Age"
                                            >
                                                <MenuItem value={1}>One</MenuItem>
                                                <MenuItem value={2}>Two</MenuItem>
                                                <MenuItem value={3}>Three</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-sm-6 col-md-6 col-6">

                                        {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} placeholder="0 taka">
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem fullwidth onClick={handleClose}>1</MenuItem>
                                            <MenuItem onClick={handleClose}>2</MenuItem>
                                            <MenuItem onClick={handleClose}>3</MenuItem>
                                        </Menu> */}

                                    </div>
                                    <div className="col-sm-6 col-md-6 col-6"><div className="">
                                        <Button variant="contained" color="primary">Continue</Button>
                                    </div></div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default LaunchCard2
