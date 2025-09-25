import React from 'react'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const Profile = () => {

    const {alpha} = useContext(UserContext);

    if(!alpha){
        return <div> Invalid Data</div>
    }
  return (
    <div>
      Welcome {alpha.user}
    </div>
  )
}

export default Profile
