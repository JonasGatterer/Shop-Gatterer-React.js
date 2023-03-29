import React, {useEffect} from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import Header from './Header';
import Footer from './Footer';
//import {CSSTransition} from "react-transition-group";
import "./Skiverleih.css"
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
//import TableHead from '@material-ui/core/TableHead';
//import TableRow from '@material-ui/core/TableRow';
//import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
//import Collapse from '@material-ui/core/Collapse';
//import IconButton from '@material-ui/core/IconButton';
//import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
//import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Test1 from './../images/test1.jpg'
import Test2 from './../images/test2.jpg'
import {useTranslation} from "react-i18next"

const Skiverleih = () => {
    /*
    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);*/

    const {t, i18n} = useTranslation();

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    /*
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    */

    return(
        <div class="verleih-main">
            <Header/>
            <div class="container verleih-firstSection">
                <div class="row verleih-row1">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <img src={Test1} alt="Your description" class="verleih-firstImg" data-aos="fade-right"/>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 verleih-firstText">
                        <h2>{/*Ski- & Snowboard-Verleih*/t("skiverleih.header1")}</h2>
                        <p>{t("skiverleih.firstSec1")}{/*Wenn Sie eine Skireise planen und eine hochwertige Ausrüstung benötigen, um das Beste aus Ihrem Erlebnis zu machen, sind Sie bei unserem Skiverleih an der richtigen Adresse! Wir bieten eine große Auswahl an Skiern, Skischuhen und anderer Ausrüstung für alle Könnerstufen, vom Anfänger bis zum Experten.*/} 
                            <br/><br/>
                            {t("skiverleih.firstSec2")}{/*Unsere sachkundigen und freundlichen Mitarbeiter helfen Ihnen, die perfekte Ausrüstung für Ihre Bedürfnisse und Vorlieben zu finden, damit Sie eine sichere und angenehme Zeit auf den Pisten verbringen können.*/}</p>
                        {/*Wenn Sie eine Skireise planen und eine hochwertige Ausrüstung benötigen, um das Beste aus Ihrem Erlebnis zu machen, sind Sie bei unserem Skiverleih an der richtigen Adresse! Wir bieten eine große Auswahl an Skiern, Skischuhen und anderer Ausrüstung für alle Könnerstufen, vom Anfänger bis zum Experten. Unsere sachkundigen und freundlichen Mitarbeiter helfen Ihnen, die perfekte Ausrüstung für Ihre Bedürfnisse und Vorlieben zu finden, damit Sie eine sichere und angenehme Zeit auf den Pisten verbringen können. Außerdem ist unser Verleihverfahren einfach und problemlos, so dass Sie mehr Zeit mit dem Skifahren verbringen können und sich weniger Gedanken über die Logistik machen müssen. Buchen Sie noch heute bei uns und machen Sie sich bereit, die Pisten mit Zuversicht zu befahren!*/}
                    </div>
                </div>
                <div class="row flex-row-reverse verleih-row2">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <img src={Test2} alt="Your description" class="verleih-secondImg" data-aos="fade-left"/>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 verleih-secondText">
                        <h2>{/*1A Equipment in Vals*/t("skiverleih.header2")}</h2>
                        <p>{t("skiverleih.secondSec1")}{/*Wir bieten eine große Auswahl an Skiern und Schuhen von einigen der renommiertesten Marken in der Branche. Unser Ziel ist es, unsere Kunden mit hochwertiger Ausrüstung zu versorgen, damit sie die Pisten in vollen Zügen genießen können.*/}
                            <br/><br/>
                            {t("skiverleih.secondSec2")}{/*Wir bieten eine Reihe von Skiern der beiden Marken Elan und Völkl an. Beide Marken können auf eine lange Tradition in der Herstellung von qualitativ hochwertigen Skiern zurückblicken, die für eine Vielzahl von Bedingungen ausgelegt sind.*/}
                            <br/><br/>
                            {t("skiverleih.secondSec3")}{/*Zusätzlich zu unserer Auswahl an Skiern bieten wir auch eine Reihe von Schuhen von Dalbello und Fischer an.*/}</p>
                    </div>
                </div>
            </div>

            {/*
            <div class="container fluid">
                <div class="jumbotron text-center">
                    <h4>Skiverleih</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>*/}
            

            {/*
            <div class="row mx-auto">
                <div class="col-lg-4">
            </div>
            </div>
            
            */}

            <div class="container fluid">
                <div class="verleih-middleSection text-center">
                    <h1>{/*Verleih Preise*/t("skiverleih.header3")}</h1>
                    {/*<p>Wir bieten sowohl Preise für Skisets als auch Einzelpreise für unsere hochwertige Ausrüstung. Ein Set enthaltet Skier, Schuhe und Stöcke, sodass Sie alles haben, was Sie für die Piste brauchen. </p>*/}
                    <p>Wir bieten sowohl Preise für Skisets als auch Einzelpreise für unsere hochwertige Ausrüstung. Ein Set enthaltet Skier, Schuhe und Stöcke. Der siebte Tag der Ausleihe ist kostenlos. Die ausgeliehene Ausrüstung können Sie kostenlos in unserem <a href="/#Skidepot">Skidepot</a> lagern.</p>
                </div>
            </div>

            

            <div class="container fluid">
                {/*
                Setpreise
                <button type="button" onClick={() => (setOpen(!open))}>hei</button>
                {open && ( */}
                    <div class='table-responsive'>
                        
                        <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                <th scope="col"><h4><b>Setpreise:</b></h4></th>
                                <th scope="col">1 Tag</th>
                                <th scope="col">2 Tage</th>
                                <th scope="col">3 Tage</th>
                                <th scope="col">4 Tage</th>
                                <th scope="col">5 Tage</th>
                                <th scope="col">6 + 7 Tage</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider table-divider-color">
                                <tr>
                                <th scope="row">Kinderski &lt; 130cm SET</th>
                                <td>€ 12</td>
                                <td>€ 21</td>
                                <td>€ 29</td>
                                <td>€ 36</td>
                                <td>€ 41</td>
                                <td>€ 45</td>
                                </tr>
                                <tr>
                                <th scope="row">Carver Allround SET</th>
                                <td>€ 21</td>
                                <td>€ 41</td>
                                <td>€ 55</td>
                                <td>€ 57</td>
                                <td>€ 62</td>
                                <td>€ 67</td>
                                </tr>
                                <tr>
                                <th scope="row">Mittelcarver 3*** SET</th>
                                <td class="text-nowrap">€ 29</td>
                                <td>€ 50</td>
                                <td>€ 70</td>
                                <td>€ 85</td>
                                <td>€ 96</td>
                                <td class="text-nowrap">€ 105</td>
                                </tr>
                                <tr>
                                <th scope="row">Mittelcarver 4**** SET</th>
                                <td class="text-nowrap">€ 34</td>
                                <td>€ 65</td>
                                <td>€ 91</td>
                                <td>€ 114</td>
                                <td class="text-nowrap">€ 133</td>
                                <td>€ 141</td>
                                </tr>
                                <tr>
                                <th scope="row">Racecarver 5***** SET</th>
                                <td class="text-nowrap">€ 36</td>
                                <td>€ 68</td>
                                <td>€ 95</td>
                                <td>€ 118</td>
                                <td class="text-nowrap">€ 139</td>
                                <td>€ 150</td>
                                </tr>
                                <tr>
                                <th scope="row">Tourenski SET</th>
                                <td>€ 25</td>
                                <td>€ 50</td>
                                <td>€ 75</td>
                                <td class="text-nowrap">€ 100</td>
                                <td>€ 118</td>
                                <td>€ 138</td>
                                </tr>
                                <tr>
                                <th scope="row">Langlauf Skating SET</th>
                                <td>€ 20</td>
                                <td>€ 40</td>
                                <td>€ 52</td>
                                <td>€ 64</td>
                                <td>€ 75</td>
                                <td>€ 80</td>
                                </tr>
                                <tr>
                                <th scope="row">Langlauf Standard SET</th>
                                <td>€ 18</td>
                                <td>€ 35</td>
                                <td>€ 45</td>
                                <td>€ 56</td>
                                <td>€ 67</td>
                                <td>€ 72</td>
                                </tr>
                                <tr>
                                <th scope="row">Snowboard Kinder &lt; 125cm SET</th>
                                <td>€ 12</td>
                                <td>€ 21</td>
                                <td>€ 29</td>
                                <td>€ 38</td>
                                <td>€ 41</td>
                                <td>€ 45</td>
                                </tr>
                                <tr>
                                <th scope="row">Snowboard Erwachsene SET</th>
                                <td>€ 29</td>
                                <td>€ 55</td>
                                <td>€ 76</td>
                                <td>€ 96</td>
                                <td>€ 113</td>
                                <td>€ 121</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                {/*
                )}
                */}


              
            </div> 
            
            <br/>
            
            <div class="container fluid">
                {/*
                Einzelpreise
                <button type="button" onClick={() => (setOpen2(!open2))}>hei</button>
                {open2 && ( */}
                    <div class="table-responsive">

                        <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                <th scope="col"><h4><b>Einzelpreise:</b></h4></th>
                                <th scope="col">1 Tag</th>
                                <th scope="col">2 Tage</th>
                                <th scope="col">3 Tage</th>
                                <th scope="col">4 Tage</th>
                                <th scope="col">5 Tage</th>
                                <th scope="col">6 + 7 Tage</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider table-divider-color">
                                <tr>
                                <th scope="row">Kinderski &lt; 130cm</th>
                                <td>€ 8</td>
                                <td>€ 14</td>
                                <td>€ 20</td>
                                <td>€ 24</td>
                                <td>€ 27</td>
                                <td>€ 30</td>
                                </tr>
                                <tr>
                                <th scope="row">Carver Allround</th>
                                <td class="text-nowrap">€ 16</td>
                                <td>€ 32</td>
                                <td>€ 43</td>
                                <td>€ 49</td>
                                <td>€ 53</td>
                                <td>€ 55</td>
                                </tr>
                                <tr>
                                <th scope="row">Mittelcarver 3***</th>
                                <td class="text-nowrap">€ 20</td>
                                <td>€ 38</td>
                                <td>€ 51</td>
                                <td>€ 63</td>
                                <td>€ 70</td>
                                <td>€ 75</td>
                                </tr>
                                <tr>
                                <th scope="row">Mittelcarver 4****</th>
                                <td>€ 25</td>
                                <td>€ 48</td>
                                <td>€ 66</td>
                                <td>€ 81</td>
                                <td>€ 89</td>
                                <td>€ 95</td>
                                </tr>
                                <tr>
                                <th scope="row">Racecarver 5*****</th>
                                <td>€ 27</td>
                                <td>€ 51</td>
                                <td>€ 70</td>
                                <td>€ 85</td>
                                <td>€ 99</td>
                                <td>€ 110</td>
                                </tr>
                                <tr>
                                <th scope="row">Tourenski</th>
                                <td>€ 20</td>
                                <td>€ 40</td>
                                <td>€ 59</td>
                                <td>€ 79</td>
                                <td>€ 93</td>
                                <td class="text-nowrap">€ 108</td>
                                </tr>
                                <tr>
                                <th scope="row">Ski- oder Snowboardschuhe</th>
                                <td>€ 12</td>
                                <td>€ 22</td>
                                <td>€ 31</td>
                                <td>€ 40</td>
                                <td>€ 48</td>
                                <td>€ 57</td>
                                </tr>
                                <tr>
                                <th scope="row">Helm</th>
                                <td>€ 5</td>
                                <td>€ 6</td>
                                <td>€ 7</td>
                                <td>€ 8</td>
                                <td>€ 9</td>
                                <td>€ 10</td>
                                </tr>
                                <tr>
                                <th scope="row">Stöcke</th>
                                <td>€ 2</td>
                                <td>€ 3</td>
                                <td>€ 4</td>
                                <td>€ 5</td>
                                <td>€ 6</td>
                                <td>€ 7</td>
                                </tr>
                                <tr>
                                <th scope="row">Rodel/Bob</th>
                                <td>€ 10</td>
                                <td>€ 15</td>
                                <td>€ 20</td>
                                <td>€ 25</td>
                                <td>€ 30</td>
                                <td>€ 35</td>
                                </tr>
                                <tr>
                                <th scope="row">Schneeschuhe</th>
                                <td>€ 10</td>
                                <td>€ 18</td>
                                <td>€ 24</td>
                                <td>€ 31</td>
                                <td>€ 36</td>
                                <td>€ 42</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                {/*
                )}
                */}

            <br/><br/>

              
            </div> 
            <Footer/>
        </div>
    )
}

export default Skiverleih;