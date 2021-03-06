import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  Slider,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HotelSearch from "./images/Hotel-Search-Page-App-bar.png";

import "../Sort-Results-part/sortResults.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SortResults() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div>
      <div className=" mt-5">
        <div>
          <div>
            <div>
              <Card>
                <CardHeader title="Map" />
                <hr></hr>
                <CardContent>
                  <p>View Map</p>
                </CardContent>
              </Card>
            </div>
            {/* <div className="col-md-8 col-12 hotelapplogo ">
              <img
                src={HotelSearch}
                alt="HotelBanner"
                className="img-fluid"
              ></img>
            </div> */}
          </div>
          <div>
            <div className="mt-3">
              <Card>
                <CardHeader
                  title="Sort In result"
                  subheader="Sort your search result by:-"
                ></CardHeader>
                <hr></hr>
                <CardContent>
                  <div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Depart Time
                    </div>

                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Lowest Time
                    </div>
                  </div>

                  <div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Arrival Time
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Duration
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="mt-3">
                <Card className="hotelPriceRange">
                  <CardHeader title="Price Range Per Night" />
                  <hr></hr>
                  <CardContent>
                    <div className={classes.priceFilter}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                          <Slider
                            value={typeof value === "number" ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                          />
                        </Grid>
                        <Grid item>
                          <Input
                            className={classes.input}
                            value={value}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                              step: 10,
                              min: 0,
                              max: 100,
                              type: "number",
                              "aria-labelledby": "input-slider",
                            }}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-3">
              <Card className="hotelFilter1 mt-4">
                <CardHeader title="Booking Policy" />
                <hr></hr>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                Free cencelation
              </Card>
            </div>

            <div className="mt-3">
              <Card>
                <CardHeader title="Star Rating" />
                <CardContent>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                    <FontAwesomeIcon icon={faStar} color="#D4AC0D" size="lg" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-3">
              <Card>
                <CardHeader title="Facilities" />
                <hr></hr>
                <CardContent>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Wifi
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Non AC
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Air Coindition
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Power Supply
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Parking
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Airport transfer
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Fitness center
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    24-hour Front desk
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Wheelchain acess
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Resturent
                  </div>
                  <div>
                    <Checkbox
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    Swimming pool
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortResults;
