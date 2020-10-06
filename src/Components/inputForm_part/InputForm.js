import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import "../inputForm_part/inputForm.css"
import { DatePicker, Space } from 'antd';
import pay from "../inputForm_part/images/donation.png"
import Air from "../inputForm_part/images/Plane 2.png"
import Hotl from "../inputForm_part/images/hotel2.png"
import bus from "../inputForm_part/images/bus2.png"

import { AiOutlineSearch } from "react-icons/ai";


const { RangePicker } = DatePicker;

const { Header, Sider, Content } = Layout;

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]

// 2nd dropdown for duration

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]

export default class InputForm extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="mt-5">
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="white" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" ><img src={Air} height="20px" width="20px"></img>
                                  Air
            </Menu.Item>
                            <Menu.Item key="2" ><img src={Hotl} height="20px" width="20px"></img>
                                Hotel
            </Menu.Item>
                            <Menu.Item key="3" ><img src={bus} height="20px" width="20px"></img>
                                Bus
            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        ><h4 className="font-weight-bold m-0">City,Destination or Hotel name</h4>

                            <Dropdown
                                clearable
                                fluid
                                multiple
                                search
                                selection
                                options={countryOptions}
                                placeholder='Select Country'
                            />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="font-weight-bold mt-3 mb-0 ">Check-in</h4>
                                        <Space direction="vertical" size={12}>
                                            <RangePicker />
                                        </Space>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="font-weight-bold mt-3 mb-0 ">Duration</h4>
                                        <Dropdown clearable options={options} selection />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
      </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
      </div>
                                </div>
                            </div>
                            <div className="mt-3 pay_text">
                            <img src={pay} height="20px" width="20px" ></img> Pay upon Check-in
                            </div>

                            <button type="button" class="btn btn-success search_Button"><AiOutlineSearch className="search"/>Search Hotels</button>


                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
