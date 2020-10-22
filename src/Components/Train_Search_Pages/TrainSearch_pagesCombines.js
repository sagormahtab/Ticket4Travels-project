import React from 'react'
import TrainBanner from "../Train_Search_Pages/trainSearchBanner/TrainBanner"
import TrainRSearch from "../Train_Search_Pages/TrainResultSearch-part/TrainRSearch"
import TrainCard1 from "../Train_Search_Pages/TrainCard1/TrainCard1"
import TrainCard2 from "../Train_Search_Pages/TrainCard2/TrainCard2"

function TrainSearch_pagesCombines() {
    return (
        <div>
            <TrainBanner/>
            <TrainRSearch/>
            <TrainCard1/>
            <TrainCard2/>
        </div>
    )
}

export default TrainSearch_pagesCombines
