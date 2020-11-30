import React from 'react'
import BusBanner from "./BusBanner/BusBanner"
import BusSearchR from "./BusSearchR-part/BusSearchR"
import BusCard1 from "./BusCard1/BusCard1"



function BusSearchPagesCombines() {
    return (
        <div>
            <BusBanner/>
            <BusSearchR/>
            <BusCard1/>
        </div>
    )
}

export default BusSearchPagesCombines
