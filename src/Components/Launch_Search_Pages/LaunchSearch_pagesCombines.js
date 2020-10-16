import React from 'react'
import LaunchBanner from "../Launch_Search_Pages/LaunchBanner-part/LaunchBanner"
import Launch_SearchR from "../Launch_Search_Pages/LaunchSearchResult-part/Launch_SearchR"
import LaunchCard1 from "../Launch_Search_Pages/LaunchCard1/LaunchCard1"
import LaunchCard2 from "../Launch_Search_Pages/LaunchCard2/LaunchCard2"

function LaunchSearch_pagesCombines() {
    return (
        <div>
            <LaunchBanner/>
            <Launch_SearchR/>
            <LaunchCard1/>
            <LaunchCard2/>
        </div>
    )
}

export default LaunchSearch_pagesCombines
