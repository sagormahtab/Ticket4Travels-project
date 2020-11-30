import React from 'react'
import { Card } from 'antd';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function MyCards() {
    return (
        <div>
            <div className="container px-0">
            <h5 className="text-left">My Cards</h5>
                <div className="row mt-4">
                    <div className="col-md-6 col-6 ml-2"><Card style={{ width: 100 }}>
                        <AddCircleIcon/> Add cards
                    </Card></div>
                    <div className="col-md-6 col-6 ml-2"><Card style={{ width: 100 }}>
                    <AddCircleIcon/> Add cards
                    </Card></div>
                </div>
            </div>
        </div>
    )
}

export default MyCards
