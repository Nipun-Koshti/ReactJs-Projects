import React from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children})=>{


    const[user,setUser]= React.useState(null)
    const[colour, setColur] = React.useState("Black")
    return(
        <UserContext.Provider value={{user,setUser,colour,setColur}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider