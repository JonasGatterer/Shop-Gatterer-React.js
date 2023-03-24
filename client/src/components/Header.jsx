import React from "react";
import './Header.css'
import Logo from "./../images/logo.jpg"

//<!--sticky-top-->
//style={{max-height: 8vh; margin-left: 2vh}}
//line 18,33,37,39 replace link with something else

const Header = () => {
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
                            <a class="nav-link" href="/#Home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#Shop">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#Service">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#Skidepot">Skidepot</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Kontakt">Kontakt</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="https.google.com" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                DE
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item" href="https.google.com">IT</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="https.google.com">EN</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;