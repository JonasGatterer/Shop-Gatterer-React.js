import Home from './components/Home';
import Skiverleih from './components/Skiverleih';
import EBikes from './components/EBikes';
import Shop from './components/Shop';
import Privacy from './components/Privacy';
import Impressum from './components/Impressum';
import { BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom";
import {createRoutesFromElements, createBrowserRouter, RouterProvider} from "react-router-dom";
import { I18nextProvider } from 'react-i18next'
import React, { useState} from 'react';
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  const [language, setLanguage] = useState('de');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element ={<Root />}>
        <Route index element={<Home/>}/>
        <Route path="/skiverleih" element={<Skiverleih/>}/>
        <Route path="/e-bikes" element={<EBikes/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/impressum" element={<Impressum/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

{{/*<Router>
        <div className="App">
          <I18nextProvider language={language}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/skiverleih" element={<Skiverleih/>}/>
            <Route path="/e-bikes" element={<EBikes/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/impressum" element={<Impressum/>}/>
          </Routes>
          </I18nextProvider>
        </div>
      </Router>*/}}

const Root = () => {
  return(
    <>
      <main>
        <ScrollToTop/>
        <Outlet />
      </main>
    </>
  )
}

export default App;
