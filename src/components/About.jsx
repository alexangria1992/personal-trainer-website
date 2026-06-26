import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../images/about-me.png';
import './About.css';
import { fadeIn, imageReveal, staggerContainer } from '../lib/animations';
const About = () => {
  return (
    <motion.section
      className='about'
      id='about'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className='about__image' variants={imageReveal}>
        <img src={aboutImg} alt='Alex personal trainer' />
      </motion.div>

      <motion.div className='about__content' variants={staggerContainer}>
        <motion.p className='about__eyebrow' variants={fadeIn('up', 0.1)}>
          About Me
        </motion.p>

        <motion.h2 className='about__title' variants={fadeIn('up', 0.2)}>
          Coaching That Builds Confidence.
        </motion.h2>

        <motion.p className='about__text' variants={fadeIn('up', 0.35)}>
          I know what it feels like to walk into a gym and not know where to
          start.
        </motion.p>

        <motion.p className='about__text' variants={fadeIn('up', 0.5)}>
          Like many people, I struggled with building healthy habits
          consistently and found myself not liking the way I looked or felt.
          Through trial and error, learning and focusing on becoming a better,
          stronger and more confident person, I realized the importance of
          training and how it can change the way you look, feel and move.
        </motion.p>

        <motion.p className='about__text' variants={fadeIn('up', 0.65)}>
          Whether you’re new to training or getting back into fitness, I’ll help
          you understand what to do, how to do it safely, and how to keep making
          progress.
        </motion.p>

        <motion.div className='about__highlights' variants={staggerContainer}>
          {['Beginner Friendly', 'Strength Training', 'Fat Loss Support'].map(
            (item, index) => (
              <motion.span
                key={item}
                variants={fadeIn('up', 0.8 + index * 0.12)}
              >
                {item}
              </motion.span>
            ),
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
