import React from 'react';

function ComInformation(){
    return(
        <>
            <div className="bg-slate-100 py-32">
                <div className="container mx-auto text-center">
                    <div className="text-3xl hover:border-b-2 border-blue-700 font-bold text-gray-800 inline-block">
                    Information
                    </div>
                    {/* <div className="border border-blue-300"></div> */}
                    <div className="text-xl text-gray-600 mt-5">
                    Information for Readers, Authors, and Librarians
                    </div>
                </div>
                <div className="container mx-auto  mt-20">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="md:w-1/3 p-2 text-center md:text-left">
                            <div className="max-w-lg p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="hover:border-b-2 border-blue-700  inline-block mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">For Readers</h5>
                                </a>
                                <p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">We encourage readers to sign up for the publishing notification service for this journal. Use the Register link at the top of the home page for the journal. This registration will result in the reader receiving the Table of Contents by email for each new issue of the journal.This list also allows the journal to claim a certain level of support or readership. See the journal's Privacy Statement, which assures readers that their name and email address will not be used for other purposes.</p>
                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                    Learn More
                                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/3  p-2 text-center md:text-left">
                            <div className="max-w-lg p-12  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="hover:border-b-2 border-blue-700  inline-block mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">For Authors</h5>
                                </a>
                                <p class="mb-3 font-normal text-sm fon text-gray-500 dark:text-gray-400">Interested in submitting to this journal? We recommend that you review the About the Journal page for the journal's section policies, as well as the Author Guidelines. Authors need to register with the journal prior to submitting or, if already registered, can simply log in and begin the five-step process.</p>
                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                    Learn More
                                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    <div className="md:w-1/3  p-2 mb-4 text-center md:text-left">
                            <div className="max-w-lg p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="hover:border-b-2 border-blue-700  inline-block mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">For Librarians</h5>
                                </a>
                                <p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">We encourage research librarians to list this journal among their library's electronic journal holdings. As well, it may be worth noting that this journal's open source publishing system is suitable for libraries to host for their faculty members to use with journals they are involved in editing (see Open Journal Systems).</p>
                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                    Learn More
                                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComInformation;