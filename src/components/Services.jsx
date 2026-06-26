import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Monitor, Package } from 'lucide-react';
import './Services.css';
import servicesImg from '../../images/services-photo-2.png';
import { fadeIn, imageReveal, staggerContainer } from '../lib/animations';
const services = [
  {
    icon: <Dumbbell size={22} />,
    title: '1-1 Training',
    text: 'In-person coaching focused on technique, strength, fat loss, and confidence in the gym.',
  },
  {
    icon: <Monitor size={22} />,
    title: 'Online Training',
    text: 'Structured programming and support for clients who want guidance outside the gym.',
  },
  {
    icon: <Package size={22} />,
    title: 'Session Packs',
    text: 'Flexible training packs for people who want consistency, accountability, and better value.',
  },
];
const Services = () => {
  return (
    <motion.section
      className='services'
      id='services'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className='services__image' variants={imageReveal}>
        <img src={servicesImg} alt='Alex training with dumbbells' />
      </motion.div>
      <motion.div className='services__content' variants={staggerContainer}>
        <motion.p className='services__eyebrow' variants={fadeIn('up', 0.1)}>
          What I Offer
        </motion.p>

        <motion.h2 className='services__title' variants={fadeIn('up', 0.2)}>
          Training Built Around Your Goal.
        </motion.h2>

        <motion.p className='services__intro' variants={fadeIn('up', 0.35)}>
          Whether you want to build strength, lose fat, or feel more confident
          in the gym, I offer clear coaching options to help you train with
          purpose.
        </motion.p>

        <motion.div className='services__list' variants={staggerContainer}>
          {services.map((service, index) => (
            <motion.article
              className='service-card'
              key={service.title}
              variants={fadeIn('up', 0.45 + index * 0.15)}
            >
              <div className='service-card__icon'>{service.icon}</div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
