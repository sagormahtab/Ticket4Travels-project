import { Button, Card, CardContent } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faHotel, faShip } from "@fortawesome/free-solid-svg-icons";
import PartnerShipBanner from "./images/Partnership-page-banner.png";
import React from "react";

const PartnerUs = () => {
  return (
    <div>
      <div>
        <img src={PartnerShipBanner} alt="" className="img-fluid"></img>
      </div>
      <div className="container mt-5">
        <Card>
          <CardContent>
            <div className="row mt-5">
              <div className="col-md-12">
                <h3 className="mt-2">Grow Your Business with Tickets4Travel</h3>
                <ul>
                  <li className="mt-3">
                    More business opportunities through us. Just need to
                    register your vehicle companies with our company and get 3x
                    times more customers.
                  </li>
                </ul>

                <h3 className="mt-4">Be with us, just one click away.</h3>
                <ul>
                  <li className="mt-3">
                    Select the services you would like to offer from the below
                    buttons, select your vehicle type, submit a few personal
                    details and thats it, wait for our response.
                  </li>
                  <li className="mt-3">Join us now</li>
                </ul>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4 mt-3">
                <Button variant="outlined" color="primary" fullWidth>
                  <a
                    className="nav-link "
                    href="http://hotel.tickets4travel.com"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faHotel} className="mr-1" /> Hotel
                    Partnership
                  </a>
                </Button>
              </div>
              <div className="col-md-4 mt-3">
                <Button variant="outlined" color="primary" fullWidth>
                  <a
                    className="nav-link "
                    href="http://bus.tickets4travel.com"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faBus} className="mr-1" /> Bus
                    Partnership
                  </a>
                </Button>
              </div>
              <div className="col-md-4 mt-3">
                <Button variant="outlined" color="primary" fullWidth>
                  <a
                    className="nav-link "
                    href="http://launch.tickets4travel.com"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faShip} className="mr-1" /> Launch
                    Partnership
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerUs;
