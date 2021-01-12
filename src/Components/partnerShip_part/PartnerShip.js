import React from 'react'
import "../partnerShip_part/partnerShip.css"
import sponser from "../partnerShip_part/images/Partnership-Show-off-xD.png"

function PartnerShip() {
    return (
        <div>
            <div className="">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 document1">
                            <h2>Partnership</h2>
                            <p>
                            Tickets4Travel has the partnership across the globe with the top ranked hotel chains, numerous transportation service – Bus, Launch, Air. Be with Tickets4Travel to have the most comfort travel anywhere in the globe.
                            </p>
                        </div>

                        <div className="col-md-8 mt-4">
                            <img src={sponser} className="img-fluid" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerShip
