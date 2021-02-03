import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BusInputForm from "./BusInputForm";
import { DirectionsBus, Hotel, DirectionsBoat } from "@material-ui/icons";
import { Paper } from "@material-ui/core";
import HotelInputForm from "./Hotel-InputFrom/HotelInputForm";
import LaunchInputFrom from "./LaunchInputFrom";



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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  searchSectionWrapper: {
    marginTop: "3rem",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "auto",
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "220px"
  },
  tabPanel: {
    flexGrow: 1,
  },
  paperStyle: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.searchSectionWrapper} container`}>
      <Paper className={classes.paperStyle}>
        <Box className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              label={
                <div>
                  <DirectionsBus style={{ verticalAlign: "middle" }} /> Bus
                </div>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <div>
                  <Hotel style={{ verticalAlign: "middle" }} /> Hotel
                </div>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <div>
                  <DirectionsBoat style={{ verticalAlign: "middle" }} /> Launch
                </div>
              }
              {...a11yProps(2)}
            />
            <Tab label="Flight" {...a11yProps(3)} />
            <Tab label="Train" {...a11yProps(4)} />
          </Tabs>
          <div className={classes.tabPanel}>
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
          </div>
        </Box>
      </Paper>
    </div>
  );
}
