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
          <nav class="nav ml-auto drop_txt">
            <a class="nav-link  " href="/">Partnership</a>
            <a class="nav-link " href="/"><img src={icon11} height="22px" width="25px" alt=""></img>Promo</a>
            <a class="nav-link " href="/"><BookmarkIcon />Saved</a>
            <a class="nav-link " href="/">My booking</a>
            <a class="nav-link " href="/">Pay</a>
            <a class="nav-link " href="/"><img src={icon12} height="22px" width="25px" alt=""></img>Log in</a>
            <Link to="/login_form"><button type="button" class="btn btn-success">Register</button></Link>
            
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
