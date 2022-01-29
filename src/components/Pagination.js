import React from 'react';

const Pagination = ({currentPage, setCurrentPage, pagesCount, winesLength}) => {
    return(
        <React.Fragment>
            <div className="pagination_buttons inline-flex">
                <button 
                className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                onClick={() => setCurrentPage(1)}
                >First   </button>
                <button 
                className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4  "
                onClick={() => {
                    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                } 
                >Previous   </button>
                <button 
                className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4  "
                onClick={() => {
                    setCurrentPage(currentPage < pagesCount ? currentPage + 1 : pagesCount)}
                }
                >Next   </button>
                <button  
                className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                onClick={() => setCurrentPage(pagesCount)}
                >Last   </button>
            </div>
            <div className="text-xs xs:text-sm text-gray-900 text-center	">
            <p>Page {currentPage} to {pagesCount} of {winesLength} entries</p>
            </div>
            
        </React.Fragment>
    )
}


export default Pagination