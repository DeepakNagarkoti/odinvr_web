import React, { Fragment } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import slide1 from "../../assets/slide1.jpeg";
import slide2 from '../../assets/slide2.jpeg';

const ScreenshotCard = () =>{
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ScreenshotCard;