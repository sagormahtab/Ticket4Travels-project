import { Checkbox } from 'antd';
import { Card } from 'antd';
import { Radio } from 'antd';
import NxxtPng from "../BusCard1/images/next.png"
import "../BusCard1/busCard1.css"
import React from 'react';
import { Tab, Tabs } from "@material-ui/core"
import BusDetails from "../BusCard1/BusDetails"
import PriceDetails from "../BusCard1/PriceDetails"
import TrainDetails from "../BusCard1/TrainsDetails"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom"



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
    'aria-controls': `simple-tabpanel-${index}`,
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
        width: "35%"
    },
},
  busTab2: {
    [theme.breakpoints.down("sm")]: {
        maxWidth: "35%",
        width: "35%"
    },
},
  busTab3: {
    [theme.breakpoints.down("sm")]: {
        maxWidth: "35%",
        width: "35%"
    },
},
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  

  return (
    <div className={classes.root}>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 bus_otehrs">

              <Card style={{ width: 300, height: 100 }} className="busCard1_boxshadow">
                <h5 className="text-left">Sort In results</h5>
                <p className="text-left">Sort your search results by:</p>
              </Card>
              <Card style={{ width: 300 }} className="busCard1_boxshadow">
                <div className="row">
                  <div className="col-lg-6 col-md-6"><Radio>Depart time</Radio></div>
                  <div className="col-lg-6 col-md-6"><Radio>Lowest Time</Radio></div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6"><Radio>Arrival time</Radio></div>
                  <div className="col-lg-6 col-md-6"><Radio>Duration</Radio></div>
                </div>
              </Card>

              <div className="mt-4 ">
                <Card size="small" title="Filter Results" extra={<a href="bus_search">Reset Filter</a>} style={{ width: 300 }} className="busCard1_boxshadow mt-5">
                  <p>Sort your search results based on your selected catagory</p>

                </Card>
              </div>
              <div>
              <Card style={{ width: 300 }} className="BusCard2_facilitiesDiv mt-5 busCard2_boxshadow">
                            <h5 className="text-left">Facilites</h5>
                            <div className="row text-left">
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Wifi</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Non AC</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Air Coindition</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Power Supply</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Clean Trip</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Buffet</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Reclaining Seat</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Sleeping Coach</Checkbox></div>
                            </div>
                        </Card>
                        <Card style={{ width: 300 }} className="mt-5 busCard2_boxshadow">
                            <h5 className="text-left">Bus Name</h5>
                            <div className="row text-left">
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Green Line</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Shamoly Square</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Shohag</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Ena</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Hanif</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Gono Poribohon</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Saudia</Checkbox></div>
                               
                            </div>
                        </Card>
              </div>

              <div>
              <Card style={{ width: 300 }} className="BusCard3_depoertdiv mt-5 busCard3_boxshadow">
                            <h5 className="text-left">Departare Name</h5>
                            <div className="row text-left">
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 06.00</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 12.00</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 18.00</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>18.00 - 0.00</Checkbox></div>
                                
                            </div>
                    </Card>

                    <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
                            <h5 className="text-left">Arrival Time</h5>
                            <div className="row text-left">
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 06.00</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 12.00</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>0.00 - 18.00</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>18.00 - 0.00</Checkbox></div>
                                
                            </div>
                    </Card>
                    <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
                            <h5 className="text-left">Seat Arrangment</h5>
                            <div className="row text-left">
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>1 - 1</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>1 - 2</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>2 - 2</Checkbox></div>
                               
                                
                            </div>
                    </Card>
                    <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
                            <h5 className="text-left">Fleet Name</h5>
                            <div className="row text-left">
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Hino</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>TATA</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Ashok Lealynd</Checkbox></div>
                                <div className="col-lg-12 col-md-12 mt-2"><Checkbox onChange={onChange}>Marcedez</Checkbox></div>
                                
                               
                            </div>
                        </Card>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">

              <Card  className="busCard1_boxshadow">
                <h5 className="text-left">Name</h5>
                <p className="text-left">Luxery Shuttle</p>


                <div className="row mt-5">
                  <div className="col-lg-3 col-md-3 col-3">00.01</div>
                  <div className="col-lg-3 col-md-3 col-3">04.00</div>
                  <div className="col-lg-3 col-md-3 col-3">3h 59m</div>
                  <div className="col-lg-3 col-md-3 col-3">Amount</div>
                </div>
                <div className="busarrow_div"><img src={NxxtPng} width="20px" height="20px" alt="" className="img-fluid"></img></div>
                <div className="row mt-3">
                  <div className="col-lg-3 col-md-3 col-3"><p>Name of the destination</p></div>
                  <div className="col-lg-3 col-md-3 col-3"><p>Name of the destiantion</p></div>
                  <div className="col-lg-3 col-md-3 col-3"></div>
                  <div className="col-lg-3 col-md-3 col-3"></div>
                </div>

                <Link to="/BusPre_Booking"><div className="busbuttonn"><button type="button" class="btn btn-success busButton1">Book Now</button>
                </div></Link>
                

                <Tabs value={value} onChange={handleChange} >
                  <Tab  className={`${classes.busTab1} busTab1`} label="Bus Details" {...a11yProps(0)} />
                  <Tab  className={`${classes.busTab2} busTab2`}  label="Price Details" {...a11yProps(1)} />
                  <Tab  className={`${classes.busTab3} busTab3`}  label="Route Details" {...a11yProps(2)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                  <BusDetails />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <PriceDetails />

                </TabPanel>
                <TabPanel value={value} index={2}>
                  <TrainDetails />
                </TabPanel>

              </Card>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}