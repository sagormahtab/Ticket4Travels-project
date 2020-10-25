import React from 'react'

function FlightFare_info() {
    return (
        <div>
            <div className="container">
                <h4>Price Details</h4>
                <div className="row">
                    <div className="col-lg-6 col-md-6">Adult Basic Fare (x1)</div>
                    <div className="col-lg-6 col-md-6">Amount</div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">Tax</div>
                    <div className="col-lg-6 col-md-6">Included</div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-lg-6 col-md-6">Your pay</div>
                    <div className="col-lg-6 col-md-6">Amount</div>
                </div>

            </div>
        </div>
    )
}

export default FlightFare_info
