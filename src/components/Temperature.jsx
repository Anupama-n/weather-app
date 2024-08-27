import React from 'react'
import{
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilWind,
    UilSun,
    UilSunrise,
    UilSunset,
    UilTear
} from "@iconscout/react-unicons"

function Temperature() {
  return (
    <div>
    <div className='flex items-center justify-center py-6
    text-xl text-cyan-300'>
        <p>Sunny Cloudy or Rainy</p>
        </div>
        <div className='flex flex-row items-center justify-center text-white py-3'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png"

            alt="hehe" className='w-20' />
            <p className='text-5xl'>30°</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real feel
                    <span className='font-medium ml-1'>31°</span>

                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Temperature