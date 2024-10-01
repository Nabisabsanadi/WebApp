import React from 'react'
import './home.css'
const CarouselItem = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="carousel-image">
                        <img src={props.Image} alt="slider one" className='img-fluid' />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="slider-content">
                        <h1 className='h3'>{props.Heading}</h1>
                        <p className='h6'>{props.Description}</p>
                    </div>
                    <div className="slider-button">
                        <p className="btnknow ">{props.para}</p>
                        <p className="btnknow   btn1">{props.para1}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem
