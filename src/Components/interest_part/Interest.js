import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TopFlightR from "./Top_flight-route/TopFlightR"
import TopHotelR from "./top-hotel/TopHotelR"
import TopDesR from "./top-destination/TopDesR"
import TopConR from "./For-connectivity/TopConR"
import TopThings from "./Top-things-todo/TopThings"
import { Grid } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  return (

    <div className={`${classes.root} container`}>
      <h1 className="text-center mt-5" style={{ fontSize: "32px" }}>What interests you?</h1>
      <Grid container item sm={5} md={12} spacing={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example">
          <Tab label="Top Flights Routes" {...a11yProps(0)} />
          <Tab label="Top Hotel Destinations" {...a11yProps(1)} />
          <Tab label="Top Packages Destination" {...a11yProps(2)} />
          <Tab label="For Your Connectivity" {...a11yProps(3)} />
          <Tab label="Top Things to Do" {...a11yProps(4)} />
        </Tabs>
        <hr></hr>


      </Grid>
      <TabPanel value={value} index={0}>
        <TopFlightR />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TopHotelR />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TopDesR />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TopConR />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TopThings />
      </TabPanel>



    </div>
  );
}
