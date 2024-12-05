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
            {/*
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="shop-link">
                ⛷️ Reservieren Sie Ihre Ausrüstung jetzt
            </a> */}{/*Reserve your equipment now*/}{/*Click here for reservation*/}
        </div>
    );
};

export default CarouselComponent;



{/*
import React, { useEffect } from "react";
import Test1 from "./../images/carousel1.jpg"
import Test2 from "./../images/carousel2.jpg"
import Test3 from "./../images/carousel3.jpg"
import './Carousel.css'
import {useTranslation} from "react-i18next"

const Carousel = () => {

    const {t, } = useTranslation(); // i18n

    useEffect(() => {
        const carousel = document.querySelector('#carouselSlides');
        const interval = setInterval(() => {
            if (carousel) {
                const nextButton = carousel.querySelector('.carousel-control-next');
                nextButton?.click(); // Triggers the "Next" button
            }
        }, 5000); // 5000 ms = 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return(
        <div id="carouselSlides" className="carousel slide" data-bs-ride="carousel">
            {/*<div id="Home"></div>*/}
        {/*
        <div id="slides" class="carousel slide" data-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#slides" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#slides" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#slides" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Test1} alt="Item"/>
                </div>
                <div class="carousel-item">
                    <img src={Test2} alt="Item"/>
                </div>
                <div class="carousel-item">
                    <img src={Test3} alt="Item"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#slides" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#slides" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>*/}
{/*the part above is not included in the prior version 
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Test1} className="d-block w-100" alt="..."/>
                    <div className="carousel-overlayText rounded-pill">{t("carousel.main")}</div>
                    <div className="carousel-overlayText-second">{t("carousel.second")}</div>
                </div>
                <div className="carousel-item">
                    <img src={Test2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Test3} className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;*/}