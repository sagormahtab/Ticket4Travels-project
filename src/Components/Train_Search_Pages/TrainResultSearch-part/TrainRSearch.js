import React from 'react'
import Ar from "../TrainResultSearch-part/images/next.png"
import "../TrainResultSearch-part/trainRSearch.css"

import Button from '@material-ui/core/Button';


function TrainRSearch() {
    return (
        <div className="mt-5">
            <h2 className="text-center mt-5">Searching Result</h2>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <h3 className="">Name of the destination <img src={Ar} width="20px" height="20px" alt="" className="img-fluid"></img> Name of the destination</h3>
                        <p className=""> Thrusday 2 Aug, 2021</p>
                        <p className=""> 1 Adult  |  Class Name</p>

                    </div>
                    <div className="row button_Divv">
                        <div className="text-center"><Button variant="contained" color="primary">Change Search</Button></div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default TrainRSearch
