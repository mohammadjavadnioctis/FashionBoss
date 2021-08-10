import React from 'react';

import Directory from '../../components/directory/directory.component';
import Banners from '../../components/banners/banners.component'
import SwiperMContainer from '../../components/costumer-slider/costumerSlider.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <SwiperMContainer />
    <Directory />
    <Banners/>
    <Directory />
  </div>
);

export default HomePage;
