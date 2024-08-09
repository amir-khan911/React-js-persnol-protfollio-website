import React from 'react'
// import './Navbar.css'
// import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar" id='mynav'>
        <div className="left nav_items">Protfolio</div>
        <div className="right">
           <a href="#home" className="nav_items">Home</a>
           <a href="#about" className="nav_items">About'us</a>
           <a href="#exp" className="nav_items">Experience</a>
           <a href="#mys" className="nav_items">Skills</a>
           <a href="#myp" className="nav_items">Projects</a>
           <a href="#myc" className="nav_items">Contact</a>
        </div>

      </div>


     {/* <div className="container nav_bar">
        <div className="left nav_items">Protfolio</div>
        <div className="right">
          <nav>
            <ul>

             <NavLink to="/" className="nav_items">Home</NavLink>
             <NavLink to="/about" className="nav_items">About'us</NavLink>
             <NavLink to="/experience" className="nav_items">Experience</NavLink>
             <NavLink to="/skills" className="nav_items">Skills</NavLink>
             <NavLink to="/projects" className="nav_items">Projects</NavLink>
             <NavLink to="/contact" className="nav_items">Contact'us</NavLink>
            </ul>
            <li>
            </li>
          </nav>
        </div>

      </div> */}

        
    </>
  )
}

export default Navbar
