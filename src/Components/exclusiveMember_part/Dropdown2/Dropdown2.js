import React from 'react'
import icon1 from "../Dropdown2/images/Plane 2.png"
import icon2 from "../Dropdown2/images/save.png"
import icon3 from "../Dropdown2/images/calendar2.png"
import icon4 from "../Dropdown2/images/passenger.png"
import icon5 from "../Dropdown2/images/premium-quality.png"
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function Dropdown2() {


  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="">2nd menu item</a>
      </Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );


  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="text-center mt-4">
                <div className="container px-5">
                  <img src={icon1} alt="Plan" height="30px" width="30px"></img>
                  <Dropdown overlay={menu} trigger={['click']} className="pr-5">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Flight Price Alert<DownOutlined />
                    </a>
                  </Dropdown>


                 

                  {/* secend */}
                  <img src={icon2} alt="Plan" height="30px" width="30px"></img>
                  <Dropdown overlay={menu} trigger={['click']} className="pr-5">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Saved List<DownOutlined />
                    </a>
                  </Dropdown>

                 
                  {/* Three */}
                  <img src={icon3} alt="Plan" height="30px" width="30px"></img>
                  <Dropdown overlay={menu} trigger={['click']} className="pr-5">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Easy Reschedule<DownOutlined />
                    </a>
                  </Dropdown>

                 

                  {/* four */}
                  <img src={icon4} alt="Plan" height="30px" width="30px"></img>
                  <Dropdown overlay={menu} trigger={['click']} className="pr-5">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Passanger Quick Pic<DownOutlined />
                    </a>
                  </Dropdown>

                 

                  {/* five */}
                  <img src={icon5} alt="Plan" height="30px" width="30px"></img>
                  <Dropdown overlay={menu} trigger={['click']} className="pr-5">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Stay Guarante<DownOutlined />
                    </a>
                  </Dropdown>

                 
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
