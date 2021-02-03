import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DirectionsBus, Hotel, DirectionsBoat } from "@material-ui/icons";
import BusInputForm from './BusInputForm';
import HotelInputForm from './Hotel-InputFrom/HotelInputForm';
import LaunchInputFrom from './LaunchInputFrom';
import { Paper } from '@material-ui/core';


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
      [theme.breakpoints.up('lg')]: {
        display: "none"
      },
    },
  }));
  

const MobileInputForm = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className={`${classes.root} container`}>
        <Paper>
            <Box>
            <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab  label={
                <div>
                  <DirectionsBus style={{ verticalAlign: "middle" }} /> Bus
                </div>
              } {...a11yProps(0)} />
          <Tab label={
                <div>
                  <Hotel style={{ verticalAlign: "middle" }} /> Hotel
                </div>
              }  {...a11yProps(1)} />
          <Tab label={
                <div>
                  <DirectionsBoat style={{ verticalAlign: "middle" }} /> Launch
                </div>
              }  {...a11yProps(2)} />
          <Tab label="Flight"  {...a11yProps(3)} />
          <Tab label="Train"  {...a11yProps(4)} />
    
        </Tabs>
      <TabPanel value={value} index={0}>
       <BusInputForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HotelInputForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LaunchInputFrom />
      </TabPanel>
      <TabPanel value={value} index={3}>
      Coming soon
      </TabPanel>
      <TabPanel value={value} index={4}>
      Coming soon
      </TabPanel>
            </Box>
        </Paper>
        </div>
    )
}

export default MobileInputForm
