import { useState } from "react";

import React from 'react'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password);
    }

  return (
    <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <lable>Email</lable>
        <input 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
        />
        <lable>Password</lable>
        <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
        />

        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
    </form>
  )
}

export default Signup