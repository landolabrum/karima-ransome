// import './main.css';
import Nav from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Form from './components/ContactForm';

import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router basename='/'>
        <Nav/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <div id="contactForm" className="modal secondary">
        <div className="modal-content">
          <Form/>
        </div>
        </div>
        <Contact/>
    </Router>
  );
}