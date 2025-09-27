import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
            _id:1,
            subject:"msg",
            completed:false
        }
    ],

    addtodo: (todo)=>{},
    updatedTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},    
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider