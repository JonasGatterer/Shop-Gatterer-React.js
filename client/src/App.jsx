import Home from './components/Home';
import Skiverleih from './components/Skiverleih';
import EBikes from './components/EBikes';
import Shop from './components/Shop';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skiverleih" element={<Skiverleih/>}/>
          <Route path="/e-bikes" element={<EBikes/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
        
      </div>
    </Router>
  )
}

export default App;
