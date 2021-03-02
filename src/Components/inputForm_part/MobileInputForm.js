import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import {
//   DirectionsBus,
//   Hotel,
//   DirectionsBoat,
//   Flight,
//   Train,
// } from "@material-ui/icons";
import BusImg from "./images/bus2.png";
import HotelImg from "./images/hotel2.png";
import ShipImg from "./images/cruise-ship.png";
import FlightImg from "./images/Plane 2.png";
import TrainImg from "./images/train2.png";
import BusInputForm from "./BusInputForm";
import HotelInputForm from "./Hotel-InputFrom/HotelInputForm";
import LaunchInputFrom from "./LaunchInputFrom";
import { Paper, Button } from "@material-ui/core";

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
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("lg")]: {
      display: "none",
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
            <Tab
              label={
                <div>
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
                  ></img>{" "}
                  <span className="font-weight-bold ml-1"> Bus</span>
                </div>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <div>
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
                <div>
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
                <div>
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
                <div>
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
        </Box>
      </Paper>
    </div>
  );
};

export default MobileInputForm;
