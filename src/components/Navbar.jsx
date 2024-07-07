import React from 'react'
import{Link} from 'react-router-dom';


export const Navbar = () => {
    
  return (
    <div className='navbar'>
        <button className='menu-icon'></button>
        <div className="webistename">JOB HUNTER</div>
        <input type="text" className='search-bar' placeholder='Search Bar'/>
        <div className="profile-icon"></div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}