import React from "react";

import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    const [alpha,setAlpha] = React.useState(null)
  return (
    <UserContext.Provider value={{alpha ,setAlpha}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
