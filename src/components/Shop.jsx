import "aos/dist/aos.css"
import Header from './Header';
import Footer from './Footer';
import './Shop.css'
import { Picture1, Picture2, Picture3, Picture4, Picture5 /*, Picture6, Picture7, Picture8, Picture9, Picture10*/ } from './../images/pictureIndex'
//import from pictureIndex.js!!!
import {useTranslation} from "react-i18next"

const Shop = () => {
    //const pictures = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10]

    const {t, i18n} = useTranslation();

    return(
        <div class="bg-white">
            <Header/>
            {/*
            <div id="main">
                <div class="container fluid" id="description">
                    <div class="jumbotron text-center">
                        <h4>Shop</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="modal-content">
                    <div class="modal-body">
                        hello
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            {pictures.map((values, i) => (
                                <div class="col-12 col-sm-6 col-md-5 col-lg-4 mb-4 justify-content-center d-flex">
                                    <img height="265" width="265" alt="shop" src={values} id="picture"/>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            */}
            <div class="container fluid">
                <div class="mainShopText text-center">
                    <h1>Shop Gatterer</h1>
                    <br/>
                    <p>{t("shop.text")}</p>
                </div>
            </div>

            <div class="mainShop">
                <img class="rounded grid-col-span-2" src={Picture1} alt=""/>
                <img class="rounded" src={Picture2} alt=""/>
                <img class="rounded grid-row-span-2" src={Picture3} alt=""/>
                <img class="rounded" src={Picture4} alt=""/>
                <img class="rounded grid-col-span-2" src={Picture5} alt=""/>
                {/*
                <img class="rounded" src={Picture6} alt="" />
                <img class="rounded" src={Picture7} alt="" />
                <img class="rounded" src={Picture8} alt="" />
                <img class="rounded" src={Picture9} alt="" />
                <img class="rounded" src={Picture10} alt="" />
                 */}
            </div>
            <Footer/>
        </div>
    )
}

export default Shop;