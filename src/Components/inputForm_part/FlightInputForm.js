import React, { Fragment, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import { DatePicker } from "@material-ui/pickers";
import { Search } from "@material-ui/icons";

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
    background: "#00b894",
    "&:hover": {
      background: "#00b894",
    },
    color: "white",
    flexBasis: "49%",
  },
}));

const FlightInputForm = () => {
  const classes = useStyles();
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    axios
      .get("https://bus-api-sm.herokuapp.com/api/v1/bus-list/from-to")
      .then(function (response) {
        setFrom(response.data.data.from);
        setTo(response.data.data.to);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const { register, handleSubmit } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log(data);
    // redirect();
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.searchInputContainer}>
          <Autocomplete
            id="from-input-field"
            freeSolo
            options={from}
            className={classes.searchInput}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                margin="normal"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            id="to-input-field"
            freeSolo
            options={to}
            className={classes.searchInput}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </div>
        <Box className={classes.dateInputWrapper}>
          <div>
            <DatePicker
              className={classes.firstDatePicker}
              disableToolbar
              disablePast
              autoOk
              variant="inline"
              placeholder="Pick a date"
              format="dd-MMM-yyyy"
              label="Date of journey"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <DatePicker
              disableToolbar
              disablePast
              autoOk
              variant="inline"
              placeholder="Pick a date"
              format="dd-MMM-yyyy"
              label="Date of return (Optional)"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          <Button
            className={classes.searchBtn}
            variant="contained"
            startIcon={<Search />}
            style={{ outline: "0" }}
          >
            Search Bus
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};

export default FlightInputForm;
