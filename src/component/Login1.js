import React from 'react'
import { Link } from "react-router-dom";

function Login1() {
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">
                            <form>
                                <p>Please login to your account</p>
                                <div className="form-outline mb-4">
                                    <input type="email" className="form-control"
                                        placeholder="username" />
                                    <label className="form-label" htmlFor="">Username</label>
                                </div>

                                <div className="form-outline mb-2">
                                    <input type="password" className="form-control" placeholder="password" />
                                    <label className="form-label" htmlFor="">Password</label>
                                </div>

                                <div className="text-center pt-1 mb-5 pb-1">
                                    <button type="button"><Link to="/Todos"> Login</Link> </button>
                                    <button type="button"><Link to="/Multipleinput">Signup</Link></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login1;
