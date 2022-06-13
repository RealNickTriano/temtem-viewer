import React from 'react'
import TemLineItem from './TemLineItem'
import PageNav from './PageNav'
import { useState } from 'react'

const AllList = ({ itemList, handleListClick, pages, currentPage, setCurrentPage}) => {

  return (
    <div className='flex flex-col w-1/2 mx-auto mt-8 border-4 border-fuchsia-800 rounded-3xl px-14 pb-6'>
        <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                        <thead className="border-b-4 border-fuchsia-800 text-xl">
                            <tr>
                            <th scope="col" className="font-bold text-gray-900 px-6 py-4 text-center">
                                Image
                            </th>
                            <th scope="col" className="font-bold text-gray-900 px-6 py-4 text-center">
                                Name
                            </th>
                            <th scope="col" className="font-bold text-gray-900 px-6 py-4 text-center">
                                Number
                            </th>
                            <th scope="col" className="font-bold text-gray-900 px-6 py-4 text-center lg:invisible xl:visible">
                                Type
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pages[currentPage].map(item => 
                                <TemLineItem
                                    key={item.number} 
                                    number={item.number}
                                    handleListClick={handleListClick}
                                    item={item}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/*Pagination*/}
        <PageNav 
            itemList={itemList}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    </div>
  )
}

export default AllList