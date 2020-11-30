import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card } from 'antd';
import { Checkbox } from 'antd';
import TrainLogo from "../TrainCard1/images/train.png"
// import Timmer from "../TrainCard1/images/timer.png"
import "../TrainCard1/trainCard.css"
import TrainDetailsPages from "../TrainCard1/TrainDetailsPage"
import TrainPDetailsPage from './TrainPDetailsPage';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.light,
        marginBottom:240
    },
    trainTab1: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "50%",
            width: "50%"
        }
    },
    trainTab2: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "50%",
            width: "50%"
        }
    },

}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }


    return (
        <div className={classes.root}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-12">
                        <div><hr></hr></div>

                        <div>

                            <ul class="nav ">
                                <li class="nav-item">
                                    <a class="nav-link active" href="train_search">Filter:</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="train_search">Class</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="train_search">Station</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="train_search">Train</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="train_search">Time</a>
                                </li>


                            </ul>
                        </div>
                        <div><hr></hr></div>
                    </div>

                    <div>
                        <Card  className="TrainCard1_shadow ">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-4 p-0">

                                    <Checkbox onChange={onChange} className="px-0">Air Condition class</Checkbox>

                                </div>
                                <div className="col-sm-3 col-md-3 col-4 p-0  ">

                                    <Checkbox onChange={onChange} className="p-0 text-left">First class</Checkbox>
                                </div>
                                <div className="col-sm-3 col-md-3 col-4 p-0"><Checkbox onChange={onChange} className="p-0">Second class</Checkbox> <hr></hr></div>

                                <div className="col-sm-3 col-md-3 col-12 mt-0">
                                    <p><Checkbox onChange={onChange}>Suvhon Chair</Checkbox></p>
                                    <p><Checkbox onChange={onChange}>Suvhon</Checkbox></p>
                                    <p><Checkbox onChange={onChange}>Suvlob Sub-class</Checkbox></p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="row mt-3">
                        <div className="col-sm-12 col-md-12 col-12">

                            <Card  className="TrainCard2_shadow">
                                <p className="text-left fonnt_div">Train Time</p>
                                <p className="text-left">Class Name</p>

                                <div className="row">
                                    <div className="col-sm-3 col-md-3 col-3 fonnt_div">Time</div>
                                    <div className="col-sm-3 col-md-3 col-3 text-left"><img src={TrainLogo} width="20px" height="20px" alt="" className="img-fluid"></img></div>
                                    <div className="col-sm-3 col-md-3 col-3 text-left fonnt_div">Time</div>
                                    <div className="col-sm-3 col-md-3 col-3 text-left fonnt_div">Duration</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 col-md-3 col-3">place Name</div>
                                    <div className="col-sm-3 col-md-3 col-3"></div>
                                    <div className="col-sm-3 col-md-3 col-3 text-left">Your place</div>
                                    <div className="col-sm-3 col-md-3 col-3 text-left">Direction</div>
                                </div>
                                <span className="color_chng">Amount</span>

                               
                                    <Tabs value={value} onChange={handleChange}>
                                        <Tab  className={`${classes.trainTab1} trainTab1`}  label="Train Details" {...a11yProps(0)} />
                                        <Tab  className={`${classes.trainTab2} trainTab2`}  label="Price Details" {...a11yProps(1)} />
                                        
                                    </Tabs>
                                    <TabPanel value={value} index={0}>
                                        <TrainDetailsPages/>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <TrainPDetailsPage />
                                    </TabPanel>

        
                            </Card>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
