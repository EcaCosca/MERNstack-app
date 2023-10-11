import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>

        <div className='container'>
            <Link to='/' className='logo'>Exit Point</Link>
            <Link to='/allExits' className='logo'>All Exits</Link>
            <nav>
              <div>
                <Link to='/login' className='logo'>Login</Link>
                <Link to='/signup' className='logo'>Signup</Link>
              </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar