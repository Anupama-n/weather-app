import React from 'react';

function Forecast({title}) {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-start my-4'>
        <p className='text-white font-medium mr-3 uppercase'>
          {title}
        </p>
      </div>
      
      <hr className="my-2" />
      
      <div className='flex flex-row items-center justify-between text-white'>
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className='font-light text-sm'>
            02:30 PM
          </p>
          <img 
            src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="Weather icon" 
            className='w-12 my-1'
          />
          <p className="font-medium">26°</p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className='font-light text-sm'>
            03:00 PM
          </p>
          <img 
            src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="Weather icon" 
            className='w-12 my-1'
          />
          <p className="font-medium">27°</p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className='font-light text-sm'>
            03:30 PM
          </p>
          <img 
            src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="Weather icon" 
            className='w-12 my-1'
          />
          <p className="font-medium">28°</p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className='font-light text-sm'>
            04:00 PM
          </p>
          <img 
            src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="Weather icon" 
            className='w-12 my-1'
          />
          <p className="font-medium">29°</p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className='font-light text-sm'>
            04:30 PM
          </p>
          <img 
            src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="Weather icon" 
            className='w-12 my-1'
          />
          <p className="font-medium">30°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
