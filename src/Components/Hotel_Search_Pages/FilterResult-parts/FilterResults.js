import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "../FilterResult-parts/filterResults.css";
import architecture from "../FilterResult-parts/images/architecture-1048092_1920.jpg";
import impressionLogo from "./images/Final Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
  },
  hotelContent: {
    flex: "1 1  auto",
    [theme.breakpoints.down("sm")]: {
      flex: "100%",
    },
  },
  checkInWithTex: {
    flex: "1 1 0 auto",

    [theme.breakpoints.down("sm")]: {
      flex: "100%",
    },
  },
  priceFilter: {
    height: 40,
    width: "300px",
  },
  input: {
    marginLeft: 30,
    width: 42,
  },
  card: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },

  cardMedia: {
    width: 300,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },

  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function InputSlider() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(30);
  const [price, setPrice] = React.useState("");
  const cityList = [{ title: "Dhaka" }, { title: "narayangonj" }];

  // const handleInputChange = (event) => {
  //   setValue(event.target.value === "" ? "" : Number(event.target.value));
  // };

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };

  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12 form1 mt-3">
              <Autocomplete
                id="combo-box-demo"
                freeSolo
                options={cityList}
                getOptionLabel={(option) => option.title}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    required
                    {...params}
                    label="City hotel place to go"
                    variant="outlined"
                  />
                )}
              />
            </div>

            <div className="col-md-4 col-12 formControl mt-3">
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel>Total Price</InputLabel>
                <Select
                  value={price}
                  onChange={handleChange}
                  label="Total price"
                >
                  <MenuItem value="Per Room,Per Night">
                    Per Room,Per Night
                  </MenuItem>
                  <MenuItem value="Total Price">Total Price</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className=" mt-4">
              <Link to="/hotel_details" className={classes.link}>
                <Card className={classes.root}>
                  <CardMedia className={classes.cardMedia}>
                    <img
                      src={architecture}
                      alt=""
                      width="300px"
                      height="280px"
                    ></img>
                  </CardMedia>
                  <CardContent className={classes.hotelContent}>
                    <CardHeader title="The Raintree Hotel" />
                    <Button variant="outlined" color="primary" className="ml-3">
                      Hotels
                    </Button>
                    <div className="ml-2">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        size="1x"
                        className="mt-3"
                      />
                      <span style={{ color: "#8f8f8f" }}>
                        cox,s bazar, Bangladesh
                      </span>
                    </div>
                    <div className="ImpressiveLogo">
                      <img
                        src={impressionLogo}
                        alt="ourLogo"
                        width="50px"
                        height="70px"
                        className="img-fluid"
                      ></img>
                      <span
                        style={{ color: "#1ba0e2" }}
                        className="impressiveRate"
                      >
                        Impressive - 8.6
                      </span>
                    </div>
                  </CardContent>

                  <CardContent className={classes.checkInWithTex}>
                    <p style={{ color: "#1ba0e2" }} className="mb-0 mt-5">
                      Pay up check In
                    </p>
                    <p style={{ color: "#1ba0e2" }} className="mb-0">
                      Available
                    </p>
                    <p className="Amount">RP 3333</p>
                  </CardContent>
                  {/* <Accordion >
                                          <AccordionSummary style={{margin: "0"}} expandIcon={<ExpandMoreIcon style={{padding:"0"}}/>}>
                                              <p className="AccordionText">Inclusive of Taxes</p>
                                          </AccordionSummary>
                                          <AccordionDetails >
                                              <div className="row">
                                                  <div className="col-md-3"></div>
                                                  <div className="col-md-6">
                                                      <p>Night(s) 1 (January 16, 2021)</p>
                                                  </div>
                                                  <div className="col-md-3">Rp 206.612</div>
                                              </div>
                                          </AccordionDetails>
                                      </Accordion> */}
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
