import React from 'react'
import HotelPage from "./hotelBanner/HotelPage"
import SearchResult from "./HotelSearchResults-part/SearchResult"
import Banner from "./Map & Banner/Banner"
import SortResults from "./Sort-Results-part/SortResults"
import FilterResults from "./FilterResult-parts/FilterResults"

function HotelSearchPagesCombines() {
    return (
        <div>
            <HotelPage />
            <SearchResult />
            <hr></hr>
            <Banner />
            <SortResults />
            <FilterResults />
        </div>
    )
}

export default HotelSearchPagesCombines
