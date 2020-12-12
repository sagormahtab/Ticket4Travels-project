import React from 'react'
import { Card } from 'antd';
import "../LaunchCard1/LaunchCard1.css"
// import yatch1 from "../LaunchCard1/images/yatch.png"
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import LaunchCard2 from '../LaunchCard2/LaunchCard2';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"



const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        width:200,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };



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


   
        return (
            <div>
                <div className="container mt-3 mb-5">
                <hr></hr>
                <div className="row ">
                    <div className="col-md-2 col-2"><h5>Launch/Ship: </h5></div>
                    <div className="col-md-2 col-2 ml-5"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href onClick={e => e.preventDefault()}>
                            Dep Time <DownOutlined />
                        </a>
                    </Dropdown></div>
                    <div className="col-md-2 col-2"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href onClick={e => e.preventDefault()}>
                            Air Time<DownOutlined />
                        </a>
                    </Dropdown></div>
                    <div className="col-md-2 col-2"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href onClick={e => e.preventDefault()}>
                            Price Range<DownOutlined />
                        </a>
                    </Dropdown></div>
                    <div className="col-md-2 col-2"><Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href onClick={e => e.preventDefault()}>
                            See others Data<DownOutlined />
                        </a>
                    </Dropdown></div>
                
                </div>
                <hr></hr>

                
                    <div className="row mt-5">
                            <Card  className="LaunchCard1_shadow">
                                <p className="text-left mb-0">Surovi 8</p>
                                {/* <div className="mt-0">

                                    <ul class="nav justify-content-center ">
                                        <li class="nav-item px-5">
                                            <a class="nav-link " href="launch_search">8.00 PM</a>
                                        </li>
                                        <li class="nav-item px-5">
                                            <a class="nav-link" href="launch_search">4.30 AM</a>
                                        </li>
                                        <li class="nav-item px-5">
                                            <a class="nav-link" href="launch_search">4 hours</a>
                                        </li>
                                        <li class="nav-item px-5">
                                            <a class="nav-link" href="launch_search">500.00 - 4000.00</a>
                                        </li>


                                    </ul>
                                    <img src={yatch1} width="20px" height="20px" className="yatch1_div"></img>
                                </div> */}

                                <div className="row mt-5">
                                    <div className="col-md-3 col-3 t">8.00PM</div>
                                    <div className="col-md-3 col-3">4.30AM</div>
                                    <div className="col-md-3 col-3">4 hours</div>
                                    <div className="col-md-3 col-3">500.00 - 4000.00</div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-3 col-3 t">SadarGhat</div>
                                    <div className="col-md-3 col-3">Name</div>
                                    <div className="col-md-3 col-3">Direct</div>
                                    <div className="col-md-3 col-3">500.00 - 4000.00</div>
                                </div>

                                

                                <div className="row mt-5">
                                    <div className="col-md-3 ">
                                    <Link to="/launchPre_Booking">
                                    <button type="button" class="btnCard btn-success">Select Cabins/Seats</button> </Link></div>
                                    

                                </div>
                                <div className="mt-3">
                                    <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary >
                                            <Typography>Launch Details</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <LaunchCard2/>
                                           </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </Card>
                        
                    </div>
                </div>
            </div>
        )
    }


