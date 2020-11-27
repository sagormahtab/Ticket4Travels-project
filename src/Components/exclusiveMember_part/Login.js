import React from 'react'
import "../exclusiveMember_part/login.css"

function Login() {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                       <div className="col-md-12">
                           <h1 className="text-center font-weight-bold">Exclusivly For Tickets4Travel Member</h1>
                           <div className="text-center lol2">
                           <button type="button" class="btn btn-success lol1">Log in</button> <span className="text-center">OR</span> <button type="button" class="btn btn-success lol1">Register</button><span className="font-weight-bold">to enjoy this benifit.</span>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
