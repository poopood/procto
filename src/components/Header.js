import React from 'react';

const Header = ({keywordSearch}) => {
    return(
        <div className="bg-white p-8 pb-6 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
                    <h2 className="text-gray-800 font-semibold">Wines Catalog</h2>
                    <span className="text-gray-800  text-xs">All wines by Availability</span>
            </div>
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd" />
            </svg> */}
            <input 
            onChange={(e) => {keywordSearch(e)}}
            className="bg-gray-50 outline-none ml-1 mr-5 w-60 block " type="text" name="" id="" placeholder="search..." />
            
            </div>


        </div>
    )
}


export default Header
