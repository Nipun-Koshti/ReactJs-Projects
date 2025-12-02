import React from 'react'
import {Outlet} from 'react-router-dom'

const BaseOutlet = () => {
  return (
    <div>
        <div>
            <p>Mai ek navbar hooooooo...........</p>
        </div>
        <Outlet/>
    </div>
  )
}

export default BaseOutlet