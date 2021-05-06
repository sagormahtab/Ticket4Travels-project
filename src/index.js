import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BusProvider } from "./BusContext";
import { BusCartProvider } from "./BusCartContext";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { HotelCartProvider } from "./Context/HotelCartContext";
import { HotelProvider } from "./Context/HotelContext";

ReactDOM.render(
  <BusProvider>
    <BusCartProvider>
      <HotelCartProvider>
        <HotelProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <App />
          </MuiPickersUtilsProvider>
        </HotelProvider>
      </HotelCartProvider>
    </BusCartProvider>
  </BusProvider>,
  document.getElementById("root")
);
