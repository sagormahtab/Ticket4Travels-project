import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import "../LaunchSearchResult-part/LaunchSearchR.css"


const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('A.R Khan 1', 10.00, 6.0, 24),
    createData('Bay Cruise SPL', 10.30, 9.0, 37),
    createData('Bay Cruise SPL.', 10.50, 16.0, 24),
    createData('MV Green Line Return', 11.00, 3.7, 67),
    createData('MV Karnafully 11', 12.00, 16.0, 49),
];

function LaunchSearchR() {

    const classes = useStyles();

    return (
        <div>
            <div className="container">
                <Card>
                    <CardContent>
                        <div className="d-flex  align-items-center">
                            <FontAwesomeIcon icon={faArrowRight} size="2x" /> <span className="ml-3"> Dhaka - Chalitabunia on 24-January, 2021</span>
                        </div>
                        <hr></hr>

                        <div className="Departure-title">
                            <h4 className="ml-4">Departure</h4>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-2 col-lg-2 col-sm-2 col-4">
                                <Button variant="outlined" color="primary" size="small">
                                    <FontAwesomeIcon icon={faArrowLeft} /> <span className="ml-2">Prev Day</span>
                                </Button>
                            </div>
                            <div className="col-md-2 col-lg-2 col-sm-2 col-4">
                                <Button variant="outlined" color="primary" size="small">
                                    <FontAwesomeIcon icon={faArrowRight} /> <span className="ml-2">Prev Day</span>
                                </Button></div>
                            <div className="col-md-2 col-lg-2 col-sm-2 col-4">
                                <Button variant="outlined" color="primary" size="small">
                                    <FontAwesomeIcon icon={faSearch} /> <span className="ml-2">Prev Day</span>
                                </Button>
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                                <TableContainer component={Paper}>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow style={{ backgroundColor: "#E4E4E5", }}>
                                                <TableCell>Launch / Ship</TableCell>
                                                <TableCell align="right">Dep. Time</TableCell>
                                                <TableCell align="right">Arr. Time</TableCell>
                                                <TableCell align="right">Fare Range</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                    <TableCell align="right">{row.fat}</TableCell>
                                                    <TableCell align="right">{row.carbs}</TableCell>
                                                    <TableCell align="right">{row.protein}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>


                        <div className="row mt-4">
                            <div className="col-md-2 col-lg-2 col-sm-2 col-4">
                                <Button variant="outlined" color="primary" size="small">
                                    <FontAwesomeIcon icon={faArrowLeft} /> <span className="ml-2">Prev Day</span>
                                </Button>
                            </div>
                            <div className="col-md-2 col-lg-2 col-sm-2 col-4">
                                <Button variant="outlined" color="primary" size="small">
                                    <FontAwesomeIcon icon={faArrowRight} /> <span className="ml-2">Prev Day</span>
                                </Button></div>
                        </div>


                        {/* <div className="row mt-5">
                            <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                                <h5>Available Launches</h5>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                                <h5>Connect with Us</h5>
                            </div>
                        </div> */}
                        <hr></hr>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default LaunchSearchR
