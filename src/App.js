import '../src/css/HomeAndComponents.css';
import '../src/css/AboutUs.css'
import '../src/css/ContactUs.css'
import '../src/css/App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
