import React from 'react'
import CoverPic from "../cFirstCoverPart/images/Flight-page-banner.png"

function FirstCoverPic() {
    return (
        <div>
            <img src={CoverPic} alt="CoverPic" width="100%" className="img-fluid"></img>
        </div>
    )
}

export default FirstCoverPic
