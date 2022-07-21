import React from "react";
import './MainBody.css'
import Skiing from './../images/skiing.jpg'
import EbikeD from './../images/ebike-driving.jpg'
import Shop from './../images/shop.jpg'
import Service from './../images/service.jpg'
import Skidepot from './../images/skidepot.jpg'
import Skidepot2 from './../images/skidepot2.jpg'

const MainBody = () => {
    return(
        <div>
            {/*Jumbotron*/}
            <div class="container-fluid" id="jumbotronContainer">
                <div class="jumbotron text-center" id="jumbotronText">
                    <h1 class="display-5" id="Shop">Shop</h1>
                    <p class="lead">Wir bieten Winter- und Sommerprodukte an.</p>
                </div>
            </div>

            
            {/*Cards*/}
            <div class="row mx-auto">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-img"><img class="img-fluid" src={Skiing} alt="Skiing"/></div>
                            <div class="card-title"><h4>Winterausrüstung</h4></div>
                            <div class="card-text"><p>Ein Text zur beschreibung vom Skiverleih. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p></div>
                            <div><a href="/skiverleih" class="btn btn-primary">Zum Skiverleih</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-img"><img class="img-fluid" src={EbikeD} alt="E-Bike"/></div>
                            <div class="card-title"><h4>E-Bikes</h4></div>
                            <div class="card-text"><p>Ein Text zur beschreibung vom E-Bike Verleih. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p></div>
                            <div><a href="/e-bikes" class="btn btn-primary">Zum E-Bike Verleih</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-img"><img class="img-fluid" src={Shop} alt="Shop"/></div> {/*<!--Image too big!!!-->*/}
                            <div class="card-title"><h4>Shop</h4></div>
                            <div class="card-text"><p>Ein Text zur beschreibung vom Shop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p></div>
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
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={Service} alt="skiservice" class="rounded" id="serviceImg"/>{/*<!--height: 45vh; width: 90vw;-->*/} 
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="serviceText">
                        <h2 id="Service">Service</h2>
                        <hr id="horizontalLineService" class="rounded"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
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
            

            {/*Skidepot*/}
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
            </div>
        </div>
    )
}

export default MainBody;