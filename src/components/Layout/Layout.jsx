import React from 'react'
import { Outlet } from "react-router-dom";
// import logo from '../../images/logo.jpg'
import './layout.css'
import Navbar from './Navbar';
import Footer from '../../Pages/Footer/Footer';
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default Layout
