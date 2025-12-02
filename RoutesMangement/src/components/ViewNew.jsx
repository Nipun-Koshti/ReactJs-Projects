import React from 'react'
import { useUser } from '../context/UserContext'

const ViewNew = () => {
    const {user} = useUser()
  return (
    <div>
        <h1>
            User - {user}
        </h1>
    </div>
  )
}

export default ViewNew