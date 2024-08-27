import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilWind,
    UilSun,
    UilSunset,
    UilTear
} from "@iconscout/react-unicons";

function Temperature() {
  return (
    <div className='p-4'>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>Sunny Cloudy or Rainy</p>
      </div>

      <div className='flex flex-row items-center justify-around text-white py-3 space-x-4'>
        <img 
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="Weather icon" 
          className='w-20' 
        />
        <p className='text-5xl'>30°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center'>
            <UilTemperature size={18} className="mr-1" />
            Real feel
            <span className='font-medium ml-1'>31°</span>
          </div>
          <div className='flex font-light text-sm items-center'>
            <UilTear size={18} className="mr-1" />
            Humidity
            <span className='font-medium ml-1'>73%</span>
          </div>
          <div className='flex font-light text-sm items-center'>
            <UilWind size={18} className="mr-1" />
            Wind
            <span className='font-medium ml-1'>15km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between text-white text-sm py-3 space-x-4">
        <div className="flex flex-row items-center space-x-2">
          <UilSun />
          <p className='font-light'>
            Sunrise: <span className="font-medium ml-1">05:48 AM</span>
          </p>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <UilSunset />
          <p className='font-light'>
            Sunset: <span className="font-medium ml-1">6:59 PM</span>
          </p>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <UilTemperature />
          <p className='font-light'>
            Highest: <span className="font-medium ml-1">35°</span>
          </p>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <UilTemperature />
          <p className='font-light'>
            Lowest: <span className="font-medium ml-1">28°</span>
          </p>
        </div>
      </div>
        

    </div>
  );
}

export default Temperature;
