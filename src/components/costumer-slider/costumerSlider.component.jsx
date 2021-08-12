import React from 'react';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import './costumerSlider.style.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);








const swiperMContainer = ()=>(
    <div className="swiperMContainer">

    <Swiper
     spaceBetween={30}
     slidesPerView={8}
     loop={true}
    //  centeredSlides={true}
     autoplay={{
    "delay": 2500,
    "disableOnInteraction": false
    }}
    //  pagination={{
    // "clickable": true
    // }} 
    navigation={true}
     className="mySwiper">
    <SwiperSlide>
        <img src='./images/logos/lcw-logo.png' alt="LCW" />
        <span>LCW</span>
        </SwiperSlide>
    <SwiperSlide><img src="./images/logos/20210425_15471619354822_AltinyildizClassics.jfif" alt="" /><span>ALTIN YILDIZ</span></SwiperSlide>
    <SwiperSlide><img src="./images/logos/20210425_15471619354848_Avva.jfif" alt="" /><span>LCW</span></SwiperSlide>
    <SwiperSlide><img src="./images/logos/addiddas-logo.jfif" alt="" /><span>ADDİDAS</span></SwiperSlide>
    <SwiperSlide><img src="./images/logos/Mavi.jfif" alt="" /><span>MAVI</span></SwiperSlide>
    <SwiperSlide><img src="./images/logos/USPoloAssn.jfif" alt="" /><span>US.POLO</span></SwiperSlide>
    <SwiperSlide><img src="./images/logos/Stradivarius.jfif" alt="" /><span>STRADI</span></SwiperSlide>
    <SwiperSlide><img src="./images/logos/nike-logo.jfif" alt="" /><span>NIKE</span></SwiperSlide>
    <SwiperSlide><img src="./images/logos/20210425_15471619354848_Avva.jfif" alt="" /><span>AVVA</span></SwiperSlide>
    {/* <SwiperSlide><img src="./logos/puma-logo.jfif" alt="" /><span>LCW</span></SwiperSlide> */}
    
    </Swiper>



    </div>
)


export default swiperMContainer;
