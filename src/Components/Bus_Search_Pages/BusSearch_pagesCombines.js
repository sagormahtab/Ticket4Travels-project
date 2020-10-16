import React from 'react'
import BusBanner from "../Bus_Search_Pages/BusBanner/BusBanner"
import BusSearchR from "../Bus_Search_Pages/BusSearchR-part/BusSearchR"
import BusCard1 from "../Bus_Search_Pages/BusCard1/BusCard1"
import BusCard2 from "../Bus_Search_Pages/BusCard2/BusCard2"
import BusCard3 from "../Bus_Search_Pages/BusCard3/BusCard3"


function BusSearch_pagesCombines() {
    return (
        <div>
            <BusBanner/>
            <BusSearchR/>
            <BusCard1/>
            <BusCard2/>
            <BusCard3/>
        </div>
    )
}

export default BusSearch_pagesCombines
