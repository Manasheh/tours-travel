import React from 'react'
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <NavLink to = '/'><img src={Logo} alt=''/></NavLink>
        <ul>
            <NavLink to = '/travel' style={{textDecoration:'none', marginTop:'12px'}}><li>Travel</li></NavLink>
            <NavLink to = '/price' style={{textDecoration:'none', marginTop:'12px'}}><li>Pricing</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar