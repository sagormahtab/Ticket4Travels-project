import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./MSidebarData";
import "./mNavBar.css"
import logo from "./logo/Final Logo.png";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHandshake, } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';



const useStyles = makeStyles(() => ({
  link: {
    "&:hover": {
      textDecoration: "none"
    }
  }
}));


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const classes = useStyles();

  return (
    <>
    <div className="container">
      <div className="row">
        <div className=" col-4">
          <Link to="/partnership">
          <FontAwesomeIcon icon={faHandshake} className="mr-1" /> PartnerShip
          </Link>
        </div>
        <div className=" col-4">
          <Link to="/login">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-1" /> Sign-in
          </Link>
        </div>
        <div className=" col-4">
          <Link to="/register">
          <Button variant="contained" style={{ backgroundColor: "#30dd89" }}>Register</Button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar;
