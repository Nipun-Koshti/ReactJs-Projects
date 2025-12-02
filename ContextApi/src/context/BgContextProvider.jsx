import { createContext } from "react";
import { useState } from "react";

const BgContext = createContext();

export default BgContext;


const BgContextProvider = ({children})=>{
    const [bg, setBg] = useState("red");

    return (
        <BgContext.Provider value={[bg,setBg]}>
            {children}
        </BgContext.Provider>
    );
}

export { BgContextProvider };