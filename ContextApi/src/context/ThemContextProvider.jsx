import { useState } from "react";
import ThemeContext from "./ThemContext";

const ThemContextProvider = ({children})=>{
    const [theme, setTheme] = useState("dark");
    
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}   
        </ThemeContext.Provider>
    )
}

export default ThemContextProvider