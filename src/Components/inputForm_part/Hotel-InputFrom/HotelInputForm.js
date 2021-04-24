import {
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useForm, Controller } from "react-hook-form";
import "./style.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBaby, faHotel } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
    [theme.breakpoints.down("sm")]: {
      flex: "100%",
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
  const [location, setLocation] = useState([]);
  const classes = useStyles();

  let history = useHistory();
  const redirect = (data) => {
    let { location, checkin, checkout } = data;
    // capitalizing location
    location = location.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
      match.toUpperCase()
    );

    checkin = JSON.parse(JSON.stringify(checkin));
    checkout = JSON.parse(JSON.stringify(checkout));
    sessionStorage.setItem(
      "searchedData",
      JSON.stringify({ location, checkin, checkout, persons, room, baby })
    );
    history.push(
      `/hotel_search?location=${location}&checkin=${checkin}&checkout=${checkout}&persons=${persons}&baby=${baby}&room=${room}`
    );
  };

  useEffect(() => {
    axios
      .get("https://hotel-api-sm.herokuapp.com/api/v1/hotel-list/locations")
      .then(function (response) {
        setLocation([
          ...response.data.data.primary,
          ...response.data.data.secondary,
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const { register, handleSubmit, control } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    redirect(data);
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
                id="from-input-field"
                freeSolo
                options={location}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="City, hotel, place to go"
                    margin="normal"
                    variant="outlined"
                    name="location"
                    inputRef={register}
                  />
                )}
              />
            </div>
          </div>
          {/* From - To Form End */}

          <div className="row mt-2">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
              <h6 className="font-weight-bold">Check-in</h6>
              <Controller
                name="checkin"
                control={control}
                defaultValue={new Date()}
                rules={{ required: true }}
                render={(props) => (
                  <KeyboardDatePicker
                    className={classes.firstDatePicker}
                    fullWidth
                    disableToolbar
                    disablePast
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    placeholder="Pick a date"
                    format="dd-MM-yyyy"
                    label="Date of Check-in"
                    value={props.value ? props.value : null}
                    inputRef={register}
                    onChange={(date) => props.onChange(date)}
                  />
                )}
              />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
              <h6 className="font-weight-bold">Check-out</h6>
              <Controller
                name="checkout"
                control={control}
                defaultValue={new Date(Date.now() + 24 * 60 * 60 * 1000)}
                render={({ value, onChange }) => (
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth
                    disablePast
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    placeholder="Pick a date"
                    format="dd-MMM-yyyy"
                    label="Date of Check-out"
                    value={value ? value : null}
                    inputRef={register}
                    onChange={(date) => onChange(date)}
                  />
                )}
              />
            </div>
          </div>

          {/* adults and rooms input number start */}
          <div className="row mt-4">
            <div className="col-md-8">
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
                        onClick={() => persons > 1 && setPersons(persons - 1)}
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
