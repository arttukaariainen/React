import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
    <Header />
    <div className='container'>
      <h3>Here you can find some good advices</h3>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
