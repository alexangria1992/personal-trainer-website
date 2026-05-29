import React from 'react';
import aboutImg from '../../images/about-me.png';
import './About.css';
const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about__image'>
        <img src={aboutImg} alt='Alex personal trainer' />
      </div>

      <div className='about__content'>
        <p className='about__eyebrow'>About Me</p>

        <h2 className='about__title'>Coaching That Builds Confidence.</h2>

        <p className='about__text'>
          I know what it feels like to walk into a gym and not know where to
          start.
        </p>

        <p className='about__text'>
          Like many people, I struggled with building healthy habits
          consistently and found myself not liking the way I looked or felt.
          Through trial and error, learning and focusing on becoming a better,
          stronger and more confident person, I realized the importance of
          training and how it can change the way you look, feel and move.
        </p>

        <p className='about__text'>
          Whether you’re new to training or getting back into fitness, I’ll help
          you understand what to do, how to do it safely, and how to keep making
          progress.
        </p>

        <div className='about__highlights'>
          <span>Beginner Friendly</span>
          <span>Strength Training</span>
          <span>Fat Loss Support</span>
        </div>
      </div>
    </section>
  );
};

export default About;
