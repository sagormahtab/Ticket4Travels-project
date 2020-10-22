import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyCards from "../userProfile-page/MyCards-page/MyCards"
import UserBooking from './User-booking-page/UserBooking';
import MyPurchase from './My-purchase-page/MyPurchase';
import MyAccount_page from './My-Account-page/MyAccount_page';
import { VerticalAlignCenterOutlined } from '@material-ui/icons';



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
        marginBottom:600
       
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width:400,
        backgroundColor:"#00baff",
        color:"white",
        alignItems:"left",
        
        
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
           
                <Tab  label="My Cards"  {...a11yProps(0)} />
                <Tab label="My booking" {...a11yProps(1)} />
                <Tab label="Purchase List" {...a11yProps(2)} />
              
                <Tab label="My Acoount" {...a11yProps(3)} />
                <Tab label="Log out" {...a11yProps(4)} />
                
            </Tabs>
            
            <TabPanel value={value} index={0}>
                <MyCards/>
      </TabPanel>
            <TabPanel value={value} index={1}>
                <UserBooking />
      </TabPanel>
            <TabPanel value={value} index={2}>
                <MyPurchase />
      </TabPanel>
            <TabPanel value={value} index={3}>
              <MyAccount_page/>
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
