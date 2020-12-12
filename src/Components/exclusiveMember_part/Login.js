import React from 'react'
import "../exclusiveMember_part/login.css"
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                       <div className="col-md-12">
                           <h1 className="text-center font-weight-bold">Exclusivly For Tickets4Travel Member</h1>
                           <div className="text-center ">
                           <button type="button" class="btn btn-success reg1">Log in</button> <span className="text-center">OR</span> 
                           {/* <button type="button" class="btn btn-success lol1">Register</button><span className="font-weight-bold">to enjoy this benifit.</span> */}
                           <Link to="/login_form"><button type="button" class="btn btn-success reg1">Register</button></Link>


                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
