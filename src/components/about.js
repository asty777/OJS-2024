import React from "react";

function ComAbout(){
    return(
        <div className="bg-slate-100 py-32">
            <div class="grid grid-cols-2 px-24 gap-4">
            <div className="container mx-auto">
                <div className="text-4xl hover:border-b-2 border-blue-700 font-bold text-gray-800 inline-block">
                    Open Journal Systems
                </div>
                <div className="text-xl mb-3 text-gray-600 mt-5 ">
                Manage your entire researcher-to-reader workflow for submission, peer review, and production from one place with OJS, the world’s most widely used end-to-end scholarly publishing platform.

                Publish articles and issues online and have them fully indexed in global discovery services like Google Scholar, Crossref, DOAJ, and many others.
                </div>
            </div>
            </div>
        </div>  
    )
}
export default ComAbout;