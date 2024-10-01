import React from 'react'
import './home.css'
// import slider1 from '../../images/slide1.png'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import CarouselItem from './CarouselItem';
import {data} from './CarouselData'
const Home = () => {
  const banner = {
    height: 'auto',
    // backgroundImage: `url(${baner})`,
    background: 'blue',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepear: 'no-repear'
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="banner-section" style={banner}>
          <div class="carousel slide " data-bs-ride="carousel" id="carouselExampleSlidesOnly">
            <div className="carousel-inner py-5">
              <div className="carousel-item active mt-3" data-bs-interval="3000">
                <CarouselItem
                  Image={data[0].carImag}
                  Heading={data[0].carHeading}
                  Description={data[0].carDescription}
                  para={data[0].p1}
                  para1={data[0].p2}
                />
              </div>
              <div className="carousel-item  mt-3" data-bs-interval="3000">
                <CarouselItem
                  Image={data[1].carImag}
                  Heading={data[1].carHeading}
                  Description={data[1].carDescription}
                  para={data[1].p1}
                  para1={data[1].p2}
                />
              </div>
              <div className="carousel-item  mt-3" data-bs-interval="3000">
                <CarouselItem
                  Image={data[2].carImag}
                  Heading={data[2].carHeading}
                  Description={data[2].carDescription}
                  para={data[2].p1}
                  para1={data[2].p2}
                />
              </div>
              <div className="carousel-item  mt-3" data-bs-interval="3000">
                <CarouselItem
                  Image={data[3].carImag}
                  Heading={data[3].carHeading}
                  Description={data[3].carDescription}
                  para={data[3].p1}
                  para1={data[3].p2}
                />
              </div>
            </div>
            <div className="carouser-button">
              <p data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev"><FaAnglesLeft /></p>
              <p data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next"><FaAnglesRight /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
