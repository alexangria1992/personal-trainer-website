import React from 'react';
import './Hero.css';
import heroImg from '../../images/dumbbell-squat-2.png';
import { motion } from 'framer-motion';
import { fadeIn, imageReveal, staggerContainer } from '../lib/animations';

const Hero = () => {
  return (
    <section className='hero'>
      <motion.div
        className='hero__image'
        variants={imageReveal}
        initial='hidden'
        animate='show'
      >
        <img src={heroImg} alt='Hero' />
      </motion.div>
      <motion.div
        className='hero__content'
        variants={staggerContainer}
        initial='hidden'
        animate='show'
      >
        <motion.p className='hero__eyebrow' variants={fadeIn('up', 0.2)}>
          Get <span>Fit</span> with Alex
        </motion.p>
        <motion.h1 className='hero__title' variants={fadeIn('up', 0.35)}>
          Build <span>Strength</span>.<br />
          Lose{' '}
          <span>
            <br />
            Fat
          </span>
          .
          <br /> Train With <span>Purpose</span>.
        </motion.h1>
        <motion.p className='hero__text' variants={fadeIn('up', 0.5)}>
          Personal training for beginners and everyday people who want to feel
          stronger, move better, and build confidence in the gym.
        </motion.p>
        <motion.div className='hero__actions' variants={fadeIn('up', 0.65)}>
          <a href='#contact' className='hero__btn'>
            Book a Free Consultation
          </a>

          <a href='#services' className='hero__btn hero__btn--outline'>
            View Services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
