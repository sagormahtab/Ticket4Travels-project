import React from 'react'
import HotelPage from "../Hotel_Search_Pages/hotelBanner/HotelPage"
import SearchResult from "../Hotel_Search_Pages/HotelSearchResults-part/SearchResult"
import Banner from "../Hotel_Search_Pages/Map & Banner/Banner"
import Sort_Results from "../Hotel_Search_Pages/Sort-Results-part/Sort_Results"
import FilterResults from "../Hotel_Search_Pages/FilterResult-parts/FilterResults"

function HotelSearch_pagesCombines() {
    return (
        <div>
            <HotelPage />
            <SearchResult />
            <hr></hr>
            <Banner />
            <Sort_Results />
            <FilterResults />
        </div>
    )
}

export default HotelSearch_pagesCombines
