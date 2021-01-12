import React from 'react'
import icon1 from "../Dropdown2/images/Plane 2.png"
import icon2 from "../Dropdown2/images/save.png"
import icon3 from "../Dropdown2/images/calendar2.png"
import icon4 from "../Dropdown2/images/passenger.png"
import icon5 from "../Dropdown2/images/premium-quality.png"

import "../Dropdown2/drop2.css"

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



function Dropdown2() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };






  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="text-center mt-4">
                <div className="drop2 px-5">
                  <img src={icon1} alt="Plan" height="30px" width="30px" className="img-fluid"></img>

                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Flight Price Alert
                    </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem fullwidth onClick={handleClose}>menu1</MenuItem>
                    <MenuItem onClick={handleClose}>menu2</MenuItem>
                    <MenuItem onClick={handleClose}>menu3</MenuItem>
                  </Menu>




                  {/* secend */}
                  <img src={icon2} alt="Plan" height="30px" width="30px" className="img-fluid"></img>

                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Saved List
                    </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>menu1</MenuItem>
                    <MenuItem onClick={handleClose}>menu2</MenuItem>
                    <MenuItem onClick={handleClose}>menu3</MenuItem>
                  </Menu>



                  {/* Three */}
                  <img src={icon3} alt="Plan" height="30px" width="30px" className="img-fluid"></img>

                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Easy Reschedule
                    </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>menu1</MenuItem>
                    <MenuItem onClick={handleClose}>menu2</MenuItem>
                    <MenuItem onClick={handleClose}>menu3</MenuItem>
                  </Menu>




                  {/* four */}
                  <img src={icon4} alt="Plan" height="30px" width="30px" className="img-fluid"></img>

                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Passanger Quick Pic
                    </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>menu1</MenuItem>
                    <MenuItem onClick={handleClose}>menu2</MenuItem>
                    <MenuItem onClick={handleClose}>menu3</MenuItem>
                  </Menu>




                  {/* five */}
                  <img src={icon5} alt="Plan" height="30px" width="30px" className="img-fluid"></img>

                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Stay Guarante
                    </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>menu1</MenuItem>
                    <MenuItem onClick={handleClose}>menu2</MenuItem>
                    <MenuItem onClick={handleClose}>menu3</MenuItem>
                  </Menu>



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
