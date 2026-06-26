import React from 'react';
import { motion } from 'framer-motion';
import contactImg from '../../images/pull-up.png';
import { Mail, MapPin } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import './Contact.css';
import { fadeIn, staggerContainer } from '../lib/animations';

const contactImageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.06,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const overlayReveal = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.15,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Contact = () => {
  return (
    <motion.section
      className='contact'
      id='contact'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.img
        src={contactImg}
        alt='Alex doing a pull up'
        className='contact__image'
        variants={contactImageReveal}
      />

      <motion.div
        className='contact__overlay'
        variants={overlayReveal}
      ></motion.div>

      <motion.div className='contact__content' variants={staggerContainer}>
        <motion.p className='contact__eyebrow' variants={fadeIn('up', 0.1)}>
          Contact
        </motion.p>

        <motion.h2 className='contact__title' variants={fadeIn('up', 0.2)}>
          Ready To Get Started?
        </motion.h2>

        <motion.p className='contact__text' variants={fadeIn('up', 0.35)}>
          Get in touch to book your consultation or ask about 1-1 training,
          online coaching, and session packs.
        </motion.p>

        <motion.div className='contact__details' variants={staggerContainer}>
          <motion.a
            href='https://maps.google.com/?q=Warkworth Auckland New Zealand'
            variants={fadeIn('up', 0.5)}
          >
            <MapPin size={18} />
            Warkworth, Auckland, New Zealand
          </motion.a>

          <motion.a
            href='mailto:alex040892@gmail.com'
            variants={fadeIn('up', 0.62)}
          >
            <Mail size={18} />
            alex040892@gmail.com
          </motion.a>

          <motion.a
            href='https://www.instagram.com/_alexandre_benjamin'
            target='_blank'
            rel='noreferrer'
            variants={fadeIn('up', 0.74)}
          >
            <FaInstagram size={18} />
            @_alexandre_benjamin
          </motion.a>
        </motion.div>

        <motion.a
          href='mailto:alex040892@gmail.com'
          className='contact__button'
          variants={fadeIn('up', 0.9)}
        >
          Contact Me <span>→</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
