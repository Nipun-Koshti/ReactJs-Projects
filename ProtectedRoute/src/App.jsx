import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes'
import { UserProvider } from './Context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
      
    </>
  )
}

export default App
