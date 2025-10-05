import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


import { Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainRoutes from "./RoutesLayout/MainRoutes";

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<MainRoutes/>}>
        <Route index element ={<Home/>}/>
        <Route path='contact' element ={<Contact/>}/>
        <Route path='about' element ={<About/>}/>
        <Route path='Login' element ={<Login/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider  router={routes}/>
    </>
  );
}

export default App;
