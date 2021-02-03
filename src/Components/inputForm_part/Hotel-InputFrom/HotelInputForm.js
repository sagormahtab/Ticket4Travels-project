import {
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css"
import { useForm } from "react-hook-form";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBaby, faHotel } from "@fortawesome/free-solid-svg-icons";

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

const HotelInputForm = () => {

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          {/* From - To Form start */}
          <div className="row">
            <div className="col-md-12 mt-3">
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
          </div>
          {/* From - To Form End */}

          <div className="row mt-2">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-2">
              <h6 className="font-weight-bold">Check-in</h6>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  margin="normal"
                  className="mt-0"
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

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-2">
              <h6 className="font-weight-bold">Check-out</h6>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  margin="normal"
                  className="mt-0"
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

          {/* adults and rooms input number start */}
          <div className="row mt-4">
            <div className="col-md-8">
              <Accordion >
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
                <AccordionDetails style={{height: "50px"}}>
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
                <AccordionDetails style={{height: "50px"}}>
                <div className={classes.accordationContent}>
                    <FontAwesomeIcon icon={faBaby} />
                    <span> Children</span>
                  </div>
                  <div className={classes.subaccordationContent}>
                  <div className="def-number-input number-input">
                          <button
                            onClick={() =>
                              baby > 0 && setBabies(baby - 1)
                            }
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
                <AccordionDetails >
                <div className={classes.accordationContent}>
                    <FontAwesomeIcon icon={faHotel} />
                    <span> Room</span>
                  </div>
                  <div className={classes.subaccordationContent}>
                  <div className="def-number-input number-input">
                          <button
                            onClick={() =>
                              room > 1 && setRooms(room - 1)
                            }
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
            <div className="col-md-4">
              <Button
                className={classes.searchBtn}
                variant="contained"
                type="submit"
                fullWidth
                startIcon={<Search />}
                style={{ outline: "0" }}
              >
                Search Hotel
              </Button>
            </div>
          </div>
          {/* adults and rooms input number end */}
        </div>
      </form>
    </div>
  );
};

export default HotelInputForm;
