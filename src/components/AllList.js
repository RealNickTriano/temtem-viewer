import React from 'react'
import TemLineItem from './TemLineItem'

const AllList = ({ itemList }) => {
  return (
    <div className='table w-1/2 mx-auto mt-20'>
        <div class="table-header-group font-bold mb-2">
            <div className='table-row'>
                <div class="table-cell">Image</div>
                <div class="table-cell">Name</div>
                <div class="table-cell">Number</div>
                <div class="table-cell">Type</div>
                <div class="table-cell">Name</div>
            </div>
        </div>
        <div class="table-row-group">
            {itemList.map(item => 
                <TemLineItem
                    key={item.number} 
                    item={item}
                />
            )}
        </div>
        
    </div>
  )
}

export default AllList