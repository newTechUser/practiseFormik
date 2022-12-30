import React from 'react'
import './Navbar.css'

function navbar() {
  return (
   <nav className='nav'>
        <div className="firstnav">
            <img className='image2' src="https://code.edu.az/wp-content/uploads/2021/07/logo-footer.png" alt="" />
        </div>
        <div className="maincontent">
            <p className='mainnav'>Akademiya</p>
            <p className='mainnav'>Tedris saheleri</p>
            <p className='mainnav'>Korporativ</p>
            <p className='mainnav'>Elaqe</p>
        </div>

        <div className="end">
            <button className='button'>Muraciet et</button>
        </div>
   </nav>
  )
}

export default navbar