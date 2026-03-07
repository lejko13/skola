import React from 'react'

import { motion } from 'framer-motion'

import Buttonservis from '../buttonservis/buttonservis'
import Buttonservisplus from '../buttonservisplus/buttonservisplus'
const Serviskomponent2 = ({podmienka,textovacast1,spodnutext,data,fotak1,fotak2,fotak3}) => {
  // console.log(data);

  const prepocet = data.length - 5
  // console.log(prepocet);
  
  
  return (
    <>
    <div

   
    className='w-full ' 
    >
      <div
      className='relative w-full h-fit  gap-2 flex flex-col xl:flex-row xl:gap-7 '
      >
        <div className='w-full flex flex-col xl:flex-row gap-2'>

        <div className='w-full relative xl:w-[200px]'>
            <div className='w-14 h-14 bg-slate-500 rounded-xl border-2 border-gray-300 overflow-hidden' >
              <img src={fotak1} alt="" className="w-full h-full object-cover" />
              </div>  
            <div className='w-14 h-14 bg-slate-500 rounded-xl absolute top-0 left-8 border-2 border-gray-300 z-10 overflow-hidden'>
                         <img  src={fotak2} alt="" className="w-full h-full object-cover" />
              </div>  
            <div className='w-14 h-14 bg-slate-500 rounded-xl absolute top-0 border-2 border-gray-300 left-16 z-30 overflow-hidden'>
                         <img  src={fotak3} alt="" className="w-full h-full object-cover" />
              </div>  
        </div>

<div className='w-full flex flex-col gap-2'>
        <div className='text-[24px] text-whiteCustom leading-none bg-black xl:text-[28px]' >{textovacast1}</div>
        <div className='text-[13px]  text-sivaTmava leading-tight xl:text-[14px]'>{spodnutext}</div>
        </div>
        
</div>

<div className=' w-full flex flex-col gap-2'>


        <div className='text-[11px]  text-sivaTmava'>Categories</div>
<div className="w-full h-full grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] pb-8">
          {data.slice(0, 5).map((item) => (
  <Buttonservis
    key={item.id} // vždy dobré mať key
    text={item.nazov}
  />
))}

  <Buttonservisplus
  text={prepocet}
  ></Buttonservisplus>


        </div>
</div>

      </div>
    </div>
    {/* <div className='hidden  xl:flex w-full h-[90px] bg-red-400'></div> */}
    </>
    
  )
}

export default Serviskomponent2
