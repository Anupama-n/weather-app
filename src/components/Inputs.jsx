import React from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className="flex felx-row justify-center my-6">
      <div className="flex flex-row w-3/5 item-center justify-center space-x-4">
        <input 
        type="text" 
        placeholder='search'
        className="text=x1 font-light p-2 w-full shadow-xl capitalize placeholder:lowercase"></input>
      
      
      <UilSearch size={30} className= "text-white cursor-pointer transition ease-out hover:scale-75"/>

      <UilLocationPoint size={30} className="text-white cursor-pointer transition ease-out hover:scale-75"/>
      </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button name="metrix" className='text-xl text-white font-medium '>°C</button>
            <p className='text-xl text-white mx-2'></p>
          <button name="imperial" className='text-xl text-white font-medium '>°F</button>
          
        </div>

    </div>

  )
}

export default Inputs