import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export default UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(()=>localStorage.getItem("user")||"Normal");

  useEffect(()=>{
    localStorage.setItem("user",user)
  },[user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};  

export { UserProvider };

const useUser = function () {
  return useContext(UserContext);
};

export { useUser };
