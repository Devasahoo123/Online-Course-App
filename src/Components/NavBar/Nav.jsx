import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom'

function Nav() {
    
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
            <h2>
                <span>D</span>emo
                <span>A</span>ccedmy
            </h2>
        </div>
        <div className='menu-link'>
            <ul>
                <li>
                    <NavLink  to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to='/teacher'>Teacher</NavLink>
                </li>
                <li>
                    <NavLink exact to='/courses'>Courses</NavLink>
                </li>
                <li>
                    <NavLink exact to='/contact'>Contact Us</NavLink>
                </li>
            </ul>
        </div>
        <div className='social-media'>
            <ul className='social-media-desktop'>
                <li>
                    <NavLink to='/login'><h1><RiAccountCircleLine /></h1></NavLink>
                </li>
            </ul>
            <div className='hamburger-menu'>
                <NavLink href="/">
                    <RxHamburgerMenu />
                </NavLink>
            </div>
        </div>
      </nav>
      
    </>
  )
}

export default Nav