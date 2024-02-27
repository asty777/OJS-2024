import React from 'react';

function RegisterPage(){
    return(
        <>
            <section class="bg-slate-100 p-32  dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-sky-800 dark:text-white">
                        OJS   
                    </a>
                    <div class="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6  sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <h2 class="text-sm font-semibold leading-tight tracking-tight border-b-2 border-sky-800 inline-block text-gray-900 md:text-lg dark:text-white">
                                Profile
                            </h2>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label for="givenName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Given Name</label>
                                        <input type="givenName" name="givenName" id="givenName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Given Name" required=""/>
                                    </div>
                                    <div>
                                        <label for="familyName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Family Name</label>
                                        <input type="familyName" name="familyName" id="familyName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Family Name" required=""/>
                                    </div>
                                    <div>
                                        <label for="affiliation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Affiliation</label>
                                        <input type="affiliation" name="affiliation" id="affiliation" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Affiliation" required=""/>
                                    </div>
                                    <div>
                                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option disabled selected>Select a country</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select>
                                    </div>
                                </div>
                                <h2 class="text-sm font-semibold leading-tight tracking-tight border-b-2 border-sky-800 inline-block text-gray-900 md:text-lg dark:text-white">
                                   Login
                                </h2>
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required=""/>
                                    </div>
                                    <div>
                                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                        <input type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required=""/>
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                    </div>
                                    <div>
                                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                    </div>
                                </div>    
                                <div class="flex flex-col items-start">
                                  
                                    <div class="flex items-center mb-4">
                                        <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label for="checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I agree to have my data collected and stored according to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">privacy statement</a>.</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label for="checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I would like to be notified of new publications and announcements.</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label for="checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I would like to be contacted with requests to review submissions to this journal.</label>
                                    </div>
                                </div>
                                <button type="submit" class="w-full text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" class="font-medium text-primary-600 hover:text-sky-800 dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default RegisterPage;