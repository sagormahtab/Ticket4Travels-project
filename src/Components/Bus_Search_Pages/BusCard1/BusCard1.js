import Card from '@material-ui/core/Card';
import NxxtPng from "../BusCard1/images/next.png";
import "../BusCard1/busCard1.css";
import React from "react";
import { CardContent, Tab, Tabs } from "@material-ui/core";
import BusDetails from "../BusCard1/BusDetails";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ViewSeats from "./ViewSeats";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  // const [selectedTab, setSelectedTab] = React.useState(0);

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  busTab1: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35%",
      width: "35%",
    },
  },
  busTab2: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35%",
      width: "35%",
    },
  },
  busTab3: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35%",
      width: "35%",
    },
  },
}));

export default function SimpleTabs({ bus }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);

  const handleChange = (event, newValue) => {
    if (value === newValue) {
      setValue(-1);
    } else {
      setValue(newValue);
    }
  };

  return (
    <div className={classes.root}>
      <div className="container">
        <Card className="busCard1_boxshadow mb-4">
          <CardContent>
            <h5 className="text-left">{bus.name}</h5>
            <p className="text-left">
              {bus.model} {bus.AC ? "AC" : null}
            </p>

            <div className="row mt-3">
              <div className="col-lg-3 col-md-3 col-3 d-flex align-items-center justify-content-between">
                <div>
                  <p>
                    {new Intl.DateTimeFormat("default", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "Asia/Dhaka",
                    }).format(new Date(bus.depTime))}
                  </p>
                  <p>{bus.from}</p>
                </div>
                <div>
                  <img src={NxxtPng} width="20px" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-3">
                <p>
                  {new Intl.DateTimeFormat("default", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    timeZone: "Asia/Dhaka",
                  }).format(new Date(bus.arrTime))}
                </p>
                <p>{bus.to}</p>
              </div>
              <div className="col-lg-3 col-md-3 col-3">
                <p className="text-center">Seats Available</p>
                <p className="text-center">{bus.seat - bus.bookedSeatNum}</p>
              </div>
              <div className="col-lg-3 col-md-3 col-3">
                <p className="text-center">Amount</p>
                <p className="text-center">{bus.fare}</p>
              </div>
            </div>

            <Tabs value={value} onChange={handleChange}>
              <Tab
                className={`${classes.busTab1} busTab1`}
                label="Bus Details"
                {...a11yProps(0)}
              />
              <Tab
                className={`${classes.busTab2} busTab2`}
                label="View Seats"
                {...a11yProps(1)}
              />
            </Tabs>

            <TabPanel value={value} index={0}>
              <BusDetails bus={bus} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ViewSeats bus={bus} />
            </TabPanel>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
