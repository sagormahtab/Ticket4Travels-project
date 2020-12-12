import React from 'react'
import { Card } from 'antd';
import UsrPNGG from "../userCard/images/user.png"
import "../userCard/userCard.css"


function UserCard() {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-4"><Card style={{ width: 250 }} className="userCard-back">
                        <div className="row">
                            <div className="col-md-6 col-6"><img src={UsrPNGG} height="30px" width="30px" alt="" className="img-fluid"></img></div>
                            <div className="col-md-6 col-6">
                                <h5>Ismail Hosain</h5>
                                <p>name@gmail.com</p>
                            </div>
                        </div>
                    </Card></div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
