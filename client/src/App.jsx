import Home from './components/Home';
import Skiverleih from './components/Skiverleih';
import EBikes from './components/EBikes';
import Shop from './components/Shop';
import Privacy from './components/Privacy';
import Impressum from './components/Impressum';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { I18nextProvider } from 'react-i18next'
import React, { useState} from 'react';

function App() {
  const [language, setLanguage] = useState('de')
  return (
    <I18nextProvider language={language}>
      <Router>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/skiverleih" element={<Skiverleih/>}/>
            <Route path="/e-bikes" element={<EBikes/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/impressum" element={<Impressum/>}/>
          </Routes>
          
        </div>
      </Router>
    </I18nextProvider>
  )
}

export default App;
