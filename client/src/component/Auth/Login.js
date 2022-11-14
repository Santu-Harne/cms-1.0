import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useLogin from '../custom hooks/LoginValidate'

function Login(props) {
    const navigate = useNavigate()
    const { user, errors, readValue, setUser, initialState } = useLogin()

    const submitHandler = async (e) => {
        e.preventDefault() // to avoid page refresh
        try {
            if (Object.keys(errors).length === 0 && Object.keys(user) !== 0) {
                // console.log(`user = `, user)
                await axios.post('/api/v1/auth/login', user)
                    .then(res => {
                        console.log(`after login =`, res);
                        localStorage.setItem("loginToken", true)
                        toast.success(res.data.msg)
                        setUser(initialState)
                        // navigate('/')
                        window.location.href = '/'
                    }).catch(err => {
                        toast.error(err.response.data.msg)
                        // console.log(`error =`, err)
                    })
            } else {
                toast.error("Some errors are in form")
            }
        } catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-info">Login</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler} autoComplete='on'>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={user.email} onChange={readValue} className='form-control' required />
                                    {
                                        errors && errors.email ?
                                            (<div className="alert alert-danger">{errors.email}</div>) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" value={user.password} onChange={readValue} className='form-control' required />
                                    {
                                        errors && errors.password ?
                                            (<div className="alert alert-danger">{errors.password}</div>) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value={'Login'} className='btn btn-success' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login