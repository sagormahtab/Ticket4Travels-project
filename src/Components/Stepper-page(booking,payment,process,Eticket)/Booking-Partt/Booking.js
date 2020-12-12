import React from 'react'
import { Radio } from 'antd';
import { Card } from 'antd';
import icon from "../Booking-Partt/images/ICOn.png"
import peopleIocn from "../Booking-Partt/images/people.png"
import cardIcon1 from "../Booking-Partt/images/plane.png"
import nxtPage from "../Booking-Partt/images/next.png"
import correctIcon from "../Booking-Partt/images/correct.png"
import "../Booking-Partt/booking.css"
import FormHandler from "../Booking-Partt/formHandler"
import { requiredValidation, minimumLengthValidation } from "../Booking-Partt/validators"






function Booking() {

    const FIELDS = {
        name: {
            value: "",
            validations: [requiredValidation, minimumLengthValidation(4)]
        },
        phone: {
            value: "",
            validations: [requiredValidation, minimumLengthValidation(11)]
        },
        email: {
            value: "",
            validations: [requiredValidation, minimumLengthValidation(3)]
        },
        fullname: {
            value: "",
            validations: [requiredValidation, minimumLengthValidation(6)]
        },
    };

    const {
        fields,
        // isSubmitting,
        // isSubmittable,
        handleChange,
        handleBlur,
        handleSubmit
    } = FormHandler(FIELDS);

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div>
                        <h2 className="text-left mb-0">Your Bookings</h2>
                        <p className="mt-2">Fill in your details and review bookings</p>
                    </div>
                    <div className="col-md-10 col-12 mt-5 booking_1stcard">
                        <Card  className="booking_Card1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-4 text-left ">
                                        <img src={icon} width="140px" height="170px" alt="" className="img-fluid"></img>
                                    </div>

                                    <div className="col-md-8 col-8 text-left mt-3 px-0">
                                        <p>Log in or register to enjoy this-member-only</p>
                                        <p><img src={peopleIocn} width="20px" height="20px" alt="" className="img-fluid"></img> Book fater and easier with passenger quick pick</p>
                                        <span className="color_change">Log in or Regiter</span>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-2  col-12 card2 mt-5 ">
                        <Card size="small" title="Flight to flight" className="booking_Card2">
                            <div className="img_div"><img src={cardIcon1} width="20px" height="20px" alt="" className="img-fluid"></img></div>
                            <p className="mt-3 lion_air">Wednesday <Radio>Radio</Radio> wed,16,25</p>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <p className="mb-0 lion_air">Lion Air</p>
                                    <p className="mt-0">promo</p>
                                </div>
                                <div className="col-md-6 col-12 text-right color_change">logo</div>

                                <div className="row time_part">
                                    <div className="col-md-4 col-4 ">18:03</div>
                                    <div className="col-md-4 col-4">21:20</div>
                                    <div className="col-md-4 col-4">1h30m</div>
                                    <div className="nxtpage"><img src={nxtPage} width="20px" height="20px" alt="" className="img-fluid"></img></div>
                                </div>

                                <div className="row direction_part">
                                    <div className="col-md-4 col-4 back1">18:03</div>
                                    <div className="col-md-4 col-4 back1">21:20</div>
                                    <div className="col-md-4 col-4 back2">1h30m</div>
                                </div>

                            </div>
                            <div className="txt_div mt-4"><img src={correctIcon} width="20px" height="20px" alt="" className="img-fluid"></img><span className="txtColor">Refandable</span></div>
                            <div className="txt_div mt-2"><img src={correctIcon} width="20px" height="20px" alt="" className="img-fluid"></img><span className="txtColor">Refandable</span></div>
                        </Card>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                    <h2 className="text-left">Your Information</h2>
                        <Card  className="booking_informationCard">
                            <form noValidate onSubmit={handleSubmit}>
                                <div className="form-group">
                                <h5 className="text-left">Contact name*</h5>
                                    <input
                                        aria-describedby="nameHelp"
                                        autoComplete="off"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={fields.name.value}
                                        placeholder="Enter name"
                                    />
                                    <small id="nameHelp" className="form-text text-muted text-left">
                                    As in Passport/Official ID Card (without title/special characters)
                                    </small>
                                    <small id="nameErrors" className="form-text text-danger">
                                        {fields.name.errors &&
                                            fields.name.errors.map(error => (
                                                <span>
                                                    {error}
                                                    <br />
                                                </span>
                                            ))}
                                    </small>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                    <h5 className="text-left">Mobile number*</h5>
                                    <input
                                        aria-describedby="phoneHelp"
                                        className="form-control"
                                        id="phone"
                                        autoComplete="off"
                                        name="phone"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={fields.phone.value}
                                        placeholder="number"
                                    />
                                    <small id="phoneHelp" className="form-text text-muted text-left">
                                    Mobile No. 0812345678
                                    </small>
                                    <small id="emailErrors" className="form-text text-danger">
                                        {fields.phone.errors &&
                                            fields.phone.errors.map(error => (
                                                <span>
                                                    {error}
                                                    <br />
                                                </span>
                                            ))}
                                    </small>
                                </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                    <h5 className="text-left">Email Address*</h5>
                                    <input
                                        aria-describedby="emailHelp"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={fields.email.value}
                                        placeholder="Enter email"
                                    />
                                    <small id="emailHelp" className="form-text text-muted text-left">
                                    e.g.: email@example.com
                                    </small>
                                    <small id="emailErrors" className="form-text text-danger">
                                        {fields.email.errors &&
                                            fields.email.errors.map(error => (
                                                <span>
                                                    {error}
                                                    <br />
                                                </span>
                                            ))}
                                    </small>
                                </div>
                                    </div>
                                </div>
                                <div className="form-group mt-5">
                                <h5 className="text-left">Full name*</h5>
                                    <input
                                        aria-describedby="nameHelp"
                                        autoComplete="off"
                                        className="form-control"
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={fields.fullname.value}
                                        placeholder="Enter Full fullname"
                                    />
                                    <small id="nameHelp" className="form-text text-muted text-left">
                                    Fill in your name as on ID card/passport/driving license (without title/special characters)
                                    </small>
                                    <small id="nameErrors" className="form-text text-danger">
                                        {fields.fullname.errors &&
                                            fields.fullname.errors.map(error => (
                                                <span>
                                                    {error}
                                                    <br />
                                                </span>
                                            ))}
                                    </small>
                                </div>
                                {/* <button
                                    className="btn btn-primary"
                                    type="submit"
                                    disabled={isSubmitting || !isSubmittable}
                                >
                                    Submit
                                </button> */}
                            </form>


                        </Card>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Booking
