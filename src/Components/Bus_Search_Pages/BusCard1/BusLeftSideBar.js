import React from "react";
import { Card, CardContent, Typography, CardHeader, Checkbox, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";




import clsx from 'clsx';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "auto",
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
  filterContent:{
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    right:"0px",
    bottom: "0px",
    width: "400px",
    zIndex: "2",
    [theme.breakpoints.up('lg')]: {
      display: "none"
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  
}));


const BusLeftSideBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[`${classes.root}`].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
  
    </div>
  );

  return (

    <div>
      <Card className={classes.root}>
        <CardHeader title="Sort In result" subheader="Sort your search result by:-">
        </CardHeader>
        <hr></hr>
        <CardContent>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Depart Time
            </div>

            <div className="col-lg-6 col-md-6">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Lowest Time
          </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 col-md-6">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Arrival Time
          </div>
            <div className="col-lg-6 col-md-6">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Duration
          </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4">
        <Card className={classes.root}>
          <CardHeader title="Filter results" />
          <hr></hr>
          <CardContent>
            <Typography variant="body1">Sort your search result based on your selected category</Typography>
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
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Wifi
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Non AC
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Air Coindition
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Power Supply
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Clean Trip
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Buffet
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Reclaining Seat
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Sleeping Coach
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
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Green Line
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Shamoly Square
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Shohag
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Ena
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Hanif
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Gono Poribohon
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Saudia
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
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 06.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 12.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 18.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />18.00 - 0.00
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
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 06.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 12.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 18.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />18.00 - 0.00
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
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />1-1
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />1-2
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />2-2
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
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Hino
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />TATA
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Ashok Lealynd
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Marcedez
            </div>
          </CardContent>
        </Card>
        {/* Fliter-For-Mobile start */}
        <div className={classes.filterContent}>
          <Button  variant="outlined" style={{backgroundColor: "#079D49"}} >
            <FontAwesomeIcon icon={faFilter}/> <span className="ml-1"> Filter</span>
          </Button>









          <div>
          {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
          </div>
        </div>
        {/* Fliter-For-Mobile end */}
      </div>
    </div>
  );
};

export default BusLeftSideBar;
