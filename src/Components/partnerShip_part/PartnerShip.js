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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
