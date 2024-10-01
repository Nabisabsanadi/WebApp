import React from 'react'
import './about.css'
import aboutimage from '../../images/about-company.png'
import Ourprocess from './Ourprocess'
import { processdata } from './OurprocessData'
import Ourcorevalues from './Ourcorevalues'
const About = () => {
  const color = {
    color: 'black'
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="aboutus-menu">
              <h1>About Our <span style={color}>Company</span></h1>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-sm-6">
            <div className="about-content">
              <h1>Best Wesite Development Service</h1>
              <p>Loem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore, soluta distinctio, commodi sit laborum neque esse dolorem quod rerum possimus sint voluptates accusantium laboriosam tenetur, saepe at praesentium voluptatum?</p>
              <div className="about-buttons">
                <button>Our Best Services</button>
                <button>Demo Websites</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="about-comnay">
              <img src={aboutimage} className='img-fluid' alt="aboutimage" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="our-porcess p-2">
            <h1 className='text-center'>Our Process</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus aliquam provident assumenda eius nihil et recusandae! Dicta ab cumque molestias quod, recusandae fugit deserunt, iure perspiciatis cum labore minima!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus aliquam provident assumenda eius nihil et recusandae! Dicta ab cumque molestias quod, recusandae fugit deserunt, iure perspiciatis cum labore minima!</p>
          </div>
        </div>
        <div className="row Mycards">
          {/* <div className="Mycards"> */}
            <div className="col-md-2">
              <Ourprocess
                icon={processdata[0].icon}
                name={processdata[0].heading}
                description={processdata[0].para}
              />
            </div>

            <div className="col-md-2">
              <Ourprocess
                icon={processdata[1].icon}
                name={processdata[1].heading}
                description={processdata[1].para}
              />
            </div>
            <div className="col-md-2">
              <Ourprocess
                icon={processdata[2].icon}
                name={processdata[2].heading}
                description={processdata[2].para}
              />
            </div>
            <div className="col-md-2">
              <Ourprocess
                icon={processdata[3].icon}
                name={processdata[3].heading}
                description={processdata[3].para}
              />
            </div>
            <div className="col-md-2">
              <Ourprocess
                icon={processdata[4].icon}
                name={processdata[4].heading}
                description={processdata[4].para}
              />
            </div>
          </div>
        </div>
       
      {/* </div> */}
    {/* our core values */}
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Ourcorevalues
          corevalues_icon={processdata[5].corevaluesIcon}
          corevalues_title={processdata[5].corevaluesTitel}

          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
