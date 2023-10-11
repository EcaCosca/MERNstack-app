import { useState } from "react";

import React from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password);
    }

  return (
    <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>

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

        <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
    </form>
  )
}

export default Login