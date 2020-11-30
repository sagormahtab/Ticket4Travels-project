import React from 'react'
import TrainBanner from "./trainSearchBanner/TrainBanner"
import TrainRSearch from "./TrainResultSearch-part/TrainRSearch"
import TrainCard1 from "./TrainCard1/TrainCard1"


function TrainSearchPagesCombines() {
    return (
        <div>
            <TrainBanner/>
            <TrainRSearch/>
            <TrainCard1/>
        </div>
    )
}

export default TrainSearchPagesCombines
