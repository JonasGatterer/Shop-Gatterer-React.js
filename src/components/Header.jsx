import React from "react";
import './Header.css'
import Logo from "./../images/logo.jpg"
import {useTranslation} from "react-i18next"

//<!--sticky-top-->
//style={{max-height: 8vh; margin-left: 2vh}}
//line 18,33,37,39 replace link with something else

const Header = () => {

    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return(
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top"> 
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img id="logo" src={Logo} alt="Logo"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/#Home">{t("header.header1")}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#Shop">{t("header.header2")}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#Service">{t("header.header3")}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#Skidepot">{t("header.header4")}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Kontakt">{t("header.header5")}</a>
                        </li>
                        {/*
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <button id="languageButton" onClick={() => changeLanguage("de")}>DE</button>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item"><button id="languageButton" onClick={() => changeLanguage("it")}>IT</button></a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item"><button id="languageButton" onClick={() => changeLanguage("en")}>EN</button></a></li>
                            </ul>
                        </li>
                        */}
                        <li class="nav-item dropstart">
                            <button class="no-button nav-link dropdown-toggle" id="navbarScrollingDropdown" data-bs-toggle="dropdown" aria-expanded="false">{/*role="button"*/}
                                <span class="material-icons">translate</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li>{/*<a class="dropdown-item">*/}{/*id="languageButton"*/}
                                    <button class="dropdown-item"  onClick={() => changeLanguage("de")}>Deutsch</button>
                                {/*</a>*/}</li>
                                <li><hr class="dropdown-divider"/></li>
                                <li>{/*<a class="dropdown-item">*/}
                                    <button class="dropdown-item" onClick={() => changeLanguage("it")}>Italiano</button>
                                {/*</a>*/}</li>
                                <li><hr class="dropdown-divider"/></li>
                                <li>{/*<a class="dropdown-item">*/}
                                    <button class="dropdown-item" onClick={() => changeLanguage("en")}>English</button>
                                {/*</a>*/}</li>
                            </ul>
                        </li>
                        {/*
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option onSelect={() => changeLanguage("de")} selected>DE</option>
                            <option onSelect={() => changeLanguage("it")} value="1">IT</option>
                            <option onSelect={() => changeLanguage("en")} value="2">EN</option>
                        </select>
                        */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;