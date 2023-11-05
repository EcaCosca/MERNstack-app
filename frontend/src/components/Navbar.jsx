// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useLogout } from '../hooks/useLogout'
// import { useAuthContext } from '../hooks/useAuthContext'

// const Navbar = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();

//   const handleClick = async (e) => {
//     logout()
//   };

//   return (
//     <header>

//         <div className='container'>
//             <Link to='/' className='logo'>Exit Point</Link>
//             <Link to='/allExits' className='logo'>All Exits</Link>
//             <Link to='/addExit' className='logo'>Add Exit</Link>
//             <nav>
//               {user ? (<div>
//                 <Link to='/user' className='logo'>{user?.user.email}</Link>
//                 {/* <span>{user?.user.email}</span> */}
//                 <button onClick={handleClick} className='logo'>Log out</button>
//               </div>)
//               :
//               (<div>
//                 <Link to='/login' className='logo'>Login</Link>
//                 <Link to='/signup' className='logo'>Signup</Link>
//               </div>)
//               }
//             </nav>
//         </div>
//     </header>
//   )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = async (e) => {
    logout();
  };

  return (
    <nav className="flex justify-between px-20 py-10 items-center bg-white">
      <h1 className="text-xl text-gray-800 font-bold">Exit Point</h1>
      <div className="flex items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input className="ml-2 outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search..." />
        </div>
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700"><Link to="/">Home</Link></li>
          <li className="font-semibold text-gray-700"><Link to="/allExits">All Exits</Link></li>
              {user ? 
                (<div>
                  <li className="font-semibold text-gray-700"><Link to='/user' className='logo'>{user?.user.email}</Link></li>
                {/* <span>{user?.user.email}</span> */}
                <li className="font-semibold text-gray-700"><button onClick={handleClick} className='logo'>Log out</button></li>
               </div>)
               :
               (<div>
                <li className="font-semibold text-gray-700"><Link to='/login' className='logo'>Login</Link></li>
                <li className="font-semibold text-gray-700"><Link to='/signup' className='logo'>Signup</Link></li>
               </div>)
               }
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </li>
          <li onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
// import { useAuthContext } from '../hooks/useAuthContext';

// const Navbar = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleClick = async (e) => {
//     logout();
//   };

//   return (
//     <nav className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 items-center bg-white shadow-lg">
//       <div className="flex items-center">
//         <h1 className="text-xl text-gray-800 font-bold cursor-pointer">Exit Point</h1>
//         <div className="ml-4 sm:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 cursor-pointer"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             onClick={handleMenuToggle}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </div>
//       </div>
//       <div className={`sm:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="hidden sm:flex items-center space-x-6">
//           <Link to="/" className="font-semibold text-gray-700 hover:text-gray-900 transition duration-300">
//             Home
//           </Link>
//           <Link
//             to="/allExits"
//             className="font-semibold text-gray-700 hover:text-gray-900 transition duration-300"
//           >
//             All Exits
//           </Link>
//           {/* ... Other navigation links */}
//         </div>
//         <div className="flex items-center space-x-4 sm:space-x-6 ml-4 sm:ml-0">
//           <div className="flex items-center bg-gray-200 rounded-md p-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {/* Search icon path */}
//             </svg>
//             <input
//               className="ml-2 outline-none bg-transparent"
//               type="text"
//               name="search"
//               id="search"
//               placeholder="Search..."
//             />
//           </div>
//           {/* ... Other icons */}
//         </div>
//       </div>
//       <div
//         className={`${
//           isMenuOpen ? 'flex' : 'hidden'
//         } sm:hidden flex-col space-y-2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg`}
//       >
//         <Link
//           to="/profile"
//           className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
//         >
//           Profile
//         </Link>
//         <Link
//           to="/settings"
//           className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
//         >
//           Settings
//         </Link>
//         {/* ... Add more dropdown items as needed */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
