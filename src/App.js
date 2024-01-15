// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Index from './components/Index';
import Cart from './components/Cart';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
    
       <Router>
        <Routes>
          <Route exact path="/" element={<Index/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/shop" element={<Shop />}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
