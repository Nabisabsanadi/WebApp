import React from 'react'
import './header.css'
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row header">
                    <div className="col-2 header-hr d-none d-sm-block">
                        <p><span className='header-icons'><FaSquarePhoneFlip /></span> <span>Sales:</span> +91 9900998899</p>
                    </div>
                    <div className="col-2  header-location">
                        <p><span className='header-icons'><FaSquarePhoneFlip /></span> <span>HR:</span> +91 9900998899</p>
                    </div>
                    <div className="col-2 d-none d-sm-block ">
                        <p><span className='header-icons'><FaLocationDot /></span>Karnataka,India</p>
                    </div>
                    <div className="col-6  text-end header-location">
                        <Link className='btn btn-dark'to="/career">Apply For Job</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
