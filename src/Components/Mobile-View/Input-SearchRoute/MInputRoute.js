import { Card, CardContent, CardHeader, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faHotel, faShip } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  
  avatar: {
    backgroundColor: "#0D81D1",
  },
  avatar2: {
    backgroundColor: "#7DEC64",
  },
  avatar3: {
    backgroundColor: "#C7B96B",
  },
  link: {
    "&:hover": {
      textDecoration: "none"
    }
  }
  
}));

const MInputRoute = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <div className="container">
          <div className="row">
            <div className="col-4">
            <Link to='/hotel' className={classes.link}>
            <CardHeader className="py-0"
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    <FontAwesomeIcon icon={faHotel} />
                  </Avatar>
                }
              />
              <div className="ml-3 mt-0">Hotel</div>
            </Link>
            </div>
            <div className="col-4">
            <Link to="/bus" className={classes.link}>
            <CardHeader className="py-0"
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar2}>
                    <FontAwesomeIcon icon={faBus} />
                  </Avatar>
                }
              />
              <div className="ml-4 mt-0">Bus</div>
            </Link>
            </div>
            <div className="col-4">
            <Link to="/launch" className={classes.link}>
            <CardHeader className="py-0"
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar3}>
                    <FontAwesomeIcon icon={faShip} />
                  </Avatar>
                }
              />
              <div className="ml-3 mt-0">Launch</div>
            </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MInputRoute;
