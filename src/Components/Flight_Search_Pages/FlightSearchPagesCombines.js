import React from 'react'
import FirstCoverPic from "./cFirstCoverPart/FirstCoverPic"
import SearchResult from "./SearchingResult-part/SearchResult"
import DestinationTxt from "./destination-part/DestinationTxt"
import AllCard from "./card-part/AllCard"
import FlightDropdown from "./Flight-search dropdown-part/FlightDropdown"

function FlightSearchPagesCombines() {
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

export default FlightSearchPagesCombines
