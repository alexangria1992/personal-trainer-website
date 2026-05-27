import React from 'react';
import rowImg from '../../images/testimonial-photo.png';
import './Testimonial.css';
const Testimonial = () => {
  return (
    <section className='testimonial' id='results'>
      <div className='testimonial__image'>
        <img src={rowImg} alt='Alex performing a barbell row' />
      </div>

      <div className='testimonial__content'>
        <p className='testimonial__eyebrow'>Client Testimonial</p>

        {/* <h2 className='testimonial__title'>Neille’s 6 Week Programme</h2> */}

        <div className='testimonial__quote-mark'>“</div>

        <blockquote className='testimonial__quote'>
          I signed up for Alex’s 6 week programme not really knowing what to
          expect. From day one, he made me feel comfortable in the gym and
          explained everything in a way that made sense. My strength has
          improved, I feel more confident using equipment on my own, and I
          actually look forward to training each week.
        </blockquote>

        <div className='testimonial__client'>
          <strong>— Neille</strong>
          <span>6 Week Programme</span>
        </div>

        <a href='#contact' className='testimonial__button'>
          Get Started <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default Testimonial;
