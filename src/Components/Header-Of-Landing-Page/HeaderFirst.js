import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderFirst.css"

const HeaderFirst = () => {
  return (
    <div className="navbar" style={{backgroundColor: "#30dd89"}}>
      {/* <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
      
        <div className="col-md-3">
        <FontAwesomeIcon icon={faMailBulk}/><span><a href="mailto: contact@tickets4travel.com">contact@tickets4travel.com</a></span>
        </div>
        <div className="col-md-3">
        <FontAwesomeIcon icon={faPhone}/><span><a href="tel: +8809611262020">+8809611262020</a></span>
        </div>
      </div> */}



      <nav className="nav ml-auto Header-content">
          <div className="nav-link ">
          <FontAwesomeIcon icon={faMailBulk}/><span><a href="mailto: contact@tickets4travel.com"> contact@tickets4travel.com</a></span>
          </div>
          
          
            
         <div className="nav-link ">
         <FontAwesomeIcon icon={faPhone}/><span><a href="tel: +8809611262020"> +8809611262020</a></span>
         </div>
          
           

          
        </nav>

        <div className="Header-content-forMobile">
          <span>
          <div>
          <FontAwesomeIcon icon={faMailBulk}/><span ><a href="mailto: contact@tickets4travel.com">contact@tickets4travel.com</a></span>
          </div>
          <div>
          <FontAwesomeIcon icon={faMailBulk}/><span ><a href="tel: +8809611262020">+8809611262020</a></span>
          </div>
          
          
          </span>
          <span></span>
        </div>
    </div>
  )
}

export default HeaderFirst
