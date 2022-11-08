import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Register(props) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    })

    const readValue = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            console.log(`user = `, user)
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Register</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-m">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler} autoComplete='on'>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={user.name} onChange={readValue} className='form-control' required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={user.email} onChange={readValue} className='form-control' required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" value={user.mobile} onChange={readValue} className='form-control' required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" value={user.password} onChange={readValue} className='form-control' required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value={'Submit'} className='btn btn-success' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register