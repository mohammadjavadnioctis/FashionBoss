import React from 'react';

import Directory from '../../components/directory/directory.component';
import Banners from '../../components/banners/banners.component'

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
    <Banners/>
    <Directory />
  </div>
);

export default HomePage;
