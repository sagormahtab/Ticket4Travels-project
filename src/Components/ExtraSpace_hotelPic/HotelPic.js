import React from 'react'
import hotelPic1 from "../ExtraSpace_hotelPic/images/hotel-1979406_1920.jpg"
import hotelPic2 from "../ExtraSpace_hotelPic/images/villa-1737168_1920.jpg"

function HotelPic() {
    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-4 ">
                        <h3 className="mb-0">Extra space for</h3>
                        <h3 className="mt-0">Family and Frinends</h3>
                        <p>
                            Highly comfortable rooms with countless facilitates only on Tickets4Travel</p>
                    </div>

                    <div className="col-sm-12 col-md-4  mt-5">
                        <img src={hotelPic1} alt="hotelPic" className="img-fluid"></img>
                    </div>
                    <div className=" col-sm-12 col-md-4  mt-5">
                        <img src={hotelPic2} alt="hotelPic2" className="img-fluid"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HotelPic
