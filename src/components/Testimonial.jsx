import React from 'react';
import { motion } from 'framer-motion';
import rowImg from '../../images/testimonial-photo.png';
import './Testimonial.css';
import { fadeIn, imageReveal, staggerContainer } from '../lib/animations';

const Testimonial = () => {
  const enquiryFormLink = 'https://forms.gle/DnjrkBdjY9Gg9VV86';

  return (
    <motion.section
      className='testimonial'
      id='testimonial'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className='testimonial__image' variants={imageReveal}>
        <img src={rowImg} alt='Alex performing a barbell row' />
      </motion.div>

      <motion.div className='testimonial__content' variants={staggerContainer}>
        <motion.p className='testimonial__eyebrow' variants={fadeIn('up', 0.1)}>
          Client Testimonial
        </motion.p>

        {/* <h2 className='testimonial__title'>Neille’s 6 Week Programme</h2> */}

        <motion.div
          className='testimonial__quote-mark'
          variants={fadeIn('up', 0.2)}
        >
          “
        </motion.div>

        <motion.blockquote
          className='testimonial__quote'
          variants={fadeIn('up', 0.35)}
        >
          I signed up for Alex’s 6 week programme not really knowing what to
          expect. From day one, he made me feel comfortable in the gym and
          explained everything in a way that made sense. My strength has
          improved, I feel more confident using equipment on my own, and I
          actually look forward to training each week.
        </motion.blockquote>

        <motion.div
          className='testimonial__client'
          variants={fadeIn('up', 0.5)}
        >
          <strong>— Neille</strong>
          <span>6 Week Programme</span>
        </motion.div>

        <motion.a
          href={enquiryFormLink}
          target='_blank'
          rel='noreferrer'
          className='testimonial__button'
          variants={fadeIn('up', 0.65)}
        >
          Get Started <span>→</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Testimonial;
