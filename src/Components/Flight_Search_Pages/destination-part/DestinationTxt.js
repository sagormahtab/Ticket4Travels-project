import React from 'react'
import ArrowRgt from "../destination-part/images/next.png"
import "../destination-part/destinationTxt.css"
import Button from '@material-ui/core/Button';


function DestinationTxt() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-6">
                        <h2 className=""> Name of the Destinaion</h2>
                        <p className=" ">Thrusday, 20 Auguest</p>
                        <p className=" ">1 Adult | Economy</p>
                    </div>
                    <div className="col-md-6 col-6">
                    <h2  className="text-left"> Name of the Destinaion</h2>
                    <div className="rightArrow"><img src={ArrowRgt} width="28px" height="28px" alt="" className="img-fluid"></img></div>
                    {/* <div className="buttonn"><button type="button" class="btn">Search results</button></div> */}
                    <Button variant="contained" color="primary">Search results</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationTxt
