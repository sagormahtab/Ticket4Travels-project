import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from "./logo/Final Logo.png"
import BookmarkIcon from '@material-ui/icons/Bookmark';
import icon11 from "../NavBar/icon-images/browser.png"
import icon12 from "../NavBar/icon-images/user.png"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#41B3F7' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} /><img src={logo} alt="logo" height="50px" width="80px" />
          </Link>
          <nav class="nav ml-auto">
            <a class="nav-link active" href="#">partnership</a>
            <a class="nav-link" href="#"><img src={icon11} height="22px" width="25px"></img> promo</a>
            <a class="nav-link" href="#"><BookmarkIcon />saved</a>
            <a class="nav-link" href="#">My booking</a>
            <a class="nav-link" href="#">pay</a>
            <a class="nav-link" href="#"><img src={icon12} height="22px" width="25px"></img> Log in</a>
            <button type="button" class="btn btn-success">Register</button>
          </nav>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
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
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
