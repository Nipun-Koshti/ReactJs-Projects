import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserProvider } from '../context/UserContext'

const View = () => {
  return (
    <UserProvider>
      <div >
          <h1>
              View
          </h1>
          
          <h1 style={{color:"orange"}}>hello</h1>
          <Outlet/>
          
      </div>
    </UserProvider>
  )
}

export default View