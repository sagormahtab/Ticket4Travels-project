import React from 'react'
import LaunchBanner from "./LaunchBanner-part/LaunchBanner"
import LaunchSearchR from "./LaunchSearchResult-part/LaunchSearchR"
import LaunchCard1 from "./LaunchCard1/LaunchCard1"


function LaunchSearchPagesCombines() {
    return (
        <div>
            <LaunchBanner/>
            <LaunchSearchR/>
            <LaunchCard1/>
        </div>
    )
}

export default LaunchSearchPagesCombines
