import React from 'react'
import pic1 from "../booking Document_part/images/Best-Price.png"
import pic2 from "../booking Document_part/images/best-Price-Gurranty.png"
import pic3 from "../booking Document_part/images/Key.png"
import pic4 from "../booking Document_part/images/Real-Guest-Review.png"
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
                    <div className="col-md-10 col-8 mt-5">
                    <h5 className="text">Various payment</h5>
                    <p>Easy and hassle free payment methods available in Tickets4Travel from ATM Transfer, Credit Card, to Internet Banking. </p>
                    </div>
                </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-10 col-8 mt-5 special-dis-text">
                        <h5 className="text">Special Discounts</h5>
                    <p >
                    Lucrative discounts and hotels offers for our customers, newsletter subscribers and Tickets4Travel members.
                        </p>
                        </div>
                        <div className="col-md-2 col-4 special-discount">
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
                    <h5 className="text">Best Price Guaranteet</h5>
                    <p>From budget friendly to official price offers in hotels and transportation tickets guaranteed. </p>
                    </div>
                </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-10 col-8 special-dis-text">
                        <h5 className="text">Various payment </h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                        </div>
                        <div className="col-md-2 col-4 pic best-price">
                    <img src={pic4} height="250px" width="230px" className="img-fluid"  alt=""></img>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book
