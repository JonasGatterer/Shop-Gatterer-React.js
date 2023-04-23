import React from "react";
import Test1 from "./../images/carousel1.jpg"
import Test2 from "./../images/carousel2.jpg"
import Test3 from "./../images/carousel3.jpg"
import './Carousel.css'
import {useTranslation} from "react-i18next"

const Carousel = () => {

    const {t, i18n} = useTranslation();

    return(
        <div id="carouselSlides" class="carousel slide" data-bs-ride="carousel">
            <div id="Home"></div>
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
        
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Test1} class="d-block w-100" alt="..."/>
                    <div class="carousel-overlayText rounded-pill">{t("carousel.main")}</div>
                    <div class="carousel-overlayText-second">{t("carousel.second")}</div>
                </div>
                <div class="carousel-item">
                    <img src={Test2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={Test3} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;