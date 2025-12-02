import React from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const ViewTwo = () => {
    const { user, setUser } = useUser()
    const handeChange = (event) => {
        const value = event.target.value
        console.log('ViewTwo input:', user)
        setUser(value)
    }
     const navigate = useNavigate()

  return (
    <div>
        <label htmlFor="input"></label>
        <input id="input" type="text" value={user} onChange={handeChange} />


        <button onClick={() => navigate("/View")}>
        Go to View
      </button>
    </div>
  )
}

export default ViewTwo