import React from 'react'
import TemLineItem from './TemLineItem'

const AllList = ({ itemList }) => {
  return (
    <div className='flex flex-col w-1/2 mx-auto mt-20'>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="border-b-4 border-fuchsia-800 text-xl">
                            <tr>
                            <th scope="col" class="font-bold text-gray-900 px-6 py-4 text-center">
                                Image
                            </th>
                            <th scope="col" class="font-bold text-gray-900 px-6 py-4 text-center">
                                Name
                            </th>
                            <th scope="col" class="font-bold text-gray-900 px-6 py-4 text-center">
                                Number
                            </th>
                            <th scope="col" class="font-bold text-gray-900 px-6 py-4 text-center">
                                Type
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList.map(item => 
                                <TemLineItem
                                    key={item.number} 
                                    item={item}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllList