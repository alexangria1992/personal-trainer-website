import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../../images/logo-light.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const enquiryFormLink = 'https://forms.gle/DnjrkBdjY9Gg9VV86';

  return (
    <header className='navbar'>
      <a className='navbar__logo'>
        <img src={logo} alt='Logo' className='navbar__mark' />
      </a>

      <button
        className='navbar__toggle'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MOBILE NAVBAR MENU */}

      <nav className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
        <Link
          to='about'
          smooth={true}
          duration={1200}
          offset={-90}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to='services'
          smooth={true}
          duration={1200}
          offset={-90}
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to='testimonial'
          smooth={true}
          duration={1200}
          offset={-90}
          onClick={() => setIsOpen(false)}
        >
          Testimonial
        </Link>
        <Link
          to='contact'
          smooth={true}
          duration={1200}
          offset={-90}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </nav>
      <a
        href={enquiryFormLink}
        target='_blank'
        rel='noreferrer'
        className='navbar__cta'
      >
        Book Now
      </a>
    </header>
  );
};

export default Navbar;
