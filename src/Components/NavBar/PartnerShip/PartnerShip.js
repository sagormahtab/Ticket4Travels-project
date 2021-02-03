import { Button, Card, CardContent } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faHotel, faShip } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const PartnerShip = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-2">Grow Your Business with Tickets4Travel</h3>
                <p className="mt-3">
                  More business opportunities through us. Just need to register
                  your vehicle companies with our company and get 3x times more
                  customers.{" "}
                </p>

                <h3 className="mt-4">Be with us, just one click away.</h3>
                <p className="mt-3">
                  Select the services you would like to offer from the below
                  buttons, select your vehicle type, submit a few personal
                  details and thats it, wait for our response.
                </p>
                <p className="mt-3">Join us now</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mt-3">
                <Button variant="outlined" color="primary">
                  <a
                    className="nav-link "
                    href="http://hotel.tickets4travel.com"
                    target="_blank"
                    without
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faHotel} className="mr-1" /> Hotel
                    Partnership
                  </a>
                </Button>
              </div>
              <div className="col-md-4 mt-3">
                <Button variant="outlined" color="primary">
                  <a
                    className="nav-link "
                    href="http://bus.tickets4travel.com"
                    target="_blank"
                    without
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faHotel} className="mr-1" /> Bus
                    Partnership
                  </a>
                </Button>
              </div>
              <div className="col-md-4 mt-3">
                <Button variant="outlined" color="primary">
                  <a
                    className="nav-link "
                    href="http://launch.tickets4travel.com"
                    target="_blank"
                    without
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faHotel} className="mr-1" /> Launch
                    Partnership
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerShip;
