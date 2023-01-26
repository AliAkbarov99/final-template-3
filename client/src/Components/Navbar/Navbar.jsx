import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

  


  return (
    <div id='navbar'>
        <div className='navbar__left'>
            OneSchool
        </div>
        <div className='navbar__middle'>
            <Link to="/">Home</Link>
            <Link to="/">Courses</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/">Teachers</Link>
        </div>
        <div className='navbar__right'>
          <button>CONTACT US</button>
        </div>
    </div>
  )
}

export default Navbar