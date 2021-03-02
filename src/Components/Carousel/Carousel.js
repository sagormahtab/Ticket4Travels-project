import React from "react";
import "../Carousel/carousel.css";

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner caro">
        <div class="carousel-item active">
          <img
            src="https://i.ibb.co/XYLJvhc/Banner-1-large-FInal.jpg"
            class="d-block w-100"
            alt="cover"
          />
          <div class="carousel-caption  d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/WGYr9hq/Banner-2-Large-Final.jpg"
            class="d-block w-100"
            alt="cover"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/gVThGgq/Banner-3-Large-Final.jpg"
            class="d-block w-100"
            alt="cover"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
