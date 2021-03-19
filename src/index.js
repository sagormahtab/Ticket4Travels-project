import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BusProvider } from "./BusContext";
import { CartProvider } from "./CartContext";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

ReactDOM.render(
  <BusProvider>
    <CartProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </CartProvider>
  </BusProvider>,
  document.getElementById("root")
);

