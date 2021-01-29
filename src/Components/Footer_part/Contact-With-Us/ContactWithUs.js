import { Button, Card, CardContent } from '@material-ui/core'
import React, { useState } from 'react';
import contactUsImg from "./images/contactUs.png"


const ContactWithUs = () => {

    const [data, setData] = useState({
        id: "",
        fullname: "",
        email: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        alert(`Any updates will be sent to you via ${data.email} who is the owner of ${data.id} id and ${data.fullname} is your name. Please submit your form only once. Thank you for your understanding. `)
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={contactUsImg} alt="Contact-with-us" className="img-fluid mx-auto d-block"></img>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                    <Card>
                        <CardContent>
                            <h3>Please share the details</h3>
                            <form className="mt-5" onSubmit={formSubmit}>
                                <div>
                                    <label for="validationDefault01" className="form-label" style={{ fontWeight: "bold" }}>Enter Your Tickets4travel's Id</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationDefault01"
                                        required
                                        name="id"
                                        value={data.id}
                                        onChange={InputEvent}
                                    />
                                </div>

                                <div className="mt-3">
                                    <label for="validationDefault04" className="form-label" style={{ fontWeight: "bold" }}>Select Product</label>
                                    <select
                                        className="form-select"
                                        id="validationDefault04"
                                        required style={{ width: "100%" }}
                                    >
                                        <option selected disabled value="">Select Services</option>
                                        <option>Bus</option>
                                        <option>Hotel</option>
                                        <option>Launch</option>
                                    </select>
                                </div>

                                <div className="mt-3">
                                    <label for="validationDefault01" className="form-label" style={{ fontWeight: "bold" }}>Enter Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefault01"
                                        required
                                        name="fullname"
                                        value={data.fullname}
                                        onChange={InputEvent} />
                                </div>

                                <div className="mt-3">
                                    <label for="validationDefault01" className="form-label" style={{ fontWeight: "bold" }}>Enter Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="validationDefault01"
                                        required
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent} />
                                </div>

                                <div className="mt-3">
                                    <label for="validationDefault01" className="form-label" style={{ fontWeight: "bold", }}>Tell us your concerns</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        required >
                                    </textarea>
                                    <small className="form-text text-muted">The more we know, the more we would be able to help you.</small>
                                </div>

                                <div className="mt-3">
                                    <label for="exampleFormControlFile1" style={{ fontWeight: "bold", }}>Example file input</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="exampleFormControlFile1" />
                                </div>

                                <div className="mt-4">
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: "#30dd89", padding: "13px", }}
                                        type="submit"
                                        fullWidth>Submit</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ContactWithUs
