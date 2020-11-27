import React from 'react'
import pic1 from "../booking Document_part/images/5-star.png"
import pic2 from "../booking Document_part/images/4.png"
import pic3 from "../booking Document_part/images/key-icon.png"
import pic4 from "../booking Document_part/images/icon-3-(1).png"
import "../booking Document_part/book.css"

function Book() {
    return (
        <div>
            <div className="header text-center mt-5">
                <h1>Why Book with us?</h1>
            </div>

            <div className="">
                <div className="container">
                <div className="row">
                    <div className="col-md-2 col-4">
                    <img src={pic1} height="250px" width="230px" className="img-fluid" alt=""></img>
                    </div>
                    <div className="col-md-10 col-8 text_part">
                    <h5 className="text">Various payment</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                    </div>
                </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-10 col-8 ">
                        <h5 className="text">Various payment</h5>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                        </div>
                        <div className="col-md-2 col-4 pic">
                    <img src={pic2} height="250px" width="230px" className="img-fluid"  alt=""></img>
                    </div>
                    </div>
                </div>

                <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2 col-4 ">
                    <img src={pic3} height="250px" width="200px" className="img-fluid"  alt=""></img>
                    </div>
                    <div className="col-md-10 col-8 text_part">
                    <h5 className="text">Various payment</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                    </div>
                </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-10 text_part2 col-8">
                        <h5 className="text">Various payment</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                        </div>
                        <div className="col-md-2 col-4 pic">
                    <img src={pic4} height="250px" width="230px" className="img-fluid"  alt=""></img>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book
