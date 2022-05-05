import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Multipleinput = () => {
    const [userRegistraction, setUserRegistraction] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });
    const [getdata, setGetdata] = useState('')
    const reload = () => {
        let getdata1 = JSON.parse(localStorage.getItem('data'))
        if (getdata1) {
            setGetdata(getdata1)
        }
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistraction({ ...userRegistraction, [name]: value })
        reload();
    }

    const handleSubmit = (e) => {
        let newAry = [...getdata]
        e.preventDefault();
        const newData = {
            ...userRegistraction,
            id: new Date().getTime().toString()
        }
        newAry?.push(newData)
        localStorage.setItem('data', JSON.stringify(newAry))
        setUserRegistraction({ username: '', email: '', phone: '', password: '' })
    }


    return (
        <>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">

                            <form action="" onSubmit={handleSubmit}>

                                <div>
                                    <label className="form-label" htmlFor="username">Fullname</label>
                                    <input className="form-control" type="text" value={userRegistraction.username} onChange={handleInput} name='username' id='username' />
                                </div><br />

                                <div>
                                    <label className="form-label" htmlFor="email">email</label>
                                    <input className="form-control" type="text" value={userRegistraction.email}
                                        onChange={handleInput} name='email' id='email' />
                                </div><br />

                                <div>
                                    <label className="form-label" htmlFor="phone">phone</label>
                                    <input className="form-control" type="text" value={userRegistraction.phone}
                                        onChange={handleInput} name='phone' id='phone' />
                                </div><br />

                                <div>
                                    <label className="form-label" htmlFor="password">password</label>
                                    <input className="form-control" type="text" value={userRegistraction.password}
                                        onChange={handleInput} name='password' id='password' />
                                </div><br />
                                <button type='submit'><Link to="/Login1">Registrction</Link></button>
                                <button type='button'><Link to="/Login1">Login</Link></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Multipleinput