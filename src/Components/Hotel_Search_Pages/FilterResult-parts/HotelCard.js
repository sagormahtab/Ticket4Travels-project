import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
} from "@material-ui/core";

import "../FilterResult-parts/filterResults.css";
import architecture from "../FilterResult-parts/images/architecture-1048092_1920.jpg";
import impressionLogo from "./images/Final Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
  },
  hotelContent: {
    flex: "1 1  auto",
    [theme.breakpoints.down("sm")]: {
      flex: "100%",
    },
  },
  checkInWithTex: {
    flex: "1 1 0 auto",

    [theme.breakpoints.down("sm")]: {
      flex: "100%",
    },
  },
  priceFilter: {
    height: 40,
    width: "300px",
  },
  input: {
    marginLeft: 30,
    width: 42,
  },
  card: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },

  cardMedia: {
    width: 300,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },

  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function HotelCard({ hotel }) {
  const classes = useStyles();
  console.log(hotel.images);

  return (
    <div className="mt-3">
      <Link to={`/hotel_details/${hotel._id}`} className={classes.link}>
        <Card className={classes.root}>
          <CardMedia className={classes.cardMedia}>
            <img
              src={
                hotel.images[0]
                  ? `https://hotel-api-sm.herokuapp.com/img/hotels/${hotel.images[0]}`
                  : architecture
              }
              alt=""
              width="300px"
              height="280px"
            ></img>
          </CardMedia>
          <CardContent className={classes.hotelContent}>
            <CardHeader title={hotel.name} />
            <Button variant="outlined" color="primary" className="ml-3">
              Hotels
            </Button>
            <div className="ml-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="1x"
                className="mt-3"
              />
              <span style={{ color: "#8f8f8f" }}>
                {`${hotel.locationSecondary}, ${hotel.locationPrimary}`}
              </span>
            </div>
            <div className="ImpressiveLogo">
              <img
                src={impressionLogo}
                alt="ourLogo"
                width="50px"
                height="70px"
                className="img-fluid"
              ></img>
              <span style={{ color: "#1ba0e2" }} className="impressiveRate">
                {hotel.category}
              </span>
            </div>
          </CardContent>

          <CardContent className={classes.checkInWithTex}>
            <p style={{ color: "#1ba0e2" }} className="mb-0 mt-5">
              Pay up check In
            </p>
            <p style={{ color: "#1ba0e2" }} className="mb-0">
              Available
            </p>
            {/* <p className="Amount">Price Starts from</p> */}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
