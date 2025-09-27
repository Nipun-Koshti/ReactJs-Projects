import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todo, setTodo] = useState([])

  const  addtodo = (todo)=>{
    setTodo((prev)=> [{_id:Date.now(), ...todo},...prev])
  }

  const updatedTodo=(id,todo) =>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo._id=== id? todo : prevTodo)))
  }

  const deleteTodo = (id)=>{
    console.log(todo)
    setTodo((prev)=>prev.filter((todo)=> todo._id !== id))
  }

  const toggleComplete = (id)=>{
    setTodo((prev)=>prev.map((prevTodo)=> prevTodo._id===id? {...prevTodo, completed:!prevTodo.completed} : " prevTodo"))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodo(todos);
    }


  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo))
  },[todo])





  return (
    <TodoProvider value={{todo, addtodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((tod)=>(
              <div key={tod._id} className='w-full'>
                <TodoItem todo = {tod}/>

              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
