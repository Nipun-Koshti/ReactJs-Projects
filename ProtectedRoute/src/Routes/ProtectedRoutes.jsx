import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isLoggedIn = localStorage.getItem("userDetails");

    if(!isLoggedIn){
        return <Navigate to="/login"/>
    }
  return <Outlet/>
}

export default ProtectedRoutes