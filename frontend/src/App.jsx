import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// PAGES AND COMPONENTS
import Home from './pages/Home.jsx'
import AllExits from './pages/All Exits.jsx'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allExits" element={<AllExits/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  )
}

export default App
