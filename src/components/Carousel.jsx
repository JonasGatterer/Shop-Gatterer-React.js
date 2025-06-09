import React from "react";
import { Carousel } from 'react-bootstrap';
import Test1 from "./../images/carousel1.jpg";
import Test2 from "./../images/carousel2.jpg";
import Test3 from "./../images/carousel3.jpg";
import './Carousel.css';
import { useTranslation } from "react-i18next";

const CarouselComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="carousel-container">
            <div id="Home"></div>
            <Carousel interval={5000} controls={false} indicators={false}>
                <Carousel.Item>
                    <img className="d-block w-100" src={Test1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Test2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Test3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <div className="carousel-overlay">
                <div className="carousel-overlayText rounded-pill">{t("carousel.main")}</div>
                <div className="carousel-overlayText-second">{t("carousel.second")}</div>
            </div>
            {/* */}
            <a href="https://rmxob.shop/Main.aspx?shopid=09f6be68-1eba-4948-b460-d901d9c2b251&shopmode=0" target="_blank" rel="noopener noreferrer" className="shop-link">
                🚴 {t("carousel.onlineRes")}
            </a> 
            {/*Reservieren Sie Ihre Ausrüstung hier*/}
            {/*Reservieren Sie Ihre Ausrüstung jetzt*/}{/*Reservieren Sie Ihre Ausrüstung online*/}
            {/*Online Skiverleih*/}{/*Reserve your equipment now*/}
            {/*Click here for reservation*/}
        </div>
    );
};

export default CarouselComponent;