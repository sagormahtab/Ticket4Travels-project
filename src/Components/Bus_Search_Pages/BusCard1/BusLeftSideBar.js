import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./busCard1.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilter } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  filterContent: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#E0E5E6",
    position: "fixed",
    right: "0px",
    bottom: "0px",
    width: "100%",
    zIndex: "2",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  FilterButton: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E0E5E6",
    position: "fixed",
    right: "0px",
    bottom: "0px",
    width: "100%",
    zIndex: "2",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 800,
  },
  fullList: {
    width: "auto",
  },
}));

const BusLeftSideBar = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardHeader
          title="Sort In result"
          subheader="Sort your search result by:-"
        ></CardHeader>
        <hr></hr>
        <CardContent>
          <div>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Depart Time
          </div>

          <div>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Lowest Time
          </div>

          <div>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Arrival Time
          </div>
          <div>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Duration
          </div>
        </CardContent>
      </Card>

      <div className="mt-4">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Filter results" />
          <hr></hr>
          <CardContent>
            <Typography variant="body1">
              Sort your search result based on your selected category
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Facilites" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Wifi
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Non AC
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Air Coindition
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Power Supply
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Clean Trip
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Buffet
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Reclaining Seat
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Sleeping Coach
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Bus Name" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Green Line
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Shamoly Square
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Shohag
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Ena
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Hanif
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Gono Poribohon
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Saudia
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Departare Name" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              0.00 - 06.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              0.00 - 12.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              0.00 - 18.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              18.00 - 0.00
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Arrival Time" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              0.00 - 06.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              0.00 - 12.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              0.00 - 18.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              18.00 - 0.00
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Seat Arrangment" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              1-1
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              1-2
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              2-2
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Fleet Name" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Hino
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              TATA
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Ashok Lealynd
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              Marcedez
            </div>
          </CardContent>
        </Card>
        {/* Fliter-For-Mobile start */}
        <div className={classes.filterContent}>
          <div style={{ flex: "50%" }}>
            <button
              className="mobileFilter-btn"
              data-toggle="modal"
              data-target="#exampleModalLong1"
            >
              Filter
            </button>
          </div>
          <div style={{ flex: "50%" }}>
            <button
              className="mobileFilter-btn"
              data-toggle="modal"
              data-target="#exampleModalCenter2"
            >
              Sort
            </button>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModalLong1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Filtering items
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Card>
                  <CardHeader
                    title="Sort In result"
                    subheader="Sort your search result by:-"
                  />
                  <hr></hr>
                  <CardContent>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Depart Time
                    </div>

                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Lowest Time
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Arrival Time
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Duration
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader title="Bus Name" />
                  <CardContent>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Green Line
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Shamoly Square
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Shohag
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Ena
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Hanif
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Gono Poribohon
                    </div>
                    <div>
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      Saudia
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModalCenter2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-center" id="exampleModalLongTitle">
                  Sort by
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <hr></hr>
                <p>Earliest Departure time</p>
                <hr></hr>
                <hr></hr>
                <p>Lowest price</p>
                <hr></hr>
                <hr></hr>
                <p>Earliest Arrival time</p>
                <hr></hr>
                <hr></hr>
                <p>Shortest Duration</p>
                <hr></hr>
                <hr></hr>
                <p>Highest rating</p>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
        {/* Fliter-For-Mobile end */}
      </div>
    </div>
  );
};

export default BusLeftSideBar;
