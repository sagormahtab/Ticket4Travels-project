import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Checkbox,
  Button,
  List,
  Drawer,
} from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
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
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list1 = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="m-0">
          <div className="row" style={{ backgroundColor: "#68B9EE" }}>
            <div className="col-4">
              <FontAwesomeIcon icon={faWindowClose} size="2x" />
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
        </div>
        <Card>
          <CardContent>
            <h6>Departare Name</h6>
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
        <div>
          {" "}
          <Card>
            <CardContent>
              <h6>Arrival Time</h6>
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
        <div>
          <Card>
            <CardContent>
              <h6>Bus Name</h6>
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
        <div>
          <Card>
            <CardContent>
              <h6>Facilites</h6>
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
      </List>
      <List>
        <div className={classes.FilterButton}>
          <Button variant="contained" color="primary" fullWidth>
            Select from 0 buses
          </Button>
        </div>
      </List>
    </div>
  );

  const list2 = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="row">
          <Card>
            <h5 className="text-center">SORT BY</h5>
            <hr></hr>
            <p>Earliest departure time</p>
            <p>Earliest departure time</p>
            <p>Earliest departure time</p>
            <p>Earliest departure time</p>
            <p>Earliest departure time</p>
          </Card>
        </div>
      </List>
    </div>
  );
  return (
    <div>
      <Card className={classes.root}>
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
        <Card className={classes.root}>
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
        <Card className={classes.root}>
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
        <Card className={classes.root}>
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
        <Card className={classes.root}>
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
        <Card className={classes.root}>
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
        <Card className={classes.root}>
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
        <Card className={classes.root}>
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
          {["Filter"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list1(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          {["Sort"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list2(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        {/* Fliter-For-Mobile end */}
      </div>
    </div>
  );
};

export default BusLeftSideBar;
