import React from 'react';
import { Route } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import Banners from '../../components/banners/banners.component'
import SwiperMContainer from '../../components/costumer-slider/costumerSlider.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import './homepage.styles.scss';

const HomePage = ({match}) => (
  <div className='homepage'>
    <SwiperMContainer />
    <Directory />
    <Banners/>
    <h1 style={{margin:'5rem'}}>Featured Products</h1>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <h1 style={{margin:'5rem'}}>Explore</h1>
    <Directory />
  </div>
);

export default HomePage;
