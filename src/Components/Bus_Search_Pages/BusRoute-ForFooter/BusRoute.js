import { Card, CardContent, TextField, Button } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import busBanner from "./images/Bus-Search-Page-Banner.png";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useBus } from "../../../BusContext";

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
    "&:hover": {
      background: "#00b894",
    },
    color: "white",
    flexBasis: "25%",
  },
}));
const BusRoute = () => {
  const classes = useStyles();
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const { register, handleSubmit, control } = useForm(); // initialise the hook
  let history = useHistory();

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

  const { setBus } = useBus();

  const onSubmit = (data) => {
    setBus(data);
    history.push("/bus_search");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                  <h5>From</h5>
                  <Autocomplete
                    id="from-input-field"
                    freeSolo
                    options={from}
                    className={classes.searchInput}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Origin"
                        margin="normal"
                        variant="outlined"
                        name="from"
                        inputRef={register}
                      />
                    )}
                  />
                </div>
                <div className="mt-3">
                  <h5>To</h5>
                  <Autocomplete
                    id="to-input-field"
                    freeSolo
                    options={to}
                    className={classes.searchInput}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Destination"
                        margin="normal"
                        variant="outlined"
                        name="to"
                        inputRef={register}
                      />
                    )}
                  />
                </div>

                <div className="row mt-3">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                    <h6 className="font-weight-bold">Departure Date</h6>
                    <Controller
                      name="date"
                      control={control}
                      defaultValue={false}
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
                          label="Date of journey"
                          value={props.value ? props.value : null}
                          inputRef={register}
                          onChange={(date) => props.onChange(date)}
                        />
                      )}
                    />
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                    <h6 className="font-weight-bold">Roundtrip</h6>
                    <Controller
                      name="returnDate"
                      control={control}
                      defaultValue={false}
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
                          label="Date of return (Optional)"
                          value={value ? value : null}
                          inputRef={register}
                          onChange={(date) => onChange(date)}
                        />
                      )}
                    />
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    style={{
                      width: "96%",
                      marginTop: "1rem",
                      backgroundColor: "#30dd89",
                      color: "white",
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} color="white" /> Search
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
          <img alt="BusBanner" src={busBanner} className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
};

export default BusRoute;
