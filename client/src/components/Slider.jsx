import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

function Slider() {
  return (
    <>
     <Swiper
        spaceBetween={180}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper w-[100%] h-[100%] p-28 "
      >
        <SwiperSlide className=' bg-black z-0'>Slide 1</SwiperSlide>
        <SwiperSlide className=' bg-black z-0'>Slide 2</SwiperSlide>
        <SwiperSlide className=' bg-black z-0'>Slide 3</SwiperSlide>
        <SwiperSlide className=' bg-black z-0'>Slide 4</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider