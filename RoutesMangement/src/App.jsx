import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import BaseOutlet from './Outlets/BaseOutlet'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import View from './components/View'
import ViewOne from './components/ViewOne'
import ViewNew from './components/ViewNew'
import ViewTwo from './components/ViewTwo'
function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route path='/' element={<BaseOutlet/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='View' element={<View/>}>
          <Route index element={<ViewNew/>}/>
          <Route path='one' element={<ViewOne/>}/>
          <Route path='two' element={<ViewTwo/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
