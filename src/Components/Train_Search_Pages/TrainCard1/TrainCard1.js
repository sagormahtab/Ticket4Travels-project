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
import Timmer from "../TrainCard1/images/timer.png"
import "../TrainCard1/trainCard.css"
import TrainDetails_pages from "../TrainCard1/TrainDetails_page"
import TrainPDetails_page from './TrainPDetails_page';

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
                    <div className="col-sm-12 col-md-12 col-md-10">
                        <div><hr></hr></div>

                        <div>

                            <ul class="nav ">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Filter:</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Class</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Station</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Train</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Time</a>
                                </li>


                            </ul>
                        </div>
                        <div><hr></hr></div>
                    </div>

                    <div>
                        <Card style={{ width: 1110 }} className="TrainCard1_shadow ">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 ">

                                    <Checkbox onChange={onChange} >Air Condition class</Checkbox>

                                </div>
                                <div className="col-sm-3 col-md-3">

                                    <Checkbox onChange={onChange}>First class</Checkbox>
                                </div>
                                <div className="col-sm-3 col-md-3"><Checkbox onChange={onChange}>Second class</Checkbox> <hr></hr><span><hr width="10px"></hr></span></div>

                                <div className="col-sm-3 col-md-3">
                                    <p><Checkbox onChange={onChange}>Suvhon Chair</Checkbox></p>
                                    <p><Checkbox onChange={onChange}>Suvhon</Checkbox></p>
                                    <p><Checkbox onChange={onChange}>Suvlob Sub-class</Checkbox></p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="row mt-3">
                        <div className="col-sm-12 col-md-12">

                            <Card style={{ width: 1110, height: 500 }} className="TrainCard1_shadow">
                                <p className="text-left fonnt_div">Train Time</p>
                                <p className="text-left">Class Name</p>

                                <div className="row">
                                    <div className="col-sm-3 col-md-3 fonnt_div">Time</div>
                                    <div className="col-sm-3 col-md-3 text-left"><img src={TrainLogo} width="20px" height="20px"></img></div>
                                    <div className="col-sm-3 col-md-3 text-left fonnt_div">Time</div>
                                    <div className="col-sm-3 col-md-3 text-left fonnt_div">Duration</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 col-md-3">place Name</div>
                                    <div className="col-sm-3 col-md-3"></div>
                                    <div className="col-sm-3 col-md-3 text-left">Your place</div>
                                    <div className="col-sm-3 col-md-3 text-left">Direction</div>
                                </div>
                                <span className="color_chng">Amount</span>

                               
                                    <Tabs value={value} onChange={handleChange}>
                                        <Tab label="Train Details" {...a11yProps(0)} />
                                        <Tab label="Price Details" {...a11yProps(1)} />
                                        
                                    </Tabs>
                                    <TabPanel value={value} index={0}>
                                        <TrainDetails_pages/>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <TrainPDetails_page />
                                    </TabPanel>

        
                            </Card>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
