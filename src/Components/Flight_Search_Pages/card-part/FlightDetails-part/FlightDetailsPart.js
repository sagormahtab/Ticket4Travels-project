import React from 'react'
import { Card } from 'antd';
import "../FlightDetails-part/flightDetails_part.css"


function FlightDetailsPart() {
    return (
        <div>
            <div className="container">
                <div className="mt-5 ">
                    <h5>18:30</h5>
                    <p>26 OCT</p>
                </div>

                <div className="mt-5">
                    <h5>1h 50m</h5>
                </div>

                <div className="mt-5">
                    <h5>18:30</h5>
                    <p>26 OCT</p>
                </div>
                 
                <div className="FlightDetailsBoder">
                <div className="FlightDetailsCard-divforAll">
                    <h5>Jakarta(CGK)</h5>
                    <p>Soekarno Hatta International Airport</p>
                    <Card  className="flightdetailsPart">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <h5>Lion Air JT-16</h5>
                                <p>Economy</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <p>Baggage (buy at booking</p>
                                <p>Cabin baggage 7 kg</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <p>AircraftBoeing 737</p>
                                <p>Seat layout3-3</p>
                                <p>Seat pitch29 inches (standard)</p>
                            </div>
                        </div>
                    </Card>
                    <h5>Bali / Denpasar (DPS)</h5>
                    <p>Ngurah Rai International Airport</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightDetailsPart
