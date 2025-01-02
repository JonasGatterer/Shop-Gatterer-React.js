import React from "react";
import './Footer.css'
import FacebookIcon from './../images/facebook.svg'
import InstagramIcon from './../images/instagram.svg'
import GithubIcon from './../images/github.svg'
import Map from './../images/map.jpg'
import {useTranslation} from "react-i18next"
import { Link } from "react-router-dom";

const Footer = () => {

    const {t} = useTranslation();
    
    return(
        <div class="container-fluid bg-light" id="kontakte">
            <div class="kontakteContainer">
                <div>
                    <h2 class="text-center" id="Kontakt">{/*Kontakte*/t("header.header5")}</h2>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="leftContainer">
                        <p class="header">{/*Öffnungszeiten:*/t("contact.header1")}</p>
                        <ul>
                            <li>{/*Mo-Fr: 8.00 bis 18.00 Uhr*/t("contact.time1")}</li>
                            <li>{/*Sa-So: 8.00 bis 18.00 Uhr*/t("contact.time2")}</li>
                        </ul>
                        <br/>
                        <p><a id="place" href="https://www.google.com/maps/place/Skiverleih+Gatterer+Noleggio+ski/@46.8491147,11.6210981,17z/data=!4m6!3m5!1s0x477801e5b1ea43ed:0x2b9f6ded3443ff98!8m2!3d46.8492209!4d11.6226376!16s%2Fg%2F11b6dq22t3"><span class="material-icons">place</span> {/*Hinterlände 5, 39037 Vals, Südtirol (IT)*/t("contact.location")}</a></p>
                        <p><a id="tel" href="tel:+0039-0472-547010"><span class="material-icons">call</span> +39 0472 547010</a></p>
                        <p><a id="email" href="mailto:info@skiverleih-gatterer.com"><span class="material-icons">mail</span> info@skiverleih-gatterer.com</a></p>
                        <div id="icons">
                            <span id="fbSpan"><a href="https://www.facebook.com/pages/category/Ski---Snowboard-Shop/Skiverleih-Gatterer-105882358059523/" target="_blank" rel="noopener noreferrer"><img id="fbIcon" src={FacebookIcon} alt="facebook link"/></a></span>
                            <span id="instaSpan"><a href="https://www.instagram.com/shop_gatterer/" target="_blank" rel="noopener noreferrer"><img id="instaIcon" src={InstagramIcon} alt="instagram link"/></a></span>
                            <span id="gitSpan"><a href="https://github.com/JonasGatterer/Shop-Gatterer-React.js" target="_blank" rel="noopener noreferrer"><img id="gitIcon" src={GithubIcon} alt="github link"/></a></span>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="rightContainer">
                        <a href="https://www.google.com/maps/place/Skiverleih+Gatterer+Noleggio+ski/@46.8491147,11.6210981,17z/data=!4m6!3m5!1s0x477801e5b1ea43ed:0x2b9f6ded3443ff98!8m2!3d46.8492209!4d11.6226376!16s%2Fg%2F11b6dq22t3"><img class="map" src={Map} alt="map"/></a>
                        {/*
                        <form action="">
                            <div class="mb-3">
                                <label for="emailInput" class="form-label header">{t("contact.header2")}</label>
                                <input maxLength={50} type="email" class="form-control" id="emailInput" placeholder="name@example.com" required/>
                            </div>
                            <div class="mb-3">
                                <label for="messageInput" class="form-label header">{t("contact.header3")}</label>
                                <textarea maxLength={300} class="form-control" id="messageInput" rows="3" required></textarea>
                            </div>
                            <button type="submit" formaction="/" class="btn btn-dark">{t("contact.sendButton")}</button>
                        </form>
                        */}
                        
                    </div>
                </div>
                <div class="mt-4 text-center">
                            
                            <span>- <Link class="linkImpressum" to="/impressum">{t("contact.impressum")}</Link>{/*<a class="linkImpressum" href="/impressum">{t("contact.impressum")}</a>*/} - </span>
                            <span><Link class="linkPrivacy" to="/privacy">{t("contact.privacy")}</Link>{/*<a class="linkPrivacy" href="/privacy">{t("contact.privacy")}</a>*/} -</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;