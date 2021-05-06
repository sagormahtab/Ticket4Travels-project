import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Link } from "react-router-dom";
import { useBusCart } from "../../../BusCartContext";

const useStyles = makeStyles((theme) => ({
  greenText: {
    color: "#006266",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 150,
  },
}));

const BusCart = ({ bus, selectedSeats }) => {
  const classes = useStyles();
  const [boarding, setBoarding] = useState("");
  const { setBusCart } = useBusCart();
  useEffect(() => {
    setBusCart({
      ...bus,
      goingToBook: selectedSeats,
      price: bus.fare * selectedSeats.length,
      boardingPoint: boarding,
    });
  }, [selectedSeats, bus, setBusCart, boarding]);
  const rows = [];
  if (selectedSeats) {
    selectedSeats.forEach((st) => rows.push({ seat: st, price: bus.fare }));
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={""} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Seats</TableCell>
              <TableCell align="right">Fare</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.seat}>
                <TableCell component="th" scope="row">
                  {row.seat}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell classes={{ root: classes.greenText }}>Total</TableCell>
              <TableCell classes={{ root: classes.greenText }} align="right">
                {rows.length * bus.fare}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Boarding Point
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={boarding}
          onChange={(e) => setBoarding(e.target.value)}
          label="Boarding Point"
        >
          {bus.startingPoints.map((el, i) => (
            <MenuItem value={el}>{el}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="d-flex justify-content-end mt-3">
        <Link to="/booking_Stepper">
          <button
            type="button"
            disabled={boarding && rows.length > 0 ? false : true}
            class="btn busButton1"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BusCart;
