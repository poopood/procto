import React from 'react';
// import Image from 'next/image'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Table = ({columns, wines, currentPage, searchInput, columnSorter}) => {
    return(
        <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr >
                        {columns.map((column) => {
                            
                            return(
                                <th 
                                onClick={() => {columnSorter(column.heading)}}
                                scope="col" 
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 hover:text-gray-900 uppercase tracking-wider cursor-pointer" 
                                key={column.heading}>
                                    <FontAwesomeIcon
                                    className="jju"
                                    icon={faSort}
                                    />
                                    &nbsp;&nbsp;
                                    <span >{column.label}</span></th>
                            )
                            
                        })}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                        {wines.filter((wine) => {
                            // return wine
                                if(wine === " "){
                                    return wine
                                }else if(wine.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchInput)) {
                                    return wine
                                } 
                            
                        }).slice((currentPage - 1) * 5, currentPage * 5).map((wine) => {
                            return(
                                <tr key={wine.sku} >
                                    {columns.map((column) => {
                                        if(column.truthy){
                                            return (
                                                wine[column.heading] ? (
                                                    <td 
                                                    className="text-green-500 p-8"
                                                    key={column.label}>Available</td>
                                                ) :
                                                ( 
                                                    <td
                                                    className="text-red-500 p-8"
                                                    key={column.label}>Not Available</td>
                                                )
                                                
                                            )
                                        
                                        
                                        } else if(column.heading === "name"){
                                            return(
                                                <td 
                                                
                                                className="jju12 p-8"
                                                key={column.label}>
                                                    
                                                    <img src={wine["thumbnail"]} alt="" width="60"/> 
                                                    <span className="j2">{wine[column.heading]}</span>
                                                    </td>
                                            )
                                        }

                                        return(
                                            <td 
                                            className="p-8"
                                            key={column.label}>{wine[column.heading]}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                </tbody>

            </table>
    )
}


export default Table