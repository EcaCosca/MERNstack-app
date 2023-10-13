import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// PAGES AND COMPONENTS
import Home from './pages/Home.jsx'
import AllExits from './pages/All Exits.jsx'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddExit from './pages/Add Exit'
import UserProfile from './pages/UserProfile'
import LandingPage from './pages/LandingPage'


function App() {
  const { user } = useAuthContext()

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={user ? <Home/> : <LandingPage/>} />
        <Route path="/allExits" element={user ? <AllExits/> : <Navigate to="/login"/>} />
        <Route path="/addExit" element={user ? <AddExit/> : <Navigate to="/login"/>} />
        <Route path="/user" element={user ? <UserProfile/> : <Navigate to="/login"/>} />
        <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>} />
        <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>} />
      </Routes>
    </>
  )
}

export default App
