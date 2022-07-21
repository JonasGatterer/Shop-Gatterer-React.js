import Header from './Header';
import Footer from './Footer';
import "./EBikes.css"
import React, { useState } from 'react';

const EBikes = () => {
    const [image, setState] = useState(true);

    return(
        <div>
            <Header/>
            <div id="cards">
                <div class="container mt-5 mb-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-10">
                            <div class="card">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="images p-3">
                                            <div class="text-center p-4"> <img id="main-image" src={image ? "https://www.ciclipuzone.com/prodotti/1634030411B-CROSS_A6_2_png.png" : "https://e-shop.leaderfox.com/userdata/cache/images/storecards/K21-9-6-2-1-1-225/900/BARNET_GENT_blackmatt_orange.jpeg"} alt="E-Bike" width="350" /> </div>
                                            <div class="thumbnail text-center"> <img onClick={() => setState(true)} src="https://www.ciclipuzone.com/prodotti/1634030411B-CROSS_A6_2_png.png" alt="E-Bike side view" width="100"/> <img onClick={() => setState(false)} src="https://e-shop.leaderfox.com/userdata/cache/images/storecards/K21-9-6-2-1-1-225/900/BARNET_GENT_blackmatt_orange.jpeg" alt="E-Bike front view" width="100"/> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="product p-4">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1"></span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                                            </div>
                                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">Men</span>
                                                <h5 class="text-uppercase">E-Bike ...</h5>
                                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">$43</span>
                                                    <div class="ml-2"> <small class="dis-price">$48</small> <span>10% OFF</span> </div>
                                                </div>
                                                <div class="sizes mt-4" id='days'>
                                                    <h6 class="text-uppercase">Verleih Tage:</h6> <label class="radio"> <input type="radio" name="size" value="S" checked/> <span>1</span> </label> <label class="radio"> <input type="radio" name="size" value="M"/> <span>2</span> </label> <label class="radio"> <input type="radio" name="size" value="L"/> <span>3</span> </label> <label class="radio"> <input type="radio" name="size" value="XL"/> <span>4</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL"/> <span>5</span> </label>
                                                </div>
                                            </div>
                                            <p class="about">
                                                <br/>Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.
                                                <br/><br/>E-MTBike der Marke Conway EWME 429
                                                <br/>Federweg: V+H 160 mm
                                                <br/>Motor: Shimano EB8
                                                <br/>Akku: 630 Wh
                                                <br/>Federgabel: RockShox Lyric 160mm
                                                <br/>Dämpfer: Fox Float DPS
                                                <br/>Bremsen : Magura E-Stop  203/203 mm
                                                <br/>Absenkbare Sattelstütze
                                            </p>
                                            <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Keine online Reservierung möglich</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default EBikes;