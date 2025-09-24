import { createContext } from "react";

import './App.css'
import CompA from './component/CompA';
import FetchDataEffect from './component/FetchDataEffect';
import Props from './component/Props';
import UserList from './component/userList';
import UserProfile from "./component/UserProfile";
import { UserProvider } from "./component/UserContext";
import UpdateUser from "./component/UpdateUser";
import HiddenSearchBar from "./component/HiddenSearchBar";

export const Data = createContext()

function App() {
  
  const name = "Nipun";

  return (
    <HiddenSearchBar/>
   
  );
}

export default App
