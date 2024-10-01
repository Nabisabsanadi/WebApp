import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import About from './Pages/About/About';
import Header from './Pages/Header/Header';
import Home from './components/Home/Home';

import ServiceProcess from './Pages/Services/ServiceProcess';
import Products from './Pages/products/Products';
import Career from './Pages/career/Career';
import Contact from './Pages/contactus/Contact';
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<ServiceProcess/>} />
          <Route path="products" element={<Products/>} />
          <Route path="career" element={<Career/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
