import React from 'react';
import { Dumbbell, Monitor, Package } from 'lucide-react';
import './Services.css';
import servicesImg from '../../images/services-photo-2.png';

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
    <section className='services' id='services'>
      <div className='services__image'>
        <img src={servicesImg} alt='Alex training with dumbbells' />
      </div>
      <div className='services__content'>
        <p className='services__eyebrow'>What I Offer</p>

        <h2 className='services__title'>Training Built Around Your Goal.</h2>

        <p className='services__intro'>
          Whether you want to build strength, lose fat, or feel more confident
          in the gym, I offer clear coaching options to help you train with
          purpose.
        </p>

        <div className='services__list'>
          {services.map((service) => (
            <article className='service-card' key={service.title}>
              <div className='service-card__icon'>{service.icon}</div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
