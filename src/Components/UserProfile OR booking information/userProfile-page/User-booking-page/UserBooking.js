import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function UserBooking() {
    return (
        <div>
            <div className="container">
                <h5 className="text-left">My Bookings</h5>
                <div className="row mt-4">
                    <div className="col-md-12 col-12">
                        <Card >
                            <CardContent>
                                <FontAwesomeIcon icon={faPlusCircle} /><span> Add Booking</span>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default UserBooking
