import React from "react";
import ArrowPng from "../BusSearchR-part/images/next.png";
import "../BusSearchR-part/busSearch.css";
import { useBus } from "../../../BusContext";
import { makeStyles } from "@material-ui/core/styles";
import { format } from "date-fns";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
function BusSearchR() {
  const { bus } = useBus();
  let { from, to, date } = bus;
  date = format(new Date(date), "dd MMMM, yyyy");
  const classes = useStyles();

  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <h3 className="text-left mr-3 mb-0 Where-From-In-MobileView" style={{ color: "#30dd89" }}>
                {from}
              </h3>
              <img
                src={ArrowPng}
                width="20px"
                alt=""
                className="img-fluid"
              ></img>
              <h3 className="ml-3 mb-0 Where-To-Go-In-MobileView" style={{ color: "#30dd89" }}>
                {to}
              </h3>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0"> {date}</p>
              <Link to="/bus" className={classes.link}>
                <Button type="button" variant="outlined" color="primary">
                  Change Search
                </Button>
              </Link>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default BusSearchR;
