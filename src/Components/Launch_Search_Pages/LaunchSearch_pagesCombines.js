import React from 'react'
import LaunchBanner from "../Launch_Search_Pages/LaunchBanner-part/LaunchBanner"
import Launch_SearchR from "../Launch_Search_Pages/LaunchSearchResult-part/Launch_SearchR"
import LaunchCard1 from "../Launch_Search_Pages/LaunchCard1/LaunchCard1"


function LaunchSearch_pagesCombines() {
    return (
        <div>
            <LaunchBanner/>
            <Launch_SearchR/>
            <LaunchCard1/>
        </div>
    )
}

export default LaunchSearch_pagesCombines
