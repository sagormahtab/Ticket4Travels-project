import React from 'react'
import { Card } from 'antd';
import Airoplan from "../card-part/images/plane.png"
import bag from "../card-part/images/work.png"
import "../card-part/allCard.css"
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlightDetails_part from "../card-part/FlightDetails-part/FlightDetails_part"
import FlightFare_info from "../card-part/Flight-FareInfo-part/FlightFare_info"
import {Link} from "react-router-dom"





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
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>

            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <Card style={{ width: 1100 }} className="AllCard-shadow-div">
                            <p className="text-left"><span className="logo_cls">Logo</span> | Flight Name</p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 text-right ">Flight Time</div>

                                    <div className="col-md-4 text-center">Land time</div>
                                    <div className="col-md-4 text-left">Duration</div>
                                </div>
                                <div className="AllCard-imageDiv"><img src={Airoplan} width="40px" height="20px"></img></div>
                            </div>

                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-md-4 text-right">Name</div>
                                    <div className="col-md-4 text-center">Name</div>
                                    <div className="col-md-4 text-left">Direct</div>
                                    <div className="bag_part"><img src={bag} width="20px" height="20px"></img></div>
                                    
                                     <Link to="/flightPre_Booking"><div className="meterialButton"><Button variant="contained" color="primary">
                                        Choose
                                    </Button></div></Link>
                                    

                                </div>
                            </div>
                            <div className="mt-5">
                                <div className={classes.root}>
                                  
                                        <Tabs value={value} onChange={handleChange}>
                                            <Tab label="Flights Details" {...a11yProps(0)} />
                                            <Tab label="Fare Info" {...a11yProps(1)} />
                                        </Tabs>
                                   
                                    <TabPanel value={value} index={0}>
                                        <FlightDetails_part/>
                                   </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <FlightFare_info/>
                                   </TabPanel>
                                    
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )

}
