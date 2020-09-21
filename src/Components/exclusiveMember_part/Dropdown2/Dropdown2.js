import React from 'react'
import icon1 from "../Dropdown2/images/Plane 2.png"
import icon2 from "../Dropdown2/images/save.png"
import icon3 from "../Dropdown2/images/calendar2.png"
import icon4 from "../Dropdown2/images/passenger.png"
import icon5 from "../Dropdown2/images/premium-quality.png"

function Dropdown2() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="text-center mt-4">
          <div className="container">
          <img src={icon1} alt="Plan" height="30px" width="30px"></img>
          <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Flight Price Alert
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>

    {/* secend */}
    <img src={icon2} alt="Plan" height="30px" width="30px"></img>
          <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Saved List
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>

   {/* Three */}
   <img src={icon3} alt="Plan" height="30px" width="30px"></img>
          <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Easy Reschedule
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>

   {/* four */}
   <img src={icon4} alt="Plan" height="30px" width="30px"></img>
          <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Passenger Quick Pick
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>

    {/* five */}
    <img src={icon5} alt="Plan" height="30px" width="30px"></img>
          <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Stay Guarantee
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
          </div>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown2
