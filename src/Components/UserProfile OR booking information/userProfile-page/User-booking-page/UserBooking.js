import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function UserBooking() {
    return (
        <div>
            <div className="container">
            <h5 className="text-left">My Bookings</h5>
                <div className="row mt-4">
                    <div className="col-md-6 col-6">
                        <Card style={{width: "200px"}}>
                            <CardContent>
                            <AddCircleIcon /> Add Booking
                            </CardContent>
                    </Card>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default UserBooking
