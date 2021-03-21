import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BusInputForm from "./BusInputForm";
// import {
//   DirectionsBus,
//   Hotel,
//   DirectionsBoat,
//   Flight,
//   Train,
// } from "@material-ui/icons";
import HotelImg from "./images/hotel2.png";
import BusImg from "./images/bus2.png";
import ShipImg from "./images/cruise-ship.png";
import FlightImg from "./images/Plane 2.png";
import TrainImg from "./images/train2.png";
import { Button, Paper } from "@material-ui/core";
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "170px",
  },
  tabPanel: {
    flexGrow: 1,
  },
  paperStyle: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
      <Paper border={1} className={classes.paperStyle}>
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
                <div className="mr-auto">
                  {/* <DirectionsBus style={{ verticalAlign: "middle" }} /> Bus */}
                  <img
                    src={BusImg}
                    className="img-fluid"
                    alt="Hotel_image"
                    style={{
                      verticalAlign: "middle",
                      height: "25px",
                      width: "25px",
                    }}
                  ></img>
                  <span className="font-weight-bold ml-1"> Bus</span>
                </div>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <div className="mr-auto">
                  {/* <Hotel style={{ verticalAlign: "middle" }} /> Hotel */}
                  <img
                    src={HotelImg}
                    className="img-fluid"
                    alt="Hotel_image"
                    style={{
                      verticalAlign: "middle",
                      height: "25px",
                      width: "25px",
                    }}
                  ></img>
                  <span className="font-weight-bold ml-1"> Hotel</span>
                </div>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <div className="mr-auto">
                  {/* <DirectionsBoat style={{ verticalAlign: "middle" }} /> Launch */}
                  <img
                    src={ShipImg}
                    className="img-fluid"
                    alt="Hotel_image"
                    style={{
                      verticalAlign: "middle",
                      height: "25px",
                      width: "25px",
                    }}
                  ></img>
                  <span className="font-weight-bold ml-1"> Launch</span>
                </div>
              }
              {...a11yProps(2)}
            />
            <Tab
              label={
                <div className="mr-auto">
                  {/* <Flight style={{ verticalAlign: "middle" }} /> Flight */}
                  <img
                    src={FlightImg}
                    className="img-fluid"
                    alt="Hotel_image"
                    style={{
                      verticalAlign: "middle",
                      height: "25px",
                      width: "25px",
                    }}
                  ></img>
                  <span className="font-weight-bold ml-1"> Flight</span>
                </div>
              }
              {...a11yProps(3)}
            />
            <Tab
              label={
                <div className="mr-auto">
                  {/* <Train style={{ verticalAlign: "middle" }} /> Train */}
                  <img
                    src={TrainImg}
                    className="img-fluid"
                    alt="Hotel_image"
                    style={{
                      verticalAlign: "middle",
                      height: "25px",
                      width: "25px",
                    }}
                  ></img>
                  <span className="font-weight-bold ml-1"> Train</span>
                </div>
              }
              {...a11yProps(4)}
            />
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
              <a
                href="https://www.esheba.cnsbd.com/#/"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" color="primary">
                  Get Started
                </Button>
              </a>
            </TabPanel>
          </div>
        </Box>
      </Paper>
    </div>
  );
}
