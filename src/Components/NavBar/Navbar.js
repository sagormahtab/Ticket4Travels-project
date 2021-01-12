import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "./logo/Final Logo.png";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';







const useStyles = makeStyles(() => ({
  link : {
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
      {/* <IconContext.Provider value={{ color: "#41B3F7" }}> */}
        <div className="navbar">
          <span className="menu-bars">
            <FontAwesomeIcon icon={faBars} onClick={showSidebar} size="1x" color="#007bff"/>
            <img src={logo} alt="logo" height="50px" width="80px" />
          </span>
          <nav class="nav ml-auto drop_txt">
            <a class="nav-link  " href="/" >
            <FontAwesomeIcon icon={faHandshake} className="mr-1"/> Partnership
            </a>
            <a class="nav-link " href="/">
              <FontAwesomeIcon icon={faAd} className="mr-1"/> Promo
            </a>
            <a class="nav-link " href="/">
            <FontAwesomeIcon icon={faSave} className="mr-1"/> Saved
            </a>
            <a class="nav-link " href="/">
            <FontAwesomeIcon icon={faBook} className="mr-1"/> My Booking
            </a>
            <a class="nav-link " href="/">
            <FontAwesomeIcon icon={faMoneyCheck} className="mr-1"/> Pay
            </a>
            <a class="nav-link " href="/">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-1"/> Log In
            </a>
            <Link to="/login_form" className={classes.link}>
              <Button variant="contained"  style={{backgroundColor: "#28a745"}}>Register</Button>
            </Link>
          </nav>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FontAwesomeIcon icon={faWindowClose} size="2x"/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
