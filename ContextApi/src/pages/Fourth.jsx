import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import BgContext from '../context/BgContextProvider'

const Fourth = () => {
    const bg = useContext(BgContext)

  return (
    <div>
        <h2>I plead the fourth</h2>
        <p>
            {bg}
        </p>
    </div>
  ) 
}

export default Fourth