import React from 'react'
import { Card } from 'antd';
import "../Sort-Results-part/sortResults.css"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Dropdown } from 'semantic-ui-react'
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';





// function onChange(checkedValues) {
//     console.log('checked = ', checkedValues);
// }

// const plainOptions = ['Highest price', 'lowest price', 'Review score', "Highest popularity"];
const cityList = [
    { title: 'Dhaka' },
    { title: 'narayangonj' },
];

// const options = [
//     { key: 1, text: 'Choice 1', value: 1 },
//     { key: 2, text: 'Choice 2', value: 2 },
//     { key: 3, text: 'Choice 3', value: 3 },
// ]

const { Option } = Select;





function Sort_Results() {
    return (
        <div>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Card title="Sort results" style={{ width: 320 }}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="form-check text-left">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Highest Price</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div class="form-check text-left">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Lowest price</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid mt-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="form-check text-left">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Review score</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div class="form-check text-left">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Highest popularity</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 form1">
                            <Autocomplete
                                id="combo-box-demo"
                                freeSolo
                                options={cityList}
                                getOptionLabel={(option) => option.title}
                                style={{ width: '300px' }}
                                renderInput={(params) => <TextField required {...params} label="City hotel place to go" variant="outlined" />}
                            />
                        </div>
                        <div className="col-md-3 form2">
                           
                                <Select placeholder="Total price" style={{width:"80%"}}>
                                    <Option value="per-room">Per Room,per Night</Option>
                                    <Option value="total-price">Total price</Option>
                                </Select>
                                
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sort_Results
