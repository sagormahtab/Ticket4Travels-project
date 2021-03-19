import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
} from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faOutdent } from "@fortawesome/free-solid-svg-icons";
// import { faSmileBeam } from "@fortawesome/free-regular-svg-icons";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  icon1: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    background: "#E2E1DC",
    flexBasis: "100%",
    transform: "translateX(80%)",
  },
  paid_leave: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    background: "#E2E1DC",
    flexBasis: "100%",
    transform: "translateX(80%)",
  },
  icon2: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    background: "#E2E1DC",
    flexBasis: "10%",
    transform: "translateX(80%)",
  },
  root: {
    display: 'flex',
    '& > *': {
      marginLeft: theme.spacing(40),
    },
  },
  smilebeam: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const Accordion = withStyles({
  root: {
    paddingBottom: "0px",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const CareersWithUs = () => {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center mt-5">
              Have you ever thought about a career in varsatile company?
            </h2>
            <Card>
              <CardContent>
                <CardHeader subheader="Tickets4Travel is currently looking for:" />
                <div>
                  <Accordion
                    square
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>1. Mobile App Developer</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>2. Mobile App Developer</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <CardHeader subheader="Tickets4Travel as a company prefer skilled people, if you believe you are better than your competitor, please send us your CV!" />
                  <div className="text-center mt-4">
                    <Link to="/submit-cv" className={classes.link}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ padding: "10px 50px", fontSize: "17px" }}
                      >
                       
                        Send Us Your CV/Resume
                        <span className="ml-2">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-5">
              <h2 className="text-center">Our Story</h2>
              <Card>
                <CardContent>
                  <p style={{ fontSize: "19px" }}>
                    Tickets4Travel started its journey believing in few young
                    enthusiastic minds and now keeps moving like a fast-growing
                    Booking website, here you will get great deals on Tickets -
                    Bus, Launch, Air, and Hotel Reservation. Be one of us! Make
                    a lifetime experience with us.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-5">
              <h2 className="text-center">
                We Love Our Business, So You Should Too!
              </h2>
              <Card>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <CardHeader
                      avatar={
                        <Avatar variant="circle" className={classes.icon1}>
                          <FontAwesomeIcon
                            icon={faMoneyCheckAlt}
                            size="2x"
                            color="green"
                          />
                        </Avatar>
                      }
                    />
                    <CardContent contained className="pt-0">
                      <h5 className="text-center">Lucrative Salary</h5>
                    </CardContent>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <CardHeader
                      avatar={
                        <Avatar variant="circle" className={classes.icon1}>
                          <FontAwesomeIcon
                            icon={faCoffee}
                            size="2x"
                            color="green"
                          />
                        </Avatar>
                      }
                    />
                    <CardContent contained className="pt-0">
                      <h5 className="text-center">Lunch, Coffee</h5>
                    </CardContent>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <CardHeader
                      avatar={
                        <Avatar variant="circle" className={classes.icon1}>
                          <FontAwesomeIcon
                            icon={faPlaceOfWorship}
                            size="2x"
                            color="green"
                          />
                        </Avatar>
                      }
                    />
                    <CardContent contained className="pt-0">
                      <h5 className="text-center">Flexible Working Culture</h5>
                    </CardContent>
                  </div>
                </div>
               {/* <div className="row">
                 <div className="col-md-3">
                  </div>
                 <div className="col-md-3 "><Avatar className={classes.smilebeam}>
                    <FontAwesomeIcon icon={faOutdent} size="2x" color="green"/>
                  </Avatar>
                  <h5 className="ml-3 mt-2">Paid Leave</h5></div>
                 <div className="col-md-3 ml-5"><Avatar className={classes.smilebeam}>
                    <FontAwesomeIcon icon={faSmileBeam} size="2x" color="green"/>
                  </Avatar><h5>Refresment Tour</h5></div>
                 <div className="col-md-3">
                 
                  </div>
               </div> */}
              </Card>
              <div className="mt-5">
                <h3 className="text-center mt-4">So what are you waiting for? Send us your CV / Resume and begin a challenging career now!</h3>
                <div className="text-center mt-5">
                <Link to="/submit-cv" className={classes.link}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ padding: "10px 50px", fontSize: "17px" }}
                      >
                       
                        Send Us Your CV/Resume
                        <span className="ml-2">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </Button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersWithUs;
