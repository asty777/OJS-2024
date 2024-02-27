import React from 'react';

function ComPrivacy (){
    return(
        <div className="bg-slate-100  py-32 flex flex-col items-center justify-center">
               
                <div className="container mx-auto text-center mb-8">
                    <div className="text-3xl hover:border-b-2 border-blue-700 font-bold text-gray-800 inline-block">
                    Privacy Statement 
                    </div>
                    {/* <div className="border border-blue-300"></div> */}
                  
                </div>
               
                <div className="bg-white p-12 w-2/3 mt-5 rounded-xl shadow-lg">
                   <p className="text-lg ">
                     As part of the submission process, authors are required to check off their submission's compliance with all of the following items, and submissions may be returned to authors that do not adhere to these guidelines.
                  </p>
                  
                </div>
        </div>   
    )
}
export default ComPrivacy;