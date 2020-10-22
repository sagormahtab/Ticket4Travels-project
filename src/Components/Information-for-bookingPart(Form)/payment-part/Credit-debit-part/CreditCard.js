import React from 'react'
import FormHandler1 from "../Credit-debit-part/formHandler1"
import { requiredValidation, minimumLengthValidation } from "../Credit-debit-part/validators1"
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import "../Credit-debit-part/creditCard.css"
import visaLOGO from "../Credit-debit-part/images/visa-logo.svg"
import masterLOGO from "../Credit-debit-part/images/mastercard.svg"
import bkashLOGO from "../Credit-debit-part/images/BKash-Icon2-Logo.wine.svg"

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = value => {
    return `custom format: ${value.format(dateFormat)}`;
};

function CreditCard() {

    const FIELDS = {
        number: {
            value: "",
            validations1: [requiredValidation, minimumLengthValidation(4)]
        },
        phone: {
            value: "",
            validations1: [requiredValidation, minimumLengthValidation(11)]
        },
        cvv: {
            value: "",
            validations1: [requiredValidation, minimumLengthValidation(3)]
        },
        fullname: {
            value: "",
            validations1: [requiredValidation, minimumLengthValidation(6)]
        },
    };

    const {
        fields,
        isSubmitting,
        isSubmittable,
        handleChange,
        handleBlur,
        handleSubmit
    } = FormHandler1(FIELDS);

    return (
        <div>
            <div className="row">
                <div className="col-md-3">Credit/Debit Card</div>
                <div className="col-md-3 text-right"><img src={visaLOGO} alt="visaLOGO" width="40px" height="40px"></img></div>
                <div className="col-md-3 "><img src={masterLOGO} alt="masterLOGO" width="40px" height="40px"></img></div>
                <div className="col-md-3 text-left"><img src={bkashLOGO} alt="bkashLOGO" width="40px" height="40px"></img></div>
            </div>
            <form noValidate onSubmit={handleSubmit} className="mt-5">
                <div className="form-group">
                    <h5 className="text-left">Card number*</h5>
                    <input
                        aria-describedby="nameHelp"
                        autoComplete="off"
                        className="form-control"
                        id="number"
                        name="number"
                        type="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={fields.number.value}
                        placeholder="Enter card number"
                    />
                    <small id="numberErrors" className="form-text text-danger">
                        {fields.number.errors &&
                            fields.number.errors.map(error => (
                                <span>
                                    {error}
                                    <br />
                                </span>
                            ))}
                    </small>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6">

                        <h5 className="text-left mt-2">Valid till**</h5>
                        <div className="DatapickerDiv">
                        <Space direction="vertical" size={12} >
                            <DatePicker placeholder="MM/YY" format={dateFormat} />
                        </Space>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mt-2">
                        <div className="form-group">
                            <h5 className="text-left">CVV*</h5>
                            <input
                                aria-describedby="emailHelp"
                                className="form-control"
                                autoComplete="off"
                                id="cvv"
                                name="cvv"
                                type="cvv"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={fields.cvv.value}
                                placeholder="Enter cvv"
                            />
                            <small id="emailErrors" className="form-text text-danger">
                                {fields.cvv.errors &&
                                    fields.cvv.errors.map(error => (
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
                    <h5 className="text-left">Name on Card*</h5>
                    <input
                        aria-describedby="nameHelp"
                        autoComplete="off"
                        name="form-control"
                        id="fullname"
                        fullname="fullname"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={fields.fullname.value}
                        placeholder="Enter name on card"
                    />
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
                <div className="mt-5">
                    <hr></hr>
                    <h5 className="text-left">Choose instalment plan</h5>
                    <p className="text-left">3x, 8x, 12x installment available for certain banks or transiction amount.</p>
                    <a href="#" className="text-right">Learn more</a>
                    <hr></hr>
                </div>

                <div className="Credit_amountpart">
                <h5 className="text-left">Price Details</h5>
                    <div className="row">
                        <div className="col-md-6">Lion Air(Adults)x1</div>
                        <div className="col-md-6">Amounts</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">CGK-DPS</div>
                        <div className="col-md-6">Amounts</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">Service fee</div>
                        <div className="col-md-6">Amounts</div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">Total price</div>
                        <div className="col-md-6">Amounts</div>
                    </div>
                </div>
                <div className="mt-5">
                    <p>By clicking the button below, You agree to <span className="credit_1sttxt">Tickets4travel's</span> <span className="credit_2ndttxt">Terms & conditions</span> and <span className="credit_2ndttxt">privacy policy</span></p>
                </div>
            </form>
        </div>
    )
}

export default CreditCard
