import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Second = () => {

    const {user} = useContext(UserContext)
  return (
    <div style={{color:"orange"}}>{user}</div>
  )
}

export default Second