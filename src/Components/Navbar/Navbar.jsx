import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.png'




const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      <p>SHOPPING</p>
      <h3>Admin Panel</h3>
    </div>
  )
}

export default Navbar
