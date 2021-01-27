import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyCards from "./MyCards-page/MyCards"
import UserBooking from './User-booking-page/UserBooking';
import MyPurchase from './My-purchase-page/MyPurchase';
import MyAccountPage from './My-Account-page/MyAccountPage';
// import { VerticalAlignCenterOutlined } from '@material-ui/icons';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 450,
        marginBottom: 600

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: 140,
        backgroundColor: "#00baff",
        color: "white",
        alignItems: "left",
    },

    tab1: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            width: "100%"
        }
    },
    tab2: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            width: "100%"
        }
    },
    tab3: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            width: "100%"
        }
    },
    tab4: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            width: "100%"
        }
    },
    tab5: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            width: "100%"
        }
    },
    tabPanel1: {
        [theme.breakpoints.down("sm")]: {
            width: "10px"
        }
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className={`${classes.root} container`}>

            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >

                <Tab className={`${classes.tab1} tab1`} label="My Cards"  {...a11yProps(0)} />
                <Tab className={`${classes.tab2} tab2`} label="My booking" {...a11yProps(1)} />
                <Tab className={`${classes.tab3} tab3`} label="Purchase List" {...a11yProps(2)} />

                <Tab className={`${classes.tab4} tab4`} label="My Acoount" {...a11yProps(3)} />
                <Tab className={`${classes.tab5} tab5`} label="Log out" {...a11yProps(4)} />

            </Tabs>

            <TabPanel value={value} index={0}>
                <MyCards />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UserBooking />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MyPurchase />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MyAccountPage />
            </TabPanel>
            <TabPanel value={value} index={4}>
                "log out page"
      </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
      </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
      </TabPanel>
        </div>
    );
}
