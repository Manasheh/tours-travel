import React from 'react'
import data from './Data'
import { NavLink} from 'react-router-dom'
function Main() {
  return (
    <div className='main'>
        <h4>Our Premium Packages 😉</h4>
        <div className='row'>
            {
                data.map((item) => {
                    return (
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='card-name'>
                                <h5 className='card-title'>{item.name}</h5>
                           
                            <img src={item.url} alt=''/>
                            <button className='price'>{item.day} Days : {item.price} </button>
                            <NavLink to = '/travel'><button className='hero-btn btn2'>Visit</button></NavLink>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Main