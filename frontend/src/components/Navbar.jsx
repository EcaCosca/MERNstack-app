import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>

        <div className='container'>
            <Link to='/' className='logo'>Exit Point</Link>
            <Link to='/allExits' className='logo'>All Exits</Link>
        </div>
    </header>
  )
}

export default Navbar