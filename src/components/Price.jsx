import React from 'react'
function Price({price, places}) {
  return (
    <div className='pricing-1'>
    <div className='inner'>
        <h1>Trips</h1>
        <h2 className='card-title'>Cost : $ {price}</h2>
        <ul>
            {places.map((item) => {
                return (<li>{item}</li>)
            })}
        </ul>
    </div>
    </div>
  )
}

export default Price



