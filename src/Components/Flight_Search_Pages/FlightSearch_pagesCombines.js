import React from 'react'
import FirstCoverPic from "../Flight_Search_Pages/cFirstCoverPart/FirstCoverPic"
import SearchResult from "../Flight_Search_Pages/SearchingResult-part/SearchResult"
import DestinationTxt from "../Flight_Search_Pages/destination-part/DestinationTxt"
import AllCard from "../Flight_Search_Pages/card-part/AllCard"
import FlightDropdown from "../Flight_Search_Pages/Flight-search dropdown-part/FlightDropdown"

function FlightSearch_pagesCombines() {
    return (
        <div>
            <FirstCoverPic />
            <SearchResult/>
            <DestinationTxt />
            <FlightDropdown/>
            <AllCard/>
        </div>
    )
}

export default FlightSearch_pagesCombines
