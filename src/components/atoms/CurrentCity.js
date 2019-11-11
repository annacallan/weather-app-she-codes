import React from 'react'

const CurrentCity = ({city, ...props }) => {
    return (
    <div>
      <h1 className='cityTitle'>{city}</h1>
    </div>)

  };
  

export default CurrentCity
