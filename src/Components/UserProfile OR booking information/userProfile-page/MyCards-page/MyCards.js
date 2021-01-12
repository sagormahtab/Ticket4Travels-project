import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function MyCards() {
    return (
        <div>
            <div className="container px-0">
                <h5 className="text-left">My Cards</h5>
                <div className="row mt-4">
                    <div className="col-md-6 col-6 ml-2">
                        <Card>
                            <CardContent>
                            <AddCircleIcon /> Add cards
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-md-6 col-6 ml-2 mt-3">
                        <Card>
                            <CardContent>
                            <AddCircleIcon /> Add cards
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCards
