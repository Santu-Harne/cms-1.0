import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useRegister from '../custom hooks/RegisterValidate'


function Register(props) {
    const navigate = useNavigate()
    const { contact, errors, readValue, setContact, initialState } = useRegister()


    // submit handler function
    const submitHandler = async (e) => {
        e.preventDefault() // to avoid page refresh
        try {
            if (Object.keys(errors).length === 0 && Object.keys(contact) !== 0) {
                console.log(`new contact = `, contact)
                await axios.post('/api/v1/auth/register', contact)
                    .then(res => {
                        console.log(`after register =`, res.data.data);
                        toast.success(res.data.msg)
                        setContact(initialState)
                        navigate('/login')
                    }).catch(err => toast.error(err.message))
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
                    <h3 className="display-3">Register</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler} autoComplete='on'>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={contact.name} onChange={readValue} className='form-control' required />
                                    {
                                        errors && errors.name ?
                                            (<div className="alert alert-danger">{errors.name}</div>) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={contact.email} onChange={readValue} className='form-control' required />
                                    {
                                        errors && errors.email ?
                                            (<div className="alert alert-danger">{errors.email}</div>) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" value={contact.mobile} onChange={readValue} className='form-control' required />
                                    {
                                        errors && errors.mobile ?
                                            (<div className="alert alert-danger">{errors.mobile}</div>) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" value={contact.password} onChange={readValue} className='form-control' required />
                                    {
                                        errors && errors.password ?
                                            (<div className="alert alert-danger">{errors.password}</div>) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value={'Submit'} className='btn btn-warning' />
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