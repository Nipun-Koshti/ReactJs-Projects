import React, { useContext } from 'react'
import ThemeContext from '../context/ThemContext'
import UserContext from '../context/UserContext'

const Hello = () => {
    const theme = useContext(ThemeContext)
    const {user, setUser}= useContext(UserContext)

    const handelChange = (e)=>{
        e.preventdfault;

    }

  return (

    
    <div>
        <h1>
            {user}
        </h1>
        <label htmlFor="name">Name</label>
        <input type='text' id='name' placeholder='Enter your name' onChange={(e)=>setUser(e.target.value)}/>
    </div>

  )
}

export default Hello