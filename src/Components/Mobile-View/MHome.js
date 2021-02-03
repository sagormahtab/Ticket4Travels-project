import React from 'react'
import MInputRoute from './Input-SearchRoute/MInputRoute'
import MobileNavBar from "./NavBar-In-MobileView/MNavBar"
import "./style.css"

const MHome = () => {
    return (
        <div className="Mobile-NavBar-Content">
            <MobileNavBar />
            <MInputRoute />
        </div>
    )
}

export default MHome
