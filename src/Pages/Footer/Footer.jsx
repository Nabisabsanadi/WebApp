import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer-menu">
        <div className="row  py-3 px-4">
          <div className="col-sm-3">
            <div className="footer">
              <div className="footer-heading">
                <h4 className="h4">Our Services</h4>
                <div className="footer-links">
                  <ol>
                    <li> <Link to="#">Website Development</Link></li>
                    <li> <Link to="#">Web Design</Link></li>
                    <li> <Link to="#">Web Application Development</Link></li>
                    <li> <Link to="#">UI/UX Development</Link></li>
                    <li> <Link to="#">E-Commerce Website</Link></li>
                    <li> <Link to="#">Software Testing</Link></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer">
              <div className="footer-heading">
                <h4 className="h4">Quick Links</h4>
                <div className="footer-links">
                  <ol>
                    <li> <Link to="#">About Us</Link></li>
                    <li> <Link to="#">Portfolio</Link></li>
                    <li> <Link to="#">Career</Link></li>
                    <li> <Link to="#">Contact Us</Link></li>
                    <li> <Link to="#">Hire Developer</Link></li>
                    <li> <Link to="#"> Contat Us</Link></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer">
              <div className="footer-heading">
                <h4 className="h4">Social Media</h4>
                <div className="footer-links">
                  <div className="contact-icons">
                    <Link to="#"><FaFacebookSquare /></Link>
                    <Link to=""><FaInstagramSquare /></Link>
                    <Link to=""><FaXTwitter /></Link>
                    <Link to=""><FaLinkedin /></Link>
                    <Link to=""><FaWhatsappSquare></FaWhatsappSquare></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer">
              <div className="footer-heading">
                <h4 className="h4">Contact Us</h4>
                <div className="footer-links">
                  <div className="contact-footer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p><span><MdOutlineMailOutline className='contacticon'/></span>infooabc@gmail.com</p>
                    <p><span><MdOutlineLocalPhone className='contacticon'/></span>+91 990022 8899</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
