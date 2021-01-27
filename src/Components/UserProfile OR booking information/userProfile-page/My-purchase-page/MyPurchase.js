import React from 'react'
import purchaseCROSS from "../My-purchase-page/images/Purchase-Cross.png"

function MyPurchase() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-12"><img src={purchaseCROSS} height="160px" width="160px" alt="" className="img-fluid"></img></div>
                    <h5 className="">No purcahse found</h5>
                </div>

            </div>
        </div>
    )
}

export default MyPurchase
