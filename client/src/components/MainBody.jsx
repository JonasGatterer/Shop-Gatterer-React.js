import React, {useEffect} from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import './MainBody.css'
import Skiing from './../images/skiing.jpg'
import EbikeD from './../images/ebike-driving.jpg'
import Shop from './../images/shop.jpg'
import Service from './../images/service.jpg'
//import Skidepot from './../images/skidepot.jpg'
//import Skidepot2 from './../images/skidepot2.jpg'
import Skidepot3 from './../images/skidepot3.jpg.png'

const MainBody = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return(
        <div class="bg-white">
            {/*Jumbotron
            <div class="container-fluid" id="jumbotronContainer">
                <div class="jumbotron text-center" id="jumbotronText">
                    <h1 class="display-5" id="Shop" >Shop</h1>
                    <p class="lead">Wir bieten Winter- und Sommerprodukte an.</p>
                </div>
            </div>*/}

            
            {/*Cards*/}
            <div class="row mx-auto cards" id="Shop">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div class="card" data-aos="fade-up">
                        <div class="card-body">
                            <div class="card-img"><img class="img-fluid" src={Skiing} alt="Skiing" id="skiingCardImg"/></div>
                            <div class="card-title"><h4>Winterausrüstung</h4></div>
                            <div class="card-text"><p>Wir bieten eine große Auswahl an hochwertiger Skiausrüstung zum Verleih und Verkauf. In unserem Verleih können Sie alles von Skiern über Snowboards bis hin zu Langlaufskiern in verschiedenen Größen und Stilen für jede Könnerstufe mieten.</p></div>
                            <div><a href="/skiverleih" class="btn btn-primary">Zum Skiverleih</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div class="card" data-aos="fade-up">
                        <div class="card-body">
                            <div class="card-img"><img class="img-fluid" src={EbikeD} alt="E-Bike" id="ebikeCardImg"/></div>
                            <div class="card-title"><h4>E-Bikes</h4></div>
                            <div class="card-text"><p>Möchten Sie die Natur auf zwei Rädern erkunden? Unser E-Bike-Verleih ist die perfekte Möglichkeit dazu. Wir haben eine Reihe von Elektrofahrrädern im Angebot, die alle mit der neuesten Technologie ausgestattet und auf maximalen Komfort und Leistung ausgelegt sind.</p></div>
                                                    {/*Ganz gleich, ob Sie die nähere Umgebung erkunden oder ein anspruchsvolleres Terrain in Angriff nehmen möchten, unsere E-Bikes bringen Sie ans Ziel. Das Verleihverfahren ist schnell und einfach, und wir stehen Ihnen jederzeit mit Tipps und Ratschlägen zu den besten Routen zur Seite.*/}
                            <div><a href="/e-bikes" class="btn btn-primary">Zum E-Bike-Verleih</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4 shopCard">
                    <div class="card" data-aos="fade-up">
                        <div class="card-body">
                            <div class="card-img"><img class="img-fluid" src={Shop} alt="Shop" id="shopCardImg"/></div> {/*<!--Image too big!!!-->*/}
                            <div class="card-title"><h4>Shop</h4></div>
                            <div class="card-text"><p>Neben unserem Ski- und E-Bike-Verleih haben wir auch einen Geschenkeladen, in dem Sie das perfekte Souvenir oder Geschenk für Ihre Liebsten finden können. Wir bieten eine breite Palette einzigartiger, handgefertigter und regionaler Artikel an.</p></div>
                                                    {/*, darunter skibezogene Geschenke, Kleidung und Accessoires sowie traditionelle Souvenirs und handgefertigte Artikel. Unser Souvenirshop ist der ideale Ort, um etwas Besonderes zu finden, das Sie an Ihren Aufenthalt in der Region erinnert, oder um ein Geschenk für jemand Besonderen zu besorgen. Unser freundliches Personal berät Sie gerne und hilft Ihnen bei der Suche nach dem perfekten Geschenk.*/}
                            <div><a href="/shop" class="btn btn-primary">Zum Shop</a></div>
                        </div>
                    </div>
                </div>
            </div>

            {/*
            <!--
                <div class="container-fluid padding"> 
                    <div class="row text-center padding">
                        <div id="card" class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <img src="images/skiing.jpg" alt="Skiing">
                            <h4>Winterausrüstung</h4>
                            <p>Ein Text zur beschreibung vom Skiverleih</p>
                        </div>
                        <div id="card" class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <img src="images/ebike-driving.jpg" alt="E-Bike">
                            <h4>E-Bikes</h4>
                            <p>Ein Text zur beschreibung vom E-Bike Verleih</p>
                        </div>
                        <div id="card" class="col-xs-12 col-md-12 col-lg-4">
                            <img src="#" alt="Shop">
                            <h4>Shop</h4>
                            <p>Ein Text zur beschreibung vom Shop</p>
                        </div>
                    </div>
                </div>
            -->
            <!--
                <div class="container-fluid text-center">
                    <div class="jumbotron">
                        <hr class="my-5">
                    </div>
                </div> 
            -->
            <!--   
                <div class="row text-center slideanim slide">
                    <div class="col-sm-4">
                    <div class="thumbnail">
                        <img src="images/skiing.jpg" alt="Skiing" width="350" height="300">
                        <p><strong>Winterausrüstung</strong></p>
                        <p>Ein Text zur beschreibung vom Skiverleih</p>
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="thumbnail">
                        <img src="images/ebike-driving.jpg" alt="E-Bike" width="350" height="300">
                        <p><strong>E-Bikes</strong></p>
                        <p>Ein Text zur beschreibung vom E-Bike Verleih</p>
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="thumbnail">
                        <img src="#" alt="Shop" width="350" height="300">
                        <p><strong>Shop</strong></p>
                        <p>Ein Text zur beschreibung vom Shop</p>
                    </div>
                    </div>
                </div>
            -->
            */}

            {/*Service*/}
            <div class="container-fluid" id="serviceContainer">
                <div class="row border rounded shadow-lg p-3 mb-5 rounded" id="serviceContainter">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={Service} alt="skiservice" class="rounded" id="serviceImg"/>{/*<!--height: 45vh; width: 90vw;-->*/} 
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" id="serviceText">
                        <h2 id="Service">Service</h2>
                        {/*<hr id="horizontalLineService" class="rounded"/>*/}
                        <p>Wir verfügen über eine eigene Skiwerkstatt, in der wir eine Reihe von Skiservices anbieten, um Ihre Ausrüstung in bestem Zustand zu halten.
                            <br/><br/>
                            Unsere erfahrenen Techniker können Ihnen alles bieten, vom einfachen Skiwachsen und Kantenschleifen bis hin zu fortgeschrittenen Reparaturen und Einstellungen. Egal, ob Sie ein schnelles Tune-up oder einen kompletten Skiservice benötigen, wir haben alles für Sie.
                            <br/><br/>
                            Unsere Skiwerkstatt ist mit den modernsten Werkzeugen und Geräten ausgestattet, um sicherzustellen, dass Ihre Skier nach den höchsten Standards gewartet werden. Wir verwenden nur die besten Materialien und Produkte, damit Sie sicher sein können, dass Ihre Skier auf dem Berg ihre beste Leistung bringen.
                            {/*<br/><br/>
                            Zusätzlich zu unserer Skiwerkstatt bieten wir unseren Kunden auch einen Skiservice an. Wenn Sie bei uns Skier leihen, können Sie unseren Skiservice in Anspruch nehmen, um sicherzustellen, dass Ihre Ausrüstung immer in einem Top-Zustand ist.*/}
                        </p>
                    </div>
                </div>
            </div>

            {/*Vertical Line*/}
            <div class="container-fluid" id="horizontalLine">
                <div class="container-fluid text-center">
                    <div class="jumbotron">
                        <hr class="my-5" id="Skidepot"/>
                    </div>
                </div>
            </div>
            

            {/*Skidepot original:
            <div class="container-fluid" id="depotContainer">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" id="imgContainer">
                        <img src={Skidepot} alt="skidepot" id="imgSkidepot1"/>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" id="imgContainer">
                        <img src={Skidepot2} alt="skidepot2" id="imgSkidepot2"/>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h2>Skidepot</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
            </div>*/}

            {/*Skidepot*/}
            <div class="container-fluid" id="depotContainer">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2">
                        {/*Ein sicherer Ort nahe der Lifte*/}
                        {/*<span>Ski und Snowboard</span>*/}
                        <h2 class="depotHeader">Skidepot</h2>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <p>Unser Skidepot ist der perfekte Ort, um Ihre Skiausrüstung vor und nach einem Tag auf der Piste zu lagern!</p>
                        <div class="specialTextDiv">
                            <p>
                                <span class="specialText">Das Skidepot können Sie kostenlos benutzen, wenn Sie die Ausrüstung bei uns ausleihen!</span>
                            </p>
                        </div>
                        <p>Wir bieten Ihnen an unserer Verleihstation beheizte Schließfächer an, in denen Sie Ihre persönlichen Gegenstände während des Skifahrens und Ihre Ski- oder Snowboardausrüstung über Nacht unterbringen können. In unserer Aufbewahrungseinrichtung sind Ihre Gegenstände und Ausrüstung sicher und geschützt. Sie können das Skidepot vor Ort buchen.</p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center" id="depotImgContainer">
                        <img src={Skidepot3} alt="skidepot" id="imgSkidepot"/>
                        {/*<img src={Skidepot} alt="skidepot" id="imgSkidepot"/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody;