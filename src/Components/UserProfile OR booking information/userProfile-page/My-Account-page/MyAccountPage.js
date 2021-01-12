import React from 'react'
import { Card,CardContent,Checkbox  }from '@material-ui/core';
import bellPNG from "../My-Account-page/images/bell.png"
import userLOGO from "../My-Account-page/images/user.png"
import "../My-Account-page/myAccount_page.css"
import colorPENCIL from "../My-Account-page/images/color-pencil.png"
import settingPNG from "../My-Account-page/images/setting.png"
import phonePaymentNGG from "../My-Account-page/images/mobile-payment.png"
import emailPNG from "../My-Account-page/images/email.png"
import socialNetwork from "../My-Account-page/images/social-network.png"
import facbookPNGG from "../My-Account-page/images/facebook.png"
import gOOGLEpng from "../My-Account-page/images/google.png"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



function MyAccount_page() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-5 accountTab">
                        <div>
                            <Card className="myAccount_pageCardShadow">
                                <CardContent>
                                <p> <img src={bellPNG} width="30px" height="30px" alt="" className="img-fluid"></img>Want to receive updates on New log in and others account activities?</p>
                                <div className="text-right"><button type="button" class="btn btn-primary">Allow Dekstop notification</button></div>
                                </CardContent>
                            </Card>
                        </div>

                        <div>
                            <Card className="myAccount_pageCardShadow mt-4">
                                <CardContent>
                                <div className="row">
                                    <div className="col-md-3"><img src={userLOGO} width="20px" height="20px" alt="" className="img-fluid"></img>MD.Ismail Hossain</div>
                                    <div className="col-md-5 text-right"><button type="button" class="btn btn-primary"><img src={colorPENCIL} width="20px" height="20px" alt="" className="img-fluid"></img>Update Profile</button></div>
                                    <div className="col-md-4 text-right"><button type="button" class="btn btn-primary">Update Profile</button></div>
                                </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <Card className="myAccount_pageCardShadow mt-4">
                                <CardContent>
                                    <div className="row">
                                        <div className="col-md-2 text-left"><img src={settingPNG} width="20px" height="20px" alt="" className="img-fluid"></img></div>
                                        <div className="col-md-10">
                                            <h5 className="text-left ">Enable log in Verification code?</h5>
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />Send me verification code every time when log in from new device
                                    </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <Card className="myAccount_pageCardShadow mt-4">
                                <CardContent>
                                <div className="row">
                                    <div className="col-md-2 text-left"><img src={phonePaymentNGG} width="20px" height="20px" alt="" className="img-fluid"></img> </div>
                                    <div className="col-md-5 text-left"><h5>Phone</h5>
                                    <p>Mobile number to receive accounts verification-code</p> </div>
                                    
                                    <div className="col-md-5 text-right"><button type="button" class="btn btn-primary"><AddCircleOutlineIcon/>phone</button></div>
                                </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div>
                            <Card className="myAccount_pageCardShadow mt-4">
                                <CardContent>
                                <div className="row">
                                    <div className="col-md-2 text-left"><img src={emailPNG} width="20px" height="20px" alt="" className="img-fluid"></img></div>
                                    <div className="col-md-10 text-left">
                                        <h5 className=" ">Email Address</h5>
                                        <p>Email address to receive account related notification</p>
                                        
                                    </div>
                                </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <Card className="myAccount_pageCardShadow mt-4">
                                <CardContent>
                                <div className="row">
                                    <div className="col-md-2 text-left"><img src={socialNetwork} width="20px" height="20px" alt="" className="img-fluid"></img></div>
                                    <div className="col-md-10 text-left">
                                        <h5 className=" ">Linked Account</h5>
                                        <p>For an easier log in connect your social accounts with Tickets4travel</p>    
                                    </div>
                                </div>
                                </CardContent>
                            </Card>
                            <Card className="myAccount_pageCardShadow mt-3">
                                <CardContent>
                                <div className="row">
                                    <div className="col-md-6 text-left"><img src={facbookPNGG} width="20px"  height="20px" alt="" className="img-fluid"></img> Facebook</div>
                                    <div className="col-md-6 text-right"><a href="lol">Link Account</a></div>
                                </div>
                                <div className="row">
                                <div className="col-md-6 text-left"><img src={gOOGLEpng} width="20px"  height="20px" alt="" className="img-fluid"></img> Google</div>
                                    <div className="col-md-6 text-right"><a href="lol">Link Account</a></div>
                                </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount_page
