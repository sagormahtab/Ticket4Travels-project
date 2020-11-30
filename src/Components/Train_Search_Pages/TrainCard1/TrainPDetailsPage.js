import React from 'react'

function TrainPDetailsPage() {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-12 ">
                       
                          
                                <p className="fonnt_div text-left">Train name</p>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-6">Adult Fare(x1)</div>
                                    <div className="col-sm-6 col-md-6 col-6 amoun_div">Amount</div>

                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-6">Infont Fare(x0)</div>
                                    <div className="col-sm-6 col-md-6 col-6 amoun_div">Amount</div>

                                </div>

                                <hr></hr>

                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-6">Your Pay</div>
                                    <div className="col-sm-6 col-md-6 col-6 amoun_div">Amount</div>

                                </div>

                            

                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainPDetailsPage
