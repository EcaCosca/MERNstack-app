import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

import React from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password);
    }

  return (
    <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>

        <label>Email</label>
        <input 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
        />
        <label>Password</label>
        <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
        />

        <button disabled={isLoading} type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login