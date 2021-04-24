import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, CardHeader } from "@material-ui/core";
import "./hotelDetails.css";
import ImageGallery from "react-image-gallery";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";
import axios from "axios";
import RoomCard from "./RoomCard";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const HotelDetails = () => {
  const { hotelId } = useParams();
  let [hotel, setHotel] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://hotel-api-sm.herokuapp.com/api/v1/hotel-list/${hotelId}`)
      .then(function (response) {
        setHotel(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let { checkin, checkout, persons, room } = JSON.parse(
    sessionStorage.getItem("searchedData")
  );
  checkin = new Intl.DateTimeFormat("default", { dateStyle: "medium" })
    .format(new Date(checkin))
    .split(" ");
  checkin[1] = checkin[1].slice(0, -1);

  checkout = new Intl.DateTimeFormat("default", { dateStyle: "medium" })
    .format(new Date(checkout))
    .split(" ");
  checkout[1] = checkout[1].slice(0, -1);

  useEffect(() => {
    if (hotel) {
      const images = hotel.images.map((img) => {
        return {
          original: img,
          thumbnail: img,
        };
      });
      setImage(images);
    }
  }, [hotel]);

  return (
    <div className="container mt-5">
      <div className="d-flex flex-row-reverse">
        <Button
          variant="contained"
          style={{ backgroundColor: "#30dd89", padding: "12px" }}
        >
          Change Search
        </Button>
      </div>
      <hr />

      {hotel && (
        <div>
          <div className="row mt-3">
            <div className="col-md-6">
              {image && image.length > 0 ? (
                <ImageGallery items={image} />
              ) : (
                <ImageGallery items={images} />
              )}
            </div>
            <div className="col-md-6">
              <CardHeader title={hotel.name} />
              <div className="ml-3">
                {new Array(+hotel.category.split(" ")[0])
                  .fill("star")
                  .map((el, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      size="lg"
                      color="#DFC857"
                    />
                  ))}
              </div>

              <div className="ml-3">
                <FontAwesomeIcon icon={faMapMarkedAlt} size="md" />
                <span className="ml-2">{hotel.fullAddress}</span>
              </div>

              <Button variant="outlined">{hotel.category}</Button>
              <hr></hr>

              <div className="row">
                <div className="col-md-4">
                  <Card variant="outlined">
                    <CardContent>
                      <h6 className="text-center">Check-In</h6>
                      <p className="text-center">{checkin[1]}</p>
                      <hr></hr>
                      <p className="text-center">{checkin[0]} | 2.00pm</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card variant="outlined">
                    <CardContent>
                      <h6 className="text-center">Check-Out</h6>
                      <p className="text-center">{checkout[1]}</p>
                      <hr></hr>
                      <p className="text-center">{checkout[0]} | 2.00pm</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card style={{ backgroundColor: "beige" }} variant="outlined">
                    <CardContent>
                      <h6 className="text-center">You Choose</h6>
                      <p className="text-center">{persons}</p>
                      <p className="text-center">guests in {room} room</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12" style={{ backgroundColor: "#f4f4f4" }}>
              <p>{hotel.description}</p>
            </div>
          </div>

          {hotel.room.map((rm) => (
            <RoomCard room={rm} />
          ))}

          {/* Features of The Raintree Dhaka start */}
          <Card className="mt-5">
            <CardContent>
              <CardHeader title="Features of The Raintree Dhaka" />
              <hr></hr>
              <div className="row ml-1">
                <div className="col-md-2 col-3">
                  <h5>Food & Drinks</h5>
                </div>
                <div className="col-md-2 col-3">
                  <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                  <span style={{ fontSize: "small" }}>
                    {" "}
                    Snack Bar/Restaurant
                  </span>
                </div>
                <div className="col-md-2 col-3">
                  <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                  <span style={{ fontSize: "small" }}> Lunch & Dinner</span>
                </div>
                <div className="col-md-2 col-3">
                  <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                  <span style={{ fontSize: "small" }}> Breakfast</span>
                </div>
              </div>
              <hr></hr>

              <div>
                {/* <CardHeader subheader="Services and conveniences" style={{ paddingBottom: "0px" }} /> */}
                <h5 className="ml-3">Services and conveniences</h5>

                <div className="row ml-3">
                  <div className="col-md-3 col-3">
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Newspape</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}>
                        {" "}
                        Express Check In/Check Out
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}>
                        {" "}
                        Transport Service
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Smoking Zone</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-3">
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Parking Area</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}>
                        {" "}
                        24/7 Front Desk
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}>
                        {" "}
                        Business center
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Tour Guide</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-3">
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Doctor</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Terrace</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Refrigerator</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Oven</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-3">
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}>
                        {" "}
                        Early Wake up call
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}>
                        {" "}
                        Wake up service
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}> Wheel chair</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                      <span style={{ fontSize: "small" }}>
                        {" "}
                        Early Wake up call
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>

            <div>
              <hr></hr>

              <div className="row ml-1">
                <div className="col-md-2">
                  <h5 className="ml-1">Fitness, Relaxing</h5>
                </div>
                <div className="col-md-2 col-3">
                  <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                  <span style={{ fontSize: "small" }}> Daily Housekeeping</span>
                </div>
                <div className="col-md-2 col-3 ">
                  <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                  <span style={{ fontSize: "small" }}> Free toiletries</span>
                </div>
                <div className="col-md-2 col-3">
                  <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                  <span style={{ fontSize: "small" }}> Long beds</span>
                </div>
                <div className="col-md-2 col-3">
                  <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                  <span style={{ fontSize: "small" }}> Personal Locker</span>
                </div>
                <div className="col-md-2 col-3">
                  <FontAwesomeIcon icon={faCheckCircle} size="xs" />{" "}
                  <span style={{ fontSize: "small" }}> Air Conditioner</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Nearby Landmarks start */}
          <Card className="mt-5">
            <CardContent>
              <h5 className="text-center">Nearby Landmarks</h5>
              <hr></hr>

              <div className="row">
                <div className="col-md-12 col-12">
                  <ul className="nearby-landmark">
                    <li>
                      <span>Banani, Dhaka</span>
                      <span>0.29k</span>
                    </li>
                    <li>
                      <span>Gulshan 1</span>
                      <span>0.59 km</span>
                    </li>
                    <li>
                      <span>Gulshan 2</span>
                      <span>0.61 km</span>
                    </li>
                    <li>
                      <span>Baridhara, Dhaka</span>
                      <span>1.40 km</span>
                    </li>
                    <li>
                      <span>Dhaka, Bangladesh</span>
                      <span>1.72 km</span>
                    </li>
                    <li>
                      <span>Dhaka Cantonment</span>
                      <span>2.29 km</span>
                    </li>
                    <li>
                      <span>Kuril, Progati Sharani, Dhaka</span>
                      <span>3.02 km</span>
                    </li>
                    <li>
                      <span>Nikunja, Dhaka</span>
                      <span>4.15 km</span>
                    </li>
                    <li>
                      <span>Farmgat, Dhaka</span>
                      <span>4.78 km</span>
                    </li>
                    <li>
                      <span>Kawran Bazar, Dhaka</span>
                      <span>5.28 km</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default HotelDetails;
