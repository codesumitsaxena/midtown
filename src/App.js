import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header';
import Contact from './components/Contact';
import Midtown from './components/Midtown';
import Partner from './components/Partner';
import Event from './components/Event';
import Concert from './components/Concert';
import Slider from './components/Slider'
import Support from './components/Support'
import Enquiry from './components/Enquiry'
import Requirement from './components/Requirement';
import Footer from './components/Footer'
import MiniFooter from './components/MiniFooter';

function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <Contact/>
      <Midtown/>
      <Partner/>
      <Event/>
      <Concert/>
      <Slider/>
      <Support/>
      <Enquiry/>
      <Requirement/>
      <Footer/>
      <MiniFooter/>
      
    </div>
  );
}

export default App;
