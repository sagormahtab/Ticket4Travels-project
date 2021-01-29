import React, { Fragment, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Search } from "@material-ui/icons";
import { useBus } from "../../BusContext";
import { useHistory } from "react-router-dom";

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

const BusInputForm = () => {
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
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">

          {/* From - To Form start */}
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-12">
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
                    name="from"
                    inputRef={register}
                  />
                )}
              />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-12">
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
                    name="to"
                    inputRef={register}
                  />
                )}
              />
            </div>
          </div>
          {/* From - To Form End */}


          <div className="row mt-2">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
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
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
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
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
              <Button
                className={classes.searchBtn}
                variant="contained"
                type="submit"
                fullWidth
                startIcon={<Search />}
                style={{ outline: "0" }}
              >
                Search Bus
          </Button>
            </div>
          </div>
        </div>
        {/* <div className={classes.searchInputContainer}>
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
                name="from"
                inputRef={register}
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
                name="to"
                inputRef={register}
              />
            )}
          />
        </div> */}
        {/* <Box className={classes.dateInputWrapper}>
          <div>
            <Controller
              name="date"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={(props) => (
                <KeyboardDatePicker
                  className={classes.firstDatePicker}
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

            <Controller
              name="returnDate"
              control={control}
              defaultValue={false}
              render={({ value, onChange }) => (
                <KeyboardDatePicker
                  disableToolbar
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

          <Button
            className={classes.searchBtn}
            variant="contained"
            type="submit"
            startIcon={<Search />}
            style={{ outline: "0" }}
          >
            Search Bus
          </Button>
        </Box> */}
      </form>
    </Fragment>
  );
};

export default BusInputForm;
