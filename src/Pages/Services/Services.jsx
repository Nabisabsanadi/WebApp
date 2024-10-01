import React from 'react'
import './services.css'
const Services = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className="s-cards  w-100">
                <div className="service_card">
                    <img src={props.service_icon} alt="" />
                    <h6>{props.title}</h6>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
