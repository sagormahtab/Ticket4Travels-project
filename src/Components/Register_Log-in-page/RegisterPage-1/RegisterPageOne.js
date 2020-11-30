import React from 'react'
import { Card } from 'antd';
// import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import WomenPIC from "../RegisterPage-1/images/women pic with background prj.png"
import Fb from "../RegisterPage-1/images/facebook.png"
import Google from "../RegisterPage-1/images/google-symbol.png"
import google_Store from "../RegisterPage-1/images/play store1.png"
import Apple_Store from "../RegisterPage-1/images/apple store2.jpg"
import "../RegisterPage-1/registerPage_one.css"
import useForm from "./useForm"
import validate from "./validateInfo"
import Button from '@material-ui/core/Button';





// const { Option } = Select;







function RegisterPage_one({ submitForm }) {


    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );


    return (
        <div>
            <div className="">
                <div className="row">
                    <div className="col-sm-6 col-md-6 ">
                        <div className="womeIMG_div"> <img src={WomenPIC} width="600px" height="450px" alt="" className="img-fluid"></img></div>
                        <div className="mt-5">
                            <img src={google_Store} width="110px" height="60px" alt="" className="img-fluid"></img>
                            <img src={Apple_Store} width="110px" height="45px" alt="" className="img-fluid"></img>
                        </div>
                        <p className="ml-5">Downlode Our app</p>


                    </div>
                    <div className="col-sm-6 col-md-6  mt-5">
                        <h2 className="text-left ml-2"><span className="ticekt-Text_Div2 m-0">Join</span> Us Become</h2>
                        <h2><span className="ticekt-Text_Div2 mt-0 ml-5">Tickets4Travel</span> Member</h2>

                        <div>
                            <Card style={{ width: 350 }} className="text-left">
                                {/* <h5>Mobile Number</h5> */}
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <h5>Mobile Number</h5>
                                        <input
                                           
                                            type="text"
                                            name="phone"
                                            class="form-control"
                                            placeholder="Enter phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                        />
                                       {errors.phone && <p>{errors.phone}</p>}

                                    </div>
                                    <div class="form-group">
                                        <h5>Email</h5>
                                        <input
                                            type="email"
                                            name="email"
                                            class="form-control"
                                            placeholder="Enter Email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                         {errors.email && <p>{errors.email}</p>}

                                    </div>
                                    {/* <div className=""> <button type="submit" class="btn btn-success mt-4 FormJoin_div">Join</button></div> */}
                                    <div className="mr-5"><Button type="submit" variant="contained" color="primary">
                                        Join
                                    </Button></div>
                                </form>






                                <div>

                                    <div className="mt-5 mr-5"><button type="button" class="btn btn-fb_button"><img src={Fb} width="20px" height="20px" alt="" className="img-fluid"></img> Register using Facbook</button>
                                    </div>
                                    <div className="mt-2"><button type="button" class="btn btn-fb_button"><img src={Google} width="20px" height="20px" alt="" className="img-fluid"></img> Register using Facbook</button>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <p>By clicking the button below Your agree to <span className="ticekt-Text_Div">Tickets4travel</span> <span className="ticekt-Text_Div2"> Terms & conditions </span> & <span className="ticekt-Text_Div2"> privacy poilicy</span></p>
                                </div>

                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default RegisterPage_one
