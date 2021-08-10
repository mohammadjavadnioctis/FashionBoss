import React from 'react'

import { withRouter } from 'react-router-dom';

import './banner.style.scss'
const Banner = ({imgSrc, height, history, match})=>(
    <div className={`banner ${height ? 'tall' : ''}`}
         style={{
            
            // height: `${height}`
    }}
    onClick={() => history.push(`${match.url}shop`)}
    
    >
        <div className="banner-image"
        style={{
            backgroundImage: `url(${imgSrc})`,
            
          }}>
            {/* <img src={imgSrc} alt="" /> */}
        </div>
        <div className="banner-definition">
            <h3>{`FASHIONBOSSMEN & FASHIONbOSSWOMEN`}</h3>
            <a>{`START SHOPPING >`}</a>
        </div>
    </div>
)

export default withRouter(Banner);