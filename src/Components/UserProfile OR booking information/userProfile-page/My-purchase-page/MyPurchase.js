import React from 'react'
import purchaseCROSS from "../My-purchase-page/images/Purchase-Cross.png"

function MyPurchase() {
    return (
        <div>
            <div className="container">
                   <div className="row">
                   <div className="col-md-4 col-4"><img src={purchaseCROSS} height="160px" width="160px" alt="" className="img-fluid"></img></div>
                   <h5 className="">No purcahse found</h5>
                   </div>

            </div>
        </div>
    )
}

export default MyPurchase
