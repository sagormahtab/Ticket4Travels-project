import React from "react";
import icn1 from "../popularDeals_part/images/travel2.png";
import icn2 from "../popularDeals_part/images/bus2.png";
import icn3 from "../popularDeals_part/images/cruise-ship.png";
import icn4 from "../popularDeals_part/images/hotel2.png";
import icn5 from "../popularDeals_part/images/train2.png";
import ReactImage from "./ReactImage";

function PopularDeal() {
  const photos = [
    {
      src: "https://i.ibb.co/f1zCfmg/Banner-8-Short.jpg",
      width: 4,
      height: 3,
    },
  ];
  const photos2 = [
    {
      src: "https://i.ibb.co/n8Xq9Mj/Banner-2-Short.jpg",
      width: 4,
      height: 3,
    },
  ];
  const photos3 = [
    {
      src: "https://i.ibb.co/HnpNnTk/Banner-3-Short.jpg",
      width: 4,
      height: 3,
    },
  ];
  const photos4 = [
    {
      src: "https://i.ibb.co/vQn6nPK/Banner-4-Short.jpg",
      width: 4,
      height: 3,
    },
  ];
  const photos5 = [
    {
      src: "https://i.ibb.co/jhGkpzM/Banner-5-Short.jpg",
      width: 4,
      height: 3,
    },
  ];
  const photos6 = [
    {
      src: "https://i.ibb.co/pjfYH0F/Banner-6-Short.jpg",
      width: 4,
      height: 3,
    },
  ];

  return (
    <div className="">
      <div className="container mt-5">
        <div className="row mt-5 ">
          <div className="col-md-2  font-weight-bold ">
            <span>Popular Deals</span> All
          </div>
          <div className="mt-5"></div>
          <div className="col-md-2 col-lg-2 col-sm-2 col-2">
            <img
              src={icn1}
              height="40px"
              width="40px"
              alt=""
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-2 col-2">
            <img
              src={icn2}
              height="40px"
              width="40px"
              alt=""
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-2 col-2">
            <img
              src={icn3}
              height="40px"
              width="40px"
              alt=""
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-2 col-2">
            <img
              src={icn4}
              height="40px"
              width="40px"
              alt=""
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-2 col-2">
            <img
              src={icn5}
              height="40px"
              width="40px"
              alt=""
              className="img-fluid"
            ></img>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3 ">
            <ReactImage photos={photos} />
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
            <ReactImage photos={photos2} />
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
            <ReactImage photos={photos3} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
            <ReactImage photos={photos4} />
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
            <ReactImage photos={photos5} />
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-12 mt-3">
            <ReactImage photos={photos6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDeal;
