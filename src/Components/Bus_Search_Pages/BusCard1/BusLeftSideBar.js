import React from "react";
import { Card, CardContent, Typography, CardHeader, Checkbox } from '@material-ui/core';



const BusLeftSideBar = () => {


  return (
    <div>
      <Card>
        <CardHeader title="Sort In result" subheader="Sort your search result by:-">
        </CardHeader>
        <hr></hr>
        <CardContent>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Depart Time
            </div>

            <div className="col-lg-6 col-md-6">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Lowest Time
          </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 col-md-6">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Arrival Time
          </div>
            <div className="col-lg-6 col-md-6">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Duration
          </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4">
        <Card>
          <CardHeader title="Filter results" />
          <hr></hr>
          <CardContent>
            <Typography variant="body1">Sort your search result based on your selected category</Typography>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader title="Facilites" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Wifi
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Non AC
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Air Coindition
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Power Supply
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Clean Trip
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Buffet
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Reclaining Seat
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Sleeping Coach
            </div>
          </CardContent>
        </Card>
      </div>


      <div className="mt-4">
        <Card>
          <CardHeader title="Bus Name" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Green Line
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Shamoly Square
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Shohag
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Ena
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Hanif
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Gono Poribohon
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Saudia
            </div>

          </CardContent>
        </Card>
      </div>


      <div className="mt-4">
        <Card>
          <CardHeader title="Departare Name" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 06.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 12.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 18.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />18.00 - 0.00
            </div>
          </CardContent>
        </Card>
      </div>


      <div className="mt-4">
        <Card>
          <CardHeader title="Arrival Time" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 06.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 12.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />0.00 - 18.00
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />18.00 - 0.00
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Card>
          <CardHeader title="Seat Arrangment" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />1-1
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />1-2
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />2-2
            </div>
          </CardContent>
        </Card>
      </div>


      <div className="mt-4">
        <Card>
          <CardHeader title="Fleet Name" />
          <hr></hr>
          <CardContent>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Hino
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />TATA
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Ashok Lealynd
            </div>
            <div>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />Marcedez
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusLeftSideBar;
