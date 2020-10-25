import React from 'react'
import BusBanner from "../Bus_Search_Pages/BusBanner/BusBanner"
import BusSearchR from "../Bus_Search_Pages/BusSearchR-part/BusSearchR"
import BusCard1 from "../Bus_Search_Pages/BusCard1/BusCard1"



function BusSearch_pagesCombines() {
    return (
        <div>
            <BusBanner/>
            <BusSearchR/>
            <BusCard1/>
        </div>
    )
}

export default BusSearch_pagesCombines
