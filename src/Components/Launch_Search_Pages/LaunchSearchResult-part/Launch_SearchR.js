import React from 'react'
import ArrowForLaunch from "../LaunchSearchResult-part/images/next.png"
import "../LaunchSearchResult-part/LaunchSearchR.css"

function Launch_SearchR() {
    return (
        <div>
            <h2 className="text-center mt-5">Searching Result</h2>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-6">
                        <h1>Dhaka <img src={ArrowForLaunch} width="20px" height="20px"></img> Barishal</h1>
                        <p className=""> Thrusday 2 Aug, 2021</p>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 mt-3">
                    <button type="button" class="btn btn-success">Change Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Launch_SearchR
