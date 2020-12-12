import React from 'react'
import hotelBanner from "./images/Hotel-Banner-Without-Button.png"

function HotelPage() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src={hotelBanner} class="d-block w-100" alt="" className="img-fluid"/>
    </div>
  </div>
</div>
        </div>
    )
}

export default HotelPage
