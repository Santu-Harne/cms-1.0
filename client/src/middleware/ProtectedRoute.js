import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { DataContext } from '../GlobalContext';

function ProtectedRoute(props) {

    const context = useContext(DataContext)
    const [token] = context.token


    return (
        <React.Fragment>
            {
                token ? <Outlet /> : <Navigate to={'/login'} />
            }
        </React.Fragment>
    )
}

export default ProtectedRoute