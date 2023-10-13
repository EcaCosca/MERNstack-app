import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = async (e) => {
    logout()
  };

  return (
    <header>

        <div className='container'>
            <Link to='/' className='logo'>Exit Point</Link>
            <Link to='/allExits' className='logo'>All Exits</Link>
            <Link to='/addExit' className='logo'>Add Exit</Link>
            <nav>
              {user ? (<div>
                <Link to='/user' className='logo'>{user?.user.email}</Link>
                {/* <span>{user?.user.email}</span> */}
                <button onClick={handleClick} className='logo'>Log out</button>
              </div>)
              :
              (<div>
                <Link to='/login' className='logo'>Login</Link>
                <Link to='/signup' className='logo'>Signup</Link>
              </div>)
              }
            </nav>
        </div>
    </header>
  )
}

export default Navbar