
import 'flowbite';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ComNavbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const [isUserVisible, setUserVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  } 

  const userDropdown = () => {
    setUserVisible(!isUserVisible);
  } 

  
  
    return(
        <>
        <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900 p-5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                       {/* <img src="/img/ojs_brand.png" class="h-14 me-3" alt="ojs-brand" /> */}
                       {/* <span className="self-center text-sky-800 text-base mb-2 md:text-xl lg:text-2xl xl:text-3xl font-bold dark:text-white">
                          20th International Conference on Intelligent Unmanned Systems (ICIUS 2024)
                        </span> */}

                        <span className="self-center text-sky-800 text-base mb-2  md:text-xl  md:whitespace-nowrap font-bold dark:text-white">20th International Conference on Intelligent Unmanned Systems (ICIUS 2024)</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                       <Link to="/register" className="text-sm hover:text-gray-900 text-gray-500 dark:text-white hover:border-b-2 border-sky-800">
                            Register
                        </Link>
                        {/* <Link to="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline"> */}
                        <Link to="/login" className="text-sm hover:text-gray-900 text-gray-500 dark:text-white hover:border-b-2 border-sky-800">
                            Login
                        </Link>
                        <div>
                            <button
                            onClick={userDropdown}
                            className="flex text-sm bg-slate-200 rounded-2xl focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            >
                           <span class="sr-only">Open user menu</span>
                                <p class="text-sky-800  font-bold mr-10 ml-5 mt-2">Astyy</p>
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="user photo"
                                />
                            </button>

                            <div
                            className={`absolute z-10 ${
                                isUserVisible ? 'block' : 'hidden'
                            } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                            >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                <a href="#" className="block px-4 py-2  hover:text-sky-800 hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                   Dashboard
                                </a>
                                </li>
                                <Link to="/user/profile/indentity" className="block px-4 py-2 hover:text-sky-800 hover:font-bold  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    View Profile
                                </Link>
                              
                                <li>
                                <a href="#" className="block px-4 py-2  hover:text-sky-800 hover:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Logout
                                </a>
                                </li>
                            
                            </ul>
                            </div>
                        </div>
                    
                        <div>
                        </div>
                    </div>
                </div>    
            </nav>
            <nav className="bg-slate-100 dark:bg-gray-700">
                <div className="max-w-screen-xl  px-8 md:px-4 py-3 mx-auto">
                    
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        
                    <li>
                        <Link to="/" className="text-gray-900 dark:text-white hover:border-b-2 border-sky-700">
                           Home
                        </Link>
                    </li>

                    <li>
                       <Link to="#" className="text-gray-900 dark:text-white hover:border-b-2 border-sky-700">
                          Current
                        </Link>
                    </li>
                    <li>
                       <Link to="#" className="text-gray-900 dark:text-white hover:border-b-2 border-sky-700">
                           Archives
                        </Link>
                    </li>

                    <li className="relative group">
                        <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-between w-full px-4 text-gray-900 hover:border-b-2 border-sky-700 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                        About
                        <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                            />
                        </svg>
                        </button>

                        <div
                        className={`absolute z-10 ${
                            isDropdownVisible ? 'block' : 'hidden'
                        } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                        >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-sky-800 hover:font-bold dark:hover:text-white">
                                About The Journal
                            </Link>
                            </li>
                            <li>
                            <Link to="/about/submission" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-sky-800 hover:font-bold dark:hover:text-white">
                                Submission
                            </Link>
                            </li>
                            <li>
                            <Link to="/about/privacy" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200  hover:text-sky-800 hover:font-bold dark:hover:text-white">
                                Privacy & Statement
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </li>
                    </ul>
                    <div class="relative hidden md:block ml-auto mr-5 ">
                        <div class="absolute inset-y-0  right-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                </div>
            </nav> 
    </>
    )
}
export default ComNavbar