import { useDispatch,useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import Coin from './pages/Coin';
import News from './pages/News';

function App() {

  return (
    
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/coin/:coinsId" element={<Coin />} />
          <Route path="/news" element={<News />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
