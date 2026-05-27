import React from 'react';
import contactImg from '../../images/pull-up.png';
import { Mail, MapPin } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import './Contact.css';
const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <img
        src={contactImg}
        alt='Alex doing a pull up'
        className='contact__image'
      />

      <div className='contact__overlay'></div>

      <div className='contact__content'>
        <p className='contact__eyebrow'>Contact</p>

        <h2 className='contact__title'>Ready To Get Started?</h2>

        <p className='contact__text'>
          Get in touch to book your consultation or ask about 1-1 training,
          online coaching, and session packs.
        </p>

        <div className='contact__details'>
          <a href='https://maps.google.com/?q=Warkworth Auckland New Zealand'>
            <MapPin size={18} />
            Warkworth, Auckland, New Zealand
          </a>

          <a href='mailto:alex040892@gmail.com'>
            <Mail size={18} />
            alex040892@gmail.com
          </a>

          <a
            href='https://www.instagram.com/_alexandre_benjamin'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram size={18} />
            @_alexandre_benjamin
          </a>
        </div>

        <a href='mailto:alex040892@gmail.com' className='contact__button'>
          Contact Me <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
