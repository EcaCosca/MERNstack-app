import { useState } from "react";
import { useSignup } from '../hooks/useSignup'

import React from 'react'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
        await signup(email, password);
    }

  return (
    <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

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

        <button disabled={isLoading} type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup