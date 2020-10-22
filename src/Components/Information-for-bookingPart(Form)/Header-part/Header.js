import React from 'react'
import { Card } from 'antd';

import "../Header-part/header.css"
import logo from "../Header-part/images/without-name.png"

function Header() {
    return (
        <div className="header_part">
              <Card style={{ width: 1349, height:100 }}>
              <h2 className="font-bold ">Tickets4Travels<img src={logo} width="90px" height="50px"></img></h2> 
              </Card>
        </div>
    )
}

export default Header
