
import './App.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Home from "./components/Home.js";
import AboutUs from './components/AboutUs.js';
import Products from './components/Products.js';
import EmailForm from './components/EmailForm.jsx';
import Footer from './components/Footer.js';
// import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
    
          <Route path="/Products" element={<Products />} />

          <Route path="/AboutUs" element={<AboutUs />} />

          <Route path="/EmailForm" element={<EmailForm />} />

        </Routes>
      </BrowserRouter>
      <Footer />

    </div>

  );
}

export default App;
