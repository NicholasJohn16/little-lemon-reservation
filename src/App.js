import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import Layout from './pages/Layout';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="reservations/confirmed" element={<ConfirmedBooking />} />
          <Route path="order" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
