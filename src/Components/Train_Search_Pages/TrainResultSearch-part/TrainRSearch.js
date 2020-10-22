import React from 'react'
import Ar from "../TrainResultSearch-part/images/next.png"
import "../TrainResultSearch-part/trainRSearch.css"

function TrainRSearch() {
    return (
        <div className="mt-5">
            <div className="">
            <h2 className="text-center mt-5">Searching Result</h2>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-10">
                        <h3 className="text-left">Name of the destination <img src={Ar} width="20px" height="20px"></img> Name of the destination</h3>
                        <p className="text-left"> Thrusday 2 Aug, 2021</p>
                        <p className="text-left"> 1 Adult  |  Class Name</p>
                        
                    </div>
                    <div className="row button_Divv">
                    <div className="col-md-12 "><button type="button" class="btn btn-success">Change Search</button></div>
                    </div>
                </div>
            </div>

           
        </div>
        </div>
    )
}

export default TrainRSearch
