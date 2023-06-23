import '../src/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
    </div>
  );
}

export default App;
