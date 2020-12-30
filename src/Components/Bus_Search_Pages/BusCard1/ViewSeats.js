import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import BusCart from "./BusCart";
import MuiAlert from "@material-ui/lab/Alert";
// import { useCart } from "../../../CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "no-wrap",
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
  wrapperStyle: {
    border: "1px solid gray",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ViewSeats = ({ bus }) => {
  let firstCol = [],
    secondCol = [],
    thirdCol = [],
    fourthCol = [];

  const classes = useStyles();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [exceedLimit, setExceedLimit] = useState(false);

  bus.seats.forEach((st) => {
    if (st[1] * 1 === 1) {
      firstCol.push(st);
    } else if (st[1] * 1 === 2) {
      secondCol.push(st);
    } else if (st[1] * 1 === 3) {
      thirdCol.push(st);
    } else if (st[1] * 1 === 4) {
      fourthCol.push(st);
    }
  });

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

  const oneColumnSeat = (colName) => {
    return (
      <ul className={classes.root}>
        {colName.map((data, i) => {
          return (
            <li key={i}>
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
      </ul>
    );
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-7">
          <div className={classes.wrapperStyle}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div>{oneColumnSeat(firstCol)}</div>
                <div>{oneColumnSeat(secondCol)}</div>
              </div>
              <div className="d-flex">
                <div>{oneColumnSeat(thirdCol)}</div>
                {fourthCol.length > 0 && <div>{oneColumnSeat(fourthCol)}</div>}
              </div>
            </div>
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
