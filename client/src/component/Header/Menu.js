import React, { } from 'react'
import { NavLink } from 'react-router-dom'

function Menu(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                <div className="container">
                    <NavLink to={'/'} className='navbar-brand'>CMS_v1.0</NavLink>

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={'/'} className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/about'} className='nav-link'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/contact'} className='nav-link'>Contact</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to={'/login'} className='nav-link'>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/register'} className='nav-link'>Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu