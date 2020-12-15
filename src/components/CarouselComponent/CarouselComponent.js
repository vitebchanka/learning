import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import vacation from "../../public/assets/vacation.svg"
import "./CarouselComponent.scss"

export default class CarouselComponent extends Component {
    render() {
        return (
            <div className="carousel-outer">
            <Carousel showArrows={true} showThumbs={false} showStatus={false} className="carousel-container">
                <div>
                    <p className="row center-lg learn-eng white-text">Выучи английский</p>
                    <p className="row center-lg easy-fast white-text">Легко и быстро!</p>
                    <p className="row center-lg go-abroad white-text">Для поездок за границу</p>
                    <img className="row img-carousel" src={vacation}/>
                </div>
                <div>
                    <img src="assets/2.jpeg"/>
                </div>
                <div>
                    <img src="assets/3.jpeg"/>
                </div>
            </Carousel>
            </div>
        );
    }
};