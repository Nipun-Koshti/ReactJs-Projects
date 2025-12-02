import { useState } from "react";
import "./App.css";
import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";
import Hello from "./pages/Hello";
import Second from "./pages/Second";
import Third from "./pages/Third";
import ThemContextProvider from "./context/ThemContextProvider";
import { BgContextProvider } from "./context/BgContextProvider";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";
import { FoodProvider } from "./context/FoodContextProvider";
import Food from "./pages/Food";
import FoodUdate from "./pages/FoodUdate";


function App() {
  const [count, setCount] = useState(0);

  const change =()=>{
    
  }

  return (
    <>
      <ThemContextProvider>
        <UserContextProvider>
          <Hello />
          <Second />
          <Third />
        </UserContextProvider>
      </ThemContextProvider>
      <BgContextProvider>
        <Fourth />
        <Fifth />
      </BgContextProvider>
      <FoodProvider value={{Food,change}}>
        <Food/>
        <FoodUdate/>
      </FoodProvider>
      

    </>
  );
}

export default App;
