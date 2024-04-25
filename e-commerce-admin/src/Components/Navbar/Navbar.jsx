import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/image.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-and-text'>
        <img src={navlogo} className='nav-logo' alt="" height={65}/>
        <h1><span>&nbsp;&nbsp;&nbsp;S.V.AGRO CENTRE </span></h1><span><h1>&nbsp;- ADMIN PANEL</h1></span>
      </div>
    </div>
  )
}

export default Navbar
