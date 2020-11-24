import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Top_FlightR from "../interest_part/Top_flight-route/Top_FlightR,"
import Top_HotelR from "../interest_part/top-hotel/Top_HotelR"
import Top_DesR from "../interest_part/top-destination/Top_DesR"
import Top_ConR from "../interest_part/For-connectivity/Top_ConR"
import Top_Things from "../interest_part/Top-things-todo/Top_Things"

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
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root} container`}>
    <h1 className="text-center">What interests you?</h1>
     
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Top Flights Routes" {...a11yProps(0)} />
          <Tab label="Top Hotel Destinations" {...a11yProps(1)} />
          <Tab label="Top Packages Destination" {...a11yProps(2)} />
          <Tab label="For Your Connectivity" {...a11yProps(3)} />
          <Tab label="Top Things to Do" {...a11yProps(4)} />
        </Tabs>
        <hr></hr>
     
      <TabPanel value={value} index={0}>
        <Top_FlightR/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Top_HotelR/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Top_DesR/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Top_ConR/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Top_Things/>
      </TabPanel>
    </div>
  );
}
