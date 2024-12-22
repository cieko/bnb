import React from 'react'
import PropertyList from './property-list'

const Properties = () => {
  return (
    <div className='mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
      <PropertyList />
    </div>
  )
}

export default Properties