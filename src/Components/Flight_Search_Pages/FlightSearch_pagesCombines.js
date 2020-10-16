import React from 'react'
import FirstCoverPic from "../Flight_Search_Pages/cFirstCoverPart/FirstCoverPic"
import SearchResult from "../Flight_Search_Pages/SearchingResult-part/SearchResult"
import DestinationTxt from "../Flight_Search_Pages/destination-part/DestinationTxt"
import Navbar from "../Flight_Search_Pages/dropdown-part/Navbar"
import AllCard from "../Flight_Search_Pages/card-part/AllCard"

function FlightSearch_pagesCombines() {
    return (
        <div>
            <FirstCoverPic />
            <SearchResult/>
            <DestinationTxt />
            <Navbar/>
            <AllCard/>
        </div>
    )
}

export default FlightSearch_pagesCombines
