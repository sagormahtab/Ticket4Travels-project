import React from 'react'
import hotelPic1 from "../ExtraSpace_hotelPic/images/hotel-1979406_1920.jpg"
import hotelPic2 from "../ExtraSpace_hotelPic/images/villa-1737168_1920.jpg"

function HotelPic() {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="mb-0">Extra space for</h3>
                            <h3 className="mt-0">Family and Frinends</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                        </div>

                        <div className="col-md-4 text-right">
                            <img src={hotelPic1} alt="hotelPic" height="210px" width="280px"></img>
                        </div>
                        <div className="col-md-4 text-left">
                            <img src={hotelPic2} alt="hotelPic2" height="210px" width="280px"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelPic
