import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "../dropdown-part/navbar.css"


const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
        </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
);


function Navbar() {
    return (
        <div>
        <hr className="hr_width"></hr>
            <div className="container lol">
                <div className="row">
                <div className="text=center"><p>Filter</p></div>
                    <div className="col-md-2 drp1">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link " onClick={e => e.preventDefault()}>
                                Transit <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="col-md-2">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link " onClick={e => e.preventDefault()}>
                                Time <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="col-md-2">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Airline <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="col-md-2">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                More filter <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="col-md-2">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Sort <DownOutlined />
                            </a>
                        </Dropdown>
                        see others dates
                    </div>
                    {/* <div className="col-md-2">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
