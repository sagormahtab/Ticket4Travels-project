import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import logo from "./logo/Final Logo.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(() => ({
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const classes = useStyles();

  return (
    <>
      <div className="navbar">
        <span className="menu-bars">
          <FontAwesomeIcon
            icon={faBars}
            onClick={showSidebar}
            size="1x"
            color="#007bff"
            className="SideNav-bar"
          />
          <Link to="/" className={classes.link}>
            <img
              src={logo}
              alt="logo"
              height="50px"
              width="80px"
              className="img-fluid"
            />
            <span className="tickets4travel-span">Tickets4travel</span>
          </Link>
        </span>
        <nav className="nav ml-auto MenuBar-Contents">
          <Link
            to="/partnership"
            className="nav-link MenuBar-Contents-partnership"
          >
            <FontAwesomeIcon icon={faHandshake} className="mr-1" /> Partnership
            with us
          </Link>

          <Link className="nav-link " to="/login">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-1" /> Log In
          </Link>

          <Link to="/register" className={classes.link}>
            <Button variant="contained" style={{ backgroundColor: "#30dd89" }}>
              Register
            </Button>
          </Link>
        </nav>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FontAwesomeIcon icon={faWindowClose} size="2x" />
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
    </>
  );
}

export default Navbar;
