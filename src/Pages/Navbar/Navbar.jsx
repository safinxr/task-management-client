import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { ContextAuth } from '../../Context/Context';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(true);
    const { user, logOut, shortLoading, setLoading } = useContext(ContextAuth)
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const signOut = () => {
        logOut()
    }

    return (
        <nav x-data="{ isOpen: false }" className="relative bg-white shadow ">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img className="w-auto h-6 sm:h-7" src={logo} alt="" />
                    </a>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link to='/' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" >Home</Link>

                        <Link to='/dashboard' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" >Dashboard</Link>

                        {
                            shortLoading ? <><p>...</p></> : user ? <button className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" onClick={signOut}>Sign Out</button>
                            :<>
                                    <Link to='/signin' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" >Sign In</Link>

                                    <Link to='/signup' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" >Sign Up</Link>
                            </>
                        }

                       
                       
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
