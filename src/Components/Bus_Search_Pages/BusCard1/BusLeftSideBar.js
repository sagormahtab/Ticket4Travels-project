import React from "react";
import { Checkbox } from "antd";
import { Card } from "antd";
import { Radio } from "antd";

const BusLeftSideBar = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div>
      <Card style={{ width: 300, height: 100 }} className="busCard1_boxshadow">
        <h5 className="text-left">Sort In results</h5>
        <p className="text-left">Sort your search results by:</p>
      </Card>
      <Card style={{ width: 300 }} className="busCard1_boxshadow">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <Radio>Depart time</Radio>
          </div>
          <div className="col-lg-6 col-md-6">
            <Radio>Lowest Time</Radio>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6">
            <Radio>Arrival time</Radio>
          </div>
          <div className="col-lg-6 col-md-6">
            <Radio>Duration</Radio>
          </div>
        </div>
      </Card>

      <div className="mt-4 ">
        <Card
          size="small"
          title="Filter Results"
          extra={<a href="bus_search">Reset Filter</a>}
          style={{ width: 300 }}
          className="busCard1_boxshadow mt-5"
        >
          <p>Sort your search results based on your selected catagory</p>
        </Card>
      </div>
      <div>
        <Card
          style={{ width: 300 }}
          className="BusCard2_facilitiesDiv mt-5 busCard2_boxshadow"
        >
          <h5 className="text-left">Facilites</h5>
          <div className="row text-left">
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Wifi</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Non AC</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Air Coindition</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Power Supply</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Clean Trip</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Buffet</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Reclaining Seat</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Sleeping Coach</Checkbox>
            </div>
          </div>
        </Card>
        <Card style={{ width: 300 }} className="mt-5 busCard2_boxshadow">
          <h5 className="text-left">Bus Name</h5>
          <div className="row text-left">
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Green Line</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Shamoly Square</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Shohag</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Ena</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Hanif</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Gono Poribohon</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Saudia</Checkbox>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <Card
          style={{ width: 300 }}
          className="BusCard3_depoertdiv mt-5 busCard3_boxshadow"
        >
          <h5 className="text-left">Departare Name</h5>
          <div className="row text-left">
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>0.00 - 06.00</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>0.00 - 12.00</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>0.00 - 18.00</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>18.00 - 0.00</Checkbox>
            </div>
          </div>
        </Card>

        <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
          <h5 className="text-left">Arrival Time</h5>
          <div className="row text-left">
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>0.00 - 06.00</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>0.00 - 12.00</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>0.00 - 18.00</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>18.00 - 0.00</Checkbox>
            </div>
          </div>
        </Card>
        <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
          <h5 className="text-left">Seat Arrangment</h5>
          <div className="row text-left">
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>1 - 1</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>1 - 2</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>2 - 2</Checkbox>
            </div>
          </div>
        </Card>
        <Card style={{ width: 300 }} className="mt-4 busCard3_boxshadow">
          <h5 className="text-left">Fleet Name</h5>
          <div className="row text-left">
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Hino</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>TATA</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Ashok Lealynd</Checkbox>
            </div>
            <div className="col-lg-12 col-md-12 mt-2">
              <Checkbox onChange={onChange}>Marcedez</Checkbox>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BusLeftSideBar;
