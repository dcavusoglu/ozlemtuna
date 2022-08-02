import React from "react";
import './gallery.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assests/img-1.png'
import img2 from '../../assests/img-2.png'
import img3 from '../../assests/img-3.png'
import img4 from '../../assests/img-4.png'
import img5 from '../../assests/img-5.png'
import img6 from '../../assests/img-6.png'
import img7 from '../../assests/img-7.png'
import img8 from '../../assests/img-8.png'
import img9 from '../../assests/img-9.png'
import img10 from '../../assests/img-10.png'

const Gallery = () => (
    <Carousel>
      <Carousel.Item className="scale">
        <img
          className=" car-img"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img img-mid"
          src={img4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img img-five"
          src={img5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img"
          src={img6}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img "
          src={img7}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img"
          src={img8}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img"
          src={img9}
          alt="First slide"
        />
        </Carousel.Item>
      <Carousel.Item className="scale">
        <img
          className=" car-img"
          src={img10}
          alt="First slide"
        />
        </Carousel.Item>
    </Carousel>
);





export default Gallery
