import { useState } from 'react'


import {  Routes, Route } from "react-router-dom";
import Login from './Login';
import About from './About';
import Home from './Home';
function App() {


  return (
    <>
  <Routes>
<Route path='/'  element={<Login/>}   />
<Route path='/home'  element={<Home/>}   />
<Route path='/About'  element={<About/>}   />

  </Routes>
      
    </>
  )
}

export default App
