import {
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faHotel,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import HotelBanner from "./images/Hotel-Banner-Without-Button.png";

const useStyles = makeStyles((theme) => ({
  searchInputContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  searchInput: {
    flexBasis: "49%",
  },
  dateInputWrapper: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  firstDatePicker: {
    marginRight: "2rem",
  },
  searchBtn: {
    background: "#30dd89",
    height: "50px",
    marginTop: "5px",
    "&:hover": {
      background: "#00b894",
    },
    color: "white",
    flexBasis: "25%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordationContent: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "60.33%",
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
        flex: "100%"
      },
  },
  subaccordationContent: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const HotelSearch = () => {
  const [persons, setPersons] = useState(1);
  const [baby, setBabies] = useState(0);
  const [room, setRooms] = useState(1);
  const classes = useStyles();

  let history = useHistory();
  const redirect = () => {
    history.push("/hotel_search");
  };

  const cityList = [{ title: "Dhaka" }];

  const { handleSubmit } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log(data);
    redirect();
  };

  const [selectedDateForCheckIn, setSelectedDateForCheckI] = useState(null);
  const [selectedDateForCheckOut, setSelectedDateForCheckOut] = useState(null);

  const handleDateChangeForCheckIn = (date) => {
    setSelectedDateForCheckI(date);
  };
  const handleDateChangeForCheckOut = (date) => {
    setSelectedDateForCheckOut(date);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img alt="HotelImage" className="img-fluid" src={HotelBanner}></img>
        </div>

        <div className="col-md-6">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* city destination start */}
                <div>
                  <h6 className="font-weight-bold">
                    City, destination, or hotel name
                  </h6>
                  <Autocomplete
                    id="combo-box-demo"
                    freeSolo
                    options={cityList}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        required
                        {...params}
                        label="City, hotel, place to go"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </div>
                {/* city destination end */}

                <div className="row mt-3">
                  <div className="col-md-6">
                    <h6 className="font-weight-bold">Check-in</h6>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        className="mt-0"
                        fullWidth
                        required
                        id="date-picker-inline"
                        label="Date of booking"
                        value={selectedDateForCheckIn}
                        onChange={handleDateChangeForCheckIn}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                  <div className="col-md-6">
                    <h6 className="font-weight-bold">Check-out</h6>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        className="mt-0"
                        fullWidth
                        required
                        id="date-picker-inline"
                        label="Date of return booking"
                        value={selectedDateForCheckOut}
                        onChange={handleDateChangeForCheckOut}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mt-3">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {persons} adults, {baby} child, {room} Room
                        </Typography>
                      </AccordionSummary>
                      {/* For adults Input start */}
                      <AccordionDetails style={{ height: "50px" }}>
                        <div className={classes.accordationContent}>
                          <FontAwesomeIcon icon={faUser} />
                          <span> Adult</span>
                        </div>
                        <div className={classes.subaccordationContent}>
                          <div className="def-number-input number-input">
                            <button
                              onClick={() =>
                                persons > 1 && setPersons(persons - 1)
                              }
                              type="button"
                              className="minus"
                            ></button>
                            <input
                              className="quantity"
                              name="quantity"
                              value={persons}
                              type="number"
                            />
                            <button
                              onClick={() => setPersons(persons + 1)}
                              type="button"
                              className="plus"
                            ></button>
                          </div>
                        </div>
                      </AccordionDetails>
                      {/* For adults Input end */}
                      {/* For childrens Input start */}
                      <AccordionDetails style={{ height: "50px" }}>
                        <div className={classes.accordationContent}>
                          <FontAwesomeIcon icon={faBaby} />
                          <span> Children</span>
                        </div>
                        <div className={classes.subaccordationContent}>
                          <div className="def-number-input number-input">
                            <button
                              onClick={() => baby > 0 && setBabies(baby - 1)}
                              type="button"
                              className="minus"
                            ></button>
                            <input
                              className="quantity"
                              name="quantity"
                              value={baby}
                              type="number"
                            />
                            <button
                              onClick={() => setBabies(baby + 1)}
                              type="button"
                              className="plus"
                            ></button>
                          </div>
                        </div>
                      </AccordionDetails>
                      {/* For childrens Input end */}
                      {/* For Rooms Input start */}
                      <AccordionDetails>
                        <div className={classes.accordationContent}>
                          <FontAwesomeIcon icon={faHotel} />
                          <span> Room</span>
                        </div>
                        <div className={classes.subaccordationContent}>
                          <div className="def-number-input number-input">
                            <button
                              onClick={() => room > 1 && setRooms(room - 1)}
                              type="button"
                              className="minus"
                            ></button>
                            <input
                              className="quantity"
                              name="quantity"
                              value={room}
                              type="number"
                            />
                            <button
                              onClick={() => setRooms(room + 1)}
                              type="button"
                              className="plus"
                            ></button>
                          </div>
                        </div>
                      </AccordionDetails>
                      {/* For Rooms Input end */}
                    </Accordion>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Button
                      type="submit"
                      style={{
                        width: "100%",
                        marginTop: "1rem",
                        backgroundColor: "#30dd89",
                        color: "white",
                      }}
                    >
                      <FontAwesomeIcon icon={faSearch} color="white" /> Search
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
