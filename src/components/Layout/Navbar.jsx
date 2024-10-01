import React, { useRef  } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.jpg'
import { FaBars, FaTimes } from 'react-icons/fa';
import './layout.css'
const Navbar = () => {
  const img={
    height:"70px",
  }
    
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };
  return (
    <div className='navbar'>
      <header  >
        <img src={logo} alt="logo"  style={img} />
        <nav ref={navRef}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/products">Product</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  )
}

export default Navbar
