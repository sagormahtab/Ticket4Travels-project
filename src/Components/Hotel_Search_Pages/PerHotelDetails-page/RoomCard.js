import React from "react";
import {
  Card,
  CardContent,
  Button,
  CardHeader,
  CardMedia,
  Popover,
  Typography,
  FormControl,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./hotelDetails.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import roomPic from "./images/hotel-img1.jpg";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  CardRoot: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
  },
  HotelCardMedia: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  hotelContent: {
    flex: "1 1 0 auto",
    [theme.breakpoints.down("sm")]: {
      flex: "100%",
    },
  },
  bookNowContent: {
    flex: "1 1  auto",
    marginTop: "10px",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  hotelBookLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const RoomCard = ({ room, bookedRoomNum }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [numberOfRoom, setNumberOfRoom] = React.useState(bookedRoomNum);

  const handleChange = (event) => {
    setNumberOfRoom(event.target.value);
  };

  const bookNowHandler = () => {
    sessionStorage.setItem(
      "selectedRoom",
      JSON.stringify({
        type: room.type,
        price: room.price,
        number: numberOfRoom,
      })
    );
    history.push("/hotelPre_Booking");
  };

  const classes = useStyles();
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <div className="row mt-5">
            <div className="col-md-12">
              <Card className={classes.CardRoot}>
                <CardMedia className={classes.HotelCardMedia}>
                  <img
                    src={roomPic}
                    alt="Hotel"
                    width="280px"
                    height="280px"
                  ></img>
                </CardMedia>

                <CardContent className={classes.hotelContent}>
                  <CardHeader title={room.type} className="pb-0" />
                  <CardContent>
                    <FontAwesomeIcon icon={faWifi} color="green" size="sm" />
                    <span className="ml-1 mt-0">WiFi</span>

                    <div className="mt-2">
                      <Button variant="outlined" color="secondary" size="small">
                        Not Included: 15% VAT & 10% Service Charge
                      </Button>
                    </div>

                    <div className="mt-3">
                      <FontAwesomeIcon icon={faCheckSquare} />
                      <span
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        style={{ fontSize: "small", marginLeft: "3px" }}
                      >
                        Cancellation policy
                      </span>
                      <Popover
                        id="mouse-over-popover"
                        className={classes.popover}
                        classes={{
                          paper: classes.paper,
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <Typography>
                          {/* <CardHeader title="Cancellation policy"/> */}
                          <CardContent>
                            <p>Before 7 days in Check-in free cencelation</p>
                          </CardContent>
                        </Typography>
                      </Popover>
                    </div>

                    <div className="mt-3">
                      <span>
                        <span style={{ fontWeight: "bold" }}>Capacity</span>{" "}
                        <FontAwesomeIcon icon={faUser} size="sm" />
                        <span style={{ fontSize: "small" }}>
                          {room.maxAdults} adults
                        </span>
                        <span style={{ fontSize: "small" }}>
                          , {room.maxChildrens} childs
                        </span>
                      </span>
                    </div>
                  </CardContent>
                </CardContent>

                <CardContent className={classes.bookNowContent}>
                  <Card style={{ backgroundColor: "#F3F1EB" }}>
                    <CardContent>
                      <p className="text-right">Price Per Night</p>
                      <div>
                        <h2 className="text-right"> BDT {room.price}</h2>
                      </div>
                      <div className="row">
                        <div className="col-md-8 text-right">
                          Number of Rooms
                        </div>
                        <div className="col-md-4 text-right">
                          <FormControl
                            className={classes.formControl}
                            fullWidth
                          >
                            {/* <InputLabel htmlFor="age-native-simple">
                          Number OF Rooms
                        </InputLabel> */}
                            <Select
                              value={numberOfRoom}
                              onChange={handleChange}
                            >
                              {new Array(room.roomNumber)
                                .fill("roomNum")
                                .map((rmNum, i) => (
                                  <option value={i + 1}>{i + 1}</option>
                                ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#30dd89",
                            color: "white",
                            marginLeft: "195px",
                          }}
                          onClick={bookNowHandler}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomCard;
