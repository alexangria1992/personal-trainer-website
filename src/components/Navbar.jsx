import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../../images/logo-light.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='navbar'>
      <a href='#' className='navbar__logo'>
        <img src={logo} alt='Logo' className='navbar__mark' />
        <div className='logo__text'></div>
      </a>

      <button
        className='navbar__toggle'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MOBILE NAVBAR MENU */}

      {isOpen && (
        <nav className='navbar__menu'>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#pricing'>Pricing</a>
          <a href='#contact'>Contact</a>

          <a href='#contact' className='navbar__cta'>
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
