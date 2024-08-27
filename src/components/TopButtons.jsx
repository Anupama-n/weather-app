import React from 'react'

function TopButtons() {

  const cities =[
    {
      id:1,
      title: 'London'
    },
    {
      id:2,
      title: 'Sydney'
    },
    {
      id:3,
      title: 'California'
    },
    {
      id:4,
      title: 'Ohio'
    },
    {
      id:5,
      title: 'Texas'
    },
  
  ]
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium ">{city.title}</button>    
      ))}
    </div>
  )
}

export default TopButtons