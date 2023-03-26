import Header from './Header';
import Footer from './Footer';
import "./EBikes.css"
import BikeFront1 from './../images/bikeFront1.png'
import BikeFront2 from './../images/bikeFront2.png'
import BikeSide1 from './../images/bikeSide1.png'
import BikeSide2 from './../images/bikeSide2.png'
import React, { useState, useEffect } from 'react';

const EBikes = () => {
    const [firstBike, setFirstBike] = useState(BikeFront1);
    const [secondBike, setSecondBike] = useState(BikeFront2);
    const [firstDays, setFirstDays] = useState(0);
    const [secondDays, setSecondDays] = useState(0);
    const [resArray, setResArray] = useState([]);
    const expensivePrices = [50, 60, 70, 80, 90]
    const prices = [45, 54, 63, 72, 81];

    const getBike = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/eBikeFreature");
            const jsonData = await response.json();
            setResArray(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
      getBike();  
    }, []);

    const changePicture = (i, picture) => {
        if(i === 0){
            if(picture !== "front"){
                setFirstBike(BikeSide1)
            }else{
                setFirstBike(BikeFront1)
            }
        }else{
            if(picture !== "front"){
                setSecondBike(BikeSide2)
            }else{
                setSecondBike(BikeFront2)
            }
        }
    }

    //console.log(resArray);
    //const {ebikefeatureid: index, ebike_name: name, ebike_gear: gear, ebike_fork: fork, ebike_engine: engine, ebike_damper: damper, ebike_brake: brake, ebike_battery: battery} = bikes;

    return(
        <div>
            <Header/>
            <div id="header"></div>
            {resArray.map((bikes, i) => (
                <div id="cards">
                    <div class="container mt-3 mb-3">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-10">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="images p-3">
                                                <div class="text-center p-4"> <img id="main-image" src={i === 0 ? firstBike : secondBike} alt="E-Bike" width="400" /> </div>
                                                <div class="thumbnail text-center"> <img onClick={() => changePicture(i, "front")} src={i === 0 ? BikeFront1 : BikeFront2} alt="E-Bike side view" width="150"/> <img onClick={() => changePicture(i, "side")} src={i === 0 ? BikeSide1 : BikeSide2} alt="E-Bike front view" width="150"/> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="product p-4">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1"></span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                                                </div>
                                                <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">{i === 0 ? "Men" : "Women"}</span>
                                                    <h5 class="text-uppercase">E-Mountainbike</h5>
                                                    <div class="price d-flex flex-row align-items-center"> <span class="act-price">{i === 0 ? prices[firstDays] : prices[secondDays]}€</span>
                                                        <div class="ml-2"> <small class="dis-price">{i === 0 ? expensivePrices[firstDays] : expensivePrices[secondDays]}€</small> <span>10% OFF</span> </div>
                                                    </div>
                                                    <div class="sizes mt-4" id='days'>
                                                        <h6 class="text-uppercase">Verleih Tage:</h6> 
                                                        <label class="radio"> 
                                                            <input type="radio" name={"size" + i} value={"S" + i} onChange={() => (i === 0 ? setFirstDays(0) : setSecondDays(0))} checked={i === 0 ? (firstDays === 0) : (secondDays === 0)}/> 
                                                            <span>1</span> 
                                                        </label> 
                                                        <label class="radio"> 
                                                            <input type="radio" name={"size" + i} value={"M" + i} onChange={() => (i === 0 ? setFirstDays(1) : setSecondDays(1))} checked={i === 0 ? (firstDays === 1) : (secondDays === 1)}/> 
                                                            <span>2</span> 
                                                        </label> 
                                                        <label class="radio"> 
                                                            <input type="radio" name={"size" + i} value={"L" + i} onChange={() => (i === 0 ? setFirstDays(2) : setSecondDays(2))} checked={i === 0 ? (firstDays === 2) : (secondDays === 2)}/> 
                                                            <span>3</span> 
                                                        </label> 
                                                        <label class="radio"> 
                                                            <input type="radio" name={"size" + i} value={"XL" + i} onChange={() => (i === 0 ? setFirstDays(3) : setSecondDays(3))} checked={i === 0 ? (firstDays === 3) : (secondDays === 3)}/> 
                                                            <span>4</span> 
                                                        </label> 
                                                        <label class="radio"> 
                                                            <input type="radio" name={"size" + i} value={"XXL" + i} onChange={() => (i === 0 ? setFirstDays(4) : setSecondDays(4))} checked={i === 0 ? (firstDays === 4) : (secondDays === 4)}/> 
                                                            <span>5</span> 
                                                        </label>
                                                    </div>
                                                </div>
                                                <p class="about">
                                                    {/*<br/><p class="bg-warning">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                                                    <br/>*/}<br/><b>Name:</b> {bikes.ebike_name}
                                                    <br/><b>Motor:</b> {bikes.ebike_engine}
                                                    <br/><b>Akku:</b> {bikes.ebike_battery}
                                                    <br/><b>Bremsen:</b> {bikes.ebike_brake}
                                                    <br/><b>Getriebe:</b> {bikes.ebike_gear}
                                                    <br/><b>Dämpfer:</b> {bikes.ebike_fork} {bikes.ebike_damper}
                                                </p>
                                                <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Keine online Reservierung möglich</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Footer/>
        </div>
    )
}

export default EBikes;