import React from 'react';
import { Dumbbell, Monitor, Package } from 'lucide-react';
import './Services.css';
import servicesImg from '../../images/services-photo.png';

const Services = () => {
  return (
    <section className='services' id='services'>
      <div className='services__image'>
        <img src={servicesImg} alt='Alex training with dumbbells' />
      </div>
    </section>
  );
};

export default Services;
