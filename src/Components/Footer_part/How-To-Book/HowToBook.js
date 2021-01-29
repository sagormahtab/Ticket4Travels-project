import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HowToSignUp from './How-to-SignUp/HowToSignUp';
import HowToBookBus from './How-to-Book-BusTicket/HowToBookBus';
import HowToBookLaunch from './How-to-Book-LaunchTicket/HowToBookLaunch';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
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
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


const HowToBook = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className={`${classes.root} container`}>


                        <Tabs
                            value={value}
                            style={{ backgroundColor: "#30dd89" }}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="scrollable force tabs example"
                        >
                            <Tab style={{ color: "white" }} label="How to sign up"  {...a11yProps(0)} />
                            <Tab style={{ color: "white" }} label="How to book a bus-ticket"  {...a11yProps(1)} />
                            <Tab style={{ color: "white" }} label="How to book a launch-ticket"  {...a11yProps(2)} />
                        </Tabs>

                        <TabPanel value={value} index={0}>
                            <HowToSignUp />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <HowToBookBus />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <HowToBookLaunch />
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToBook
