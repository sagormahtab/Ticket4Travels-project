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
    marginTop: 30
  },
  interestTab1: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20%",
      width: "20%"
    },
  },
  interestTab2: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20%",
      width: "20%"
    },
  },
  interestTab3: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20%",
      width: "20%"
    },
  },
  interestTab4: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20%",
      width: "20%"
    },
  },
  interestTab5: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20%",
      width: "20%"
    },
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={`${classes.root} container`}>
      <h1 className="text-center mt-5">What interests you?</h1>
      <Grid container item sm={5} md={12} spacing={3}>
        <Tabs value={value} onChange={handleChange}>
          <Tab className={`${classes.interestTab1} interestTab1`} label="Top Flights Routes" {...a11yProps(0)} />
          <Tab className={`${classes.interestTab2} interestTab2`} label="Top Hotel Destinations" {...a11yProps(1)} />
          <Tab className={`${classes.interestTab3} interestTab3`} label="Top Packages Destination" {...a11yProps(2)} />
          <Tab className={`${classes.interestTab4} interestTab4`} label="For Your Connectivity" {...a11yProps(3)} />
          <Tab className={`${classes.interestTab5} interestTab5`} label="Top Things to Do" {...a11yProps(4)} />
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
