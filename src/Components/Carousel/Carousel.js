import React from 'react'
import cover1 from "./images/Banner-2-Large-final.jpg"
import cover2 from "./images/Banner-1-large-FInal.jpg"
import cover3 from "./images/Banner-3-Large-Final.jpg"
import "../Carousel/carousel.css"

function Carousel() {
    return (
        
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner caro">
        <div class="carousel-item active">
          <img src={cover1} class="d-block w-100" alt="cover"/>
          <div class="carousel-caption  d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src={cover2} class="d-block w-100" alt="cover"/>
          <div class="carousel-caption d-none d-md-block">
            
          </div>
        </div>
        <div class="carousel-item">
          <img src={cover3} class="d-block w-100" alt="cover"/>
          <div class="carousel-caption d-none d-md-block">
            
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    )
}

export default Carousel
