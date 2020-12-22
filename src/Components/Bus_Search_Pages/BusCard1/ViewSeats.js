import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import BusCart from "./BusCart";
import MuiAlert from "@material-ui/lab/Alert";
// import { useCart } from "../../../CartContext";

const wrapperStyle = {
  border: "1px solid gray",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  breakAfter: {
    flexBasis: "23%",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ViewSeats = ({ bus }) => {
  const classes = useStyles();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [exceedLimit, setExceedLimit] = useState(false);
  let spaceAfter = null;
  let breakAfter = null;

  if (bus.hasThreeInRow) {
    spaceAfter = 1;
    breakAfter = 3;
  } else {
    spaceAfter = 2;
    breakAfter = 4;
  }

  const handleClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setExceedLimit(false);
      const filteredSeats = selectedSeats.filter((st) => st !== seat);
      setSelectedSeats(filteredSeats);
    } else if (selectedSeats.length === 4) {
      setExceedLimit(true);
    } else {
      setExceedLimit(false);
      setSelectedSeats([...selectedSeats, seat]);
    }
  };
  // let seatLetters = [];
  // for (let i = 0; i < bus.seats.length; i++) {
  //   seatLetters.push(bus.seats[i][0]);
  // }

  // console.log(seatLetters.toString());
  return (
    <div>
      <div className="row">
        <div className="col-md-7">
          <div className="seats-wrapper" style={wrapperStyle}>
            <Paper component="ul" className={classes.root}>
              {bus.seats.map((data, i) => {
                return (
                  <li
                    key={i}
                    className={`${data[1] * 1 === spaceAfter ? "mr-5" : ""} ${
                      data[1] * 1 === breakAfter ? classes.breakAfter : ""
                    }`}
                  >
                    <Chip
                      label={data}
                      className={`${classes.chip}`}
                      onClick={() => handleClick(data)}
                      color={selectedSeats.includes(data) ? "primary" : ""}
                      disabled={bus.bookedSeats.includes(data) ? true : false}
                    />
                  </li>
                );
              })}
            </Paper>
          </div>
          {exceedLimit && (
            <Alert className="mt-2" severity="error">
              Maximum of 4 seat(s) can be booked at-a-time.
            </Alert>
          )}
        </div>
        <div className="col-md-5">
          <BusCart bus={bus} selectedSeats={selectedSeats} />
        </div>
      </div>
    </div>
  );
};

export default ViewSeats;
