import React, { createContext,useContext } from "react";

const FoodContext = createContext({
    Food:"Bhelpuri",
    change: ()=>{}
})

const FoodProvider = FoodContext.Provider;

export {FoodProvider}

export default function useFood(){
    return useContext(FoodContext)
}