import React from 'react'
import { Card, CardContent, Button, Menu, MenuItem } from '@material-ui/core';
import "../LaunchCard1/LaunchCard1.css"
// import yatch1 from "../LaunchCard1/images/yatch.png"
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import LaunchCard2 from '../LaunchCard2/LaunchCard2';

import { Link } from "react-router-dom"





const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        width: 200,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };




    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };





    return (
        <div>
            <div className="container mt-3 mb-5">
                <hr></hr>
                <div className="row ">
                    <div className="col-md-2 col-2"><h5>Launch/Ship: </h5></div>
                    <div className="col-md-2 col-2 ml-5">

                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Dep Time
                    </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem fullwidth onClick={handleClose}>menu1</MenuItem>
                            <MenuItem onClick={handleClose}>menu2</MenuItem>
                            <MenuItem onClick={handleClose}>menu3</MenuItem>
                        </Menu>


                    </div>
                    <div className="col-md-2 col-2 ml-5">

                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Price Range
                    </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem fullwidth onClick={handleClose}>menu1</MenuItem>
                            <MenuItem onClick={handleClose}>menu2</MenuItem>
                            <MenuItem onClick={handleClose}>menu3</MenuItem>
                        </Menu>


                    </div>

                </div>
                <hr></hr>


                <div className="row mt-5">
                    <Card className="LaunchCard1_shadow">
                        <CardContent>
                            <p className="text-left mb-0">Surovi 8</p>


                            <div className="row mt-5">
                                <div className="col-md-3 col-3 t">8.00PM</div>
                                <div className="col-md-3 col-3">4.30AM</div>
                                <div className="col-md-3 col-3">4 hours</div>
                                <div className="col-md-3 col-3">500.00 - 4000.00</div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-3 col-3 t">SadarGhat</div>
                                <div className="col-md-3 col-3">Name</div>
                                <div className="col-md-3 col-3">Direct</div>
                                <div className="col-md-3 col-3">500.00 - 4000.00</div>
                            </div>



                            <div className="row mt-5">
                                <div className="col-md-3 ">
                                    <Link to="/launchPre_Booking">
                                        <Button variant="contained" color="primary" type="submit">Select Cabins/Seats</Button> </Link></div>


                            </div>
                            <div className="mt-3">
                                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary >
                                        <Typography>Launch Details</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <LaunchCard2 />
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    )
}


