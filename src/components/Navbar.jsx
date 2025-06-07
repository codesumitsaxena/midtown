import React from 'react';
import logo from "../images/main-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // ✅ Import faBars
import Cart from '../images/shopping-cart-svgrepo-com.png';
import lense from '../images/magnifying-glass-svgrepo-.png'; // ✅ Correct the filename

function Navbar() {
  return (
    <>
      <div className='mini'>
        <span className='mini-heading'>Questions? </span>
        <span className='mini-para'>Call us at (305)957 4334 or email marc@marcvane.com</span>
      </div>

      <div className="nav-container">
        <div className="logo">
          <img className='logo-img' src={logo} alt="logo" />
        </div>

        <ul className="nav-link"> 
          <li><a href="https://jsoneditoronline.org/#left=local.hucawu">PACKAGES</a></li>
          <li><a href="rental">RENTALS</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/Portfolio">PORTFOLIO</a></li>
          <li><a href="/About">ABOUT</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>

        <div className="input-box">
          <div className="input-container">
            <img className='lense' src={lense} alt="Search Icon" />
            <input type="text" className='search-area' placeholder='Search for products' />
          </div>
          <p>All Category</p>
        </div>
        <div className="menu-icon">
          <FontAwesomeIcon className='menu' icon={faBars} />
        </div>
        <div className="login">
          <a href="#">Login /</a>
          <a href="#">Register</a>
          <img className='cart' src={Cart} alt="Cart" />
        </div>

       
      </div>
    </>
  );
}

export default Navbar;
