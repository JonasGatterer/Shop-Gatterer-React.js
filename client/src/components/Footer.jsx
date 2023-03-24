import React from "react";
import './Footer.css'
import FacebookIcon from './../images/facebook.svg'
import InstagramIcon from './../images/instagram.svg'
import GithubIcon from './../images/github.svg'

const Footer = () => {
    return(
        <div class="container-fluid bg-light" id="kontakte">
            <div class="kontakteContainer">
                <div>
                    <h2 class="text-center" id="Kontakt">Kontakte</h2>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="leftContainer">
                        <p class="header">Öffnungszeiten:</p>
                        <ul>
                            <li>Mo-Fr: 8.00 bis 18.00 Uhr</li>
                            <li>Sa-So: 8.00 bis 18.00 Uhr</li>
                        </ul>
                        <br/>
                        <p><span class="material-icons">place</span> Hinterlände 5, 39037 Vals, Südtirol (IT)</p>
                        <p><a id="tel" href="tel:+0039-0472-547010"><span class="material-icons">call</span> +39 0472 547010</a></p>
                        <p><a id="email" href="mailto:info@skiverleih-gatterer.com"><span class="material-icons">mail</span> info@skiverleih-gatterer.com</a></p>
                        <div id="icons">
                            <span id="fbSpan"><a href="https://www.facebook.com/pages/category/Ski---Snowboard-Shop/Skiverleih-Gatterer-105882358059523/"><img id="fbIcon" src={FacebookIcon} alt="facebook link"/></a></span>
                            <span id="instaSpan"><a href="https://www.instagram.com/"><img id="instaIcon" src={InstagramIcon} alt="instagram link"/></a></span>
                            <span id="gitSpan"><a href="https://github.com/JonasGatterer/Shop-Gatterer-React.js"><img id="gitIcon" src={GithubIcon} alt="github link"/></a></span>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="rightContainer">
                        <form action="">
                            <div class="mb-3">
                                <label for="emailInput" class="form-label header">E-Mail:</label>
                                <input maxLength={50} type="email" class="form-control" id="emailInput" placeholder="name@example.com" required/>
                            </div>
                            <div class="mb-3">
                                <label for="messageInput" class="form-label header">Nachricht:</label>
                                <textarea maxLength={300} class="form-control" id="messageInput" rows="3" required></textarea>
                            </div>
                            <button type="submit" formaction="/" class="btn btn-dark">Send</button>
                        </form>
                    </div>
                </div>
                <div class="mt-4 text-center">
                            <span>- <a class="linkImpressum" href="/impressum">Impressum</a> - </span>
                            <span><a class="linkPrivacy" href="/privacy">Privacy</a> -</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;