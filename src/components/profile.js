import React from 'react';
import { Link } from 'react-router-dom';

function ComProfile(){
    return(
        <>
            <div class=" bg-slate-100 p-32 ">
                <div class="border-b border-gray-200 dark:border-gray-700">
                    <ul class="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li class="me-2">
                           <Link to="/user/profile/indentity" class="inline-flex items-center justify-center p-4 text-sky-800 border-b-2 border-sky-800 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page"> 
                                <svg class="w-4 h-4 me-2  text-sky-800 dark:text-blue-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>Indentity
                            </Link>
                        </li>
                        <li class="me-2">
                          <Link to="/user/profile/contact" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-sky-800 hover:border-sky-800 dark:hover:text-gray-300 group">
                                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-sky-800 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                </svg>Contacts
                            </Link>
                        </li>
                        <li class="me-2">
                            <Link to="/user/profile/role" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-sky-800 hover:border-sky-800 dark:hover:text-gray-300 group">
                                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-sky-800 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                </svg>Role
                            </Link>
                        </li>
                        <li class="me-2">
                            <Link to="/user/profile/public" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-sky-800 hover:border-sky-800 dark:hover:text-gray-300 group">
                               <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-sky-800 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                                </svg>Public
                            </Link>
                        </li>
                        <li class="me-2">
                            <Link to="/user/profile/password" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-sky-800 hover:border-sky-800 dark:hover:text-gray-300 group">
                               <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-sky-800 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                                </svg>Password
                            </Link>
                        </li>
                        <li class="me-2">
                            <Link to="/user/profile/notification" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-sky-800 hover:border-sky-800 dark:hover:text-gray-300 group">
                               <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-sky-800 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                                </svg>Notifications
                            </Link>
                        </li>
                        <li class="me-2">
                            <Link to="/user/profile/APiKey" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-sky-800 hover:border-sky-800 dark:hover:text-gray-300 group">
                               <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-sky-800 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                                </svg>API Key
                            </Link>
                        </li>
                    </ul>
                </div>

                <div class="p-12  mx-auto bg-slate-100 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-fit">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-8 hover:border-b-2 border-sky-800 inline-block">Profile / <span className="text-sky-800">Indentity</span></h3>
                    <div class="w-full  bg-white rounded-lg shadow  dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6  sm:p-8">
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                     <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                     <input type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxx" required=""/>
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                     <div>
                                        <label for="givenName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Given Name</label>
                                        <input type="givenName" name="givenName" id="givenName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Given Name" required=""/>
                                    </div>
                                    <div>
                                        <label for="familyName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Family Name</label>
                                        <input type="familyName" name="familyName" id="familyName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Family Name" required=""/>
                                    </div>
                                </div>
                                <div>
                                    <label for="givenName" class="block mb-2 text-sm font-normal text-gray-500 dark:text-white">How do you prefer to be addressed? Salutations, middle names and suffixes can be added here if you would like.</label>
                                    <input type="givenName" name="givenName" id="givenName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Preferred Public Name" required=""/>
                                </div>
                                <button type="submit" class="w-full text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
                                <p class="text-sm font-normal text-gray-700 dark:text-gray-400">
                                 Your data is stored in accordance with our <a href="#" class="font-medium text-sky-600 underline dark:text-primary-500">privacy statement</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="bg-slate-100 py-32">
                <div className="container mx-auto text-center">
                    <div className="text-3xl hover:border-b-2 border-blue-700 font-bold text-gray-800 inline-block">
                    Profile
                    </div>
                    <div className="text-xl text-gray-600 mt-5">
                    Information for Readers, Authors, and Librarians
                    </div>
                </div>
            </div>     */}
        </>
    )
}
export default ComProfile;