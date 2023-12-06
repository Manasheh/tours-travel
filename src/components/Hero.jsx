import React from 'react'
import { NavLink } from 'react-router-dom'
function Hero() {
  return (
        <header>
            <div className='hero'>
                <h4>Tours and Travels</h4>
                <p>"Discover the world, embrace the journey, and let each adventure be a chapter in your own travel story."</p>
                <NavLink to = '/travel'><button className='hero-btn'>Search</button></NavLink>
            </div>
        </header>
  )
}

export default Hero