import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";

// Import štýlov
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import moduly (ak chceš navigáciu, pagináciu)
import { Navigation, Pagination } from "swiper/modules";


const Swipercast = ({textmaly,rok,rok2}) => {
  return (
    <div className='w-full h-full bg-pink-900 flex flex-col gap-5'>
      <div className='w-full  bg-gray-200  items-center
      grid
  

    xl:grid-cols-[25%_auto_20%] 
      '>

        <div className='flex gap-5 bg-black w-full xl:justify-between'>

  

        <div className=' flex gap-2 items-start  pb-2 w-fit bg-green-200 h-full'>

    <div className='w-[19px] h-[19px] bg-blackCustom rounded-full flex justify-center text-whiteCustom items-center text-[13px] xl:text-[16px] xl:w-[22px] 
    xl:h-[22px] ' 
    ><i class='bx bx-plus'></i></div>
            <span className='text-blackCustom text-[13px]  xl:text-[16px] '>{textmaly}</span>
        </div>

        <div className='bg-red-500 flex items-start h-full'>

            <span className='text-blackCustom text-[13px]  xl:text-[16px] '>({rok} {rok2})</span>
        </div>

      </div>

      </div>

      <div className='w-full h-[200px] bg-green-500 flex'>


 <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <div className="bg-blue-400 h-64 flex items-center justify-center text-white font-bold text-2xl">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-green-400 h-64 flex items-center justify-center text-white font-bold text-2xl">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-400 h-64 flex items-center justify-center text-white font-bold text-2xl">
          Slide 3
        </div>
      </SwiperSlide>
    </Swiper>



      </div>
         <div className='w-full h-fit bg-gray-700 flex'>
            <div className='w-full h-[200px] bg-black'>
                <div>
                    <div className='h-5 w-5 bg-green-400'></div>
                </div>

            </div>
         </div>
    </div>
  )
}

export default Swipercast
