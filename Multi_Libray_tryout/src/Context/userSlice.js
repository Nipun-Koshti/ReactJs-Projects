import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:"",
    access:"",
    token:"",
    email:""
}

const Userslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.username = action.payload.username;
            state.access = action.payload.access;
            state.token = action.payload.token;
            state.email = action.payload.email;
        }
        ,
        logout:(state)=>{
            state.username = "";
            state.email = "";
            state.token = "";
            state.access = "";
        }
    }

    

})

export const{login,logout}= Userslice.actions;

export default Userslice.reducer;