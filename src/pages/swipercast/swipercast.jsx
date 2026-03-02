

import React, { use, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination,Mousewheel } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/mousewheel"

import {NASTAVENIEWEBU} from '../../zonznami/main'
import Sipwerkomponent from '../../komponenty/sipwerkomponent/sipwerkomponent'
import { useState } from "react"


const Swipercast = ({textmaly,rok,rok2}) => {

    const web = NASTAVENIEWEBU[4]
      const swiperRef = useRef(null)
    
      const[hover,setHover] = useState(null)
  

  return (
    <div className='w-full h-full bg-pozadei flex flex-col gap-5'>
      <div className='w-full  bg-pozadei  items-center
      grid
  

    xl:grid-cols-[25%_auto_20%] 
      '>

        <div className='flex gap-5 w-full xl:justify-between'>

  

        <div className=' flex gap-2 items-start  pb-2 w-fit bg-pozadei h-full'>

    <div className='w-[19px] h-[19px] bg-blackCustom rounded-full flex justify-center text-whiteCustom items-center text-[13px] xl:text-[16px] xl:w-[22px] 
    xl:h-[22px] ' 
    ><i class='bx bx-plus'></i></div>
            <span className='text-blackCustom text-[13px]  xl:text-[16px] '>{textmaly}</span>
        </div>

        <div className=' flex items-start h-full'>

            <span className='text-sivaTmava text-[13px]  xl:text-[16px] '>({rok} {rok2})</span>
        </div>

      </div>

      </div>

      <div className='w-full h-fit flex flex-col'>


 <Swiper
   className="w-full bg-pozadei h-full  rounded-velky"
  modules={[Navigation, Pagination, Mousewheel]}
  spaceBetween={10}
  slidesPerView={5}
  grabCursor
  simulateTouch
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  mousewheel={{
    forceToAxis: true, // horizontálny swipe
    releaseOnEdges: true, // prepúšťa scroll stránky
    invert: false,
    sensitivity: 1,
  }}
  touchStartPreventDefault={false} 

  breakpoints={{
          300: { slidesPerView: 1 },  


  520: { slidesPerView: 2 },   
  740: { slidesPerView: 3 },  
  1024: { slidesPerView: 4 },  
  1280: { slidesPerView: 5 }, 
}}
    >
    {web.firmy.map((item, index) => {

        console.log(item);
        
  return (
    <SwiperSlide key={index}>
      <Sipwerkomponent 
        nazov={item.nazov}
        data={item.praca} 
        fotka = {item.fotka}
        onMouseEnter = {() => setHover(item.nazov)}
        onMouseLeave = {() => setHover(null)}
        podmienka = {hover === item.nazov}
      />
    </SwiperSlide>
  );
})}
    </Swiper>



      </div>
         <div className='w-full h-fit bg-pozadei flex'>
            <div className='w-full h-fit  justify-end flex'>
                <div className='flex gap-2'>
                    <div 
                      onClick={() => swiperRef.current?.slidePrev()}
                    className='
                    cursor-pointer
                    w-[19px] h-[19px]  xl:w-[22px] xl:h-[22px] bg-blackCustom text-whiteCustom rounded-full flex items-center justify-center text-[13px] xl:text-[16px]'>
                      <i class='bx bx-chevron-left' ></i>
                    </div>
                    <div 
                     onClick={() => swiperRef.current?.slideNext()}
                    className='
                    cursor-pointer
                    w-[19px] h-[19px]  xl:w-[22px] xl:h-[22px] bg-blackCustom  text-whiteCustom rounded-full flex items-center justify-center text-[13px] xl:text-[16px]'>
                        <i class='bx bx-chevron-right'></i>
                    </div>
                </div>

            </div>
         </div>
    </div>
  )
}

export default Swipercast
