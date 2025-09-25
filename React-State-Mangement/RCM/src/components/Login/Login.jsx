import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext';

const Login = () => {
    const [user , setUser] = useState("");
    const [pass , setPass] = useState("");

    const {setAlpha} = useContext(UserContext);

    function handelSubmit(e){
        e.preventDefault()

        setAlpha(user);
        setUser("");
        setPass("");


    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='username' value={user} onChange={(e) => setUser(e.target.value)} />
      <input type='text' placeholder='password' value={pass} onChange={(e) => setPass(e.target.value)}/>
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
