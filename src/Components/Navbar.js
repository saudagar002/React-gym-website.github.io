import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style/navbar.css"

function Navbar() {
  return (
    
    <>
    <div className="hero">
    <div className="logo">
        <h1>
            MUSC<span>LES</span>
            {/* MUSC<Span>LES</Span> */}
        </h1>
    </div>
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/blog">blog</NavLink>
            </li>
            <li>
             <NavLink to="/pricing">pricing</NavLink>
            </li> 
            <li>
            <NavLink to="/member">Member</NavLink>
                
            </li>
            <li>
            <NavLink to="/footer">Footer</NavLink>
                
                
            </li>
        </ul>
    </nav>
    <div className="btn1">
        <button><NavLink to="/login">login</NavLink></button>
    </div>
</div>
    </>
  )
}

export default Navbar;