import React from 'react'
import cover from "../Carousel/cover_pic/COVERr-PAGE.png-2.png"
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
          <img src={cover} class="d-block w-100" alt="cover"/>
          <div class="carousel-caption  d-md-block">
          <div className="button_part"><button type="button" class="btn btn-success login">Log in</button> Or <button type="button" class="btn btn-success login">Register</button> to Enjoy <button type="button" class="btn btn-light">passenger Quick pick</button></div>
            
          </div>
        </div>
        <div class="carousel-item">
          <img src={cover} class="d-block w-100" alt="cover"/>
          <div class="carousel-caption d-none d-md-block">
            
          </div>
        </div>
        <div class="carousel-item">
          <img src={cover} class="d-block w-100" alt="cover"/>
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
