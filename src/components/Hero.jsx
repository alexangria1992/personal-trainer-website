import React from 'react';
import './Hero.css';
import heroImg from '../../images/dumbbell-squat-2.png';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__image'>
        <img src={heroImg} alt='Hero' />
      </div>
      <div className='hero__content'>
        <p className='hero__eyebrow'>
          Get <span>Fit</span> with Alex
        </p>
        <h1 className='hero__title'>
          Build <span>Strength</span>.<br />
          Lose{' '}
          <span>
            <br />
            Fat
          </span>
          .
          <br /> Train With <span>Purpose</span>.
        </h1>
        <p className='hero__text'>
          Personal training for beginners and everyday people who want to feel
          stronger, move better, and build confidence in the gym.
        </p>
        <div className='hero__actions'>
          <a href='#contact' className='hero__btn'>
            Book a Free Consultation
          </a>

          <a href='#services' className='hero__btn hero__btn--outline'>
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
