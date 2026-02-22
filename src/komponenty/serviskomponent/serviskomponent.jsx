import React from 'react'

import { motion } from 'framer-motion'

import Buttonservis from '../../komponenty/buttonservis/buttonservis'
import Buttonservisplus from '../../komponenty/buttonservisplus/buttonservisplus'
const Serviskomponent = ({podmienka,textovacast1,spodnutext,data}) => {
  console.log(data);

  const prepocet = data.length - 5
  console.log(prepocet);
  
  
  return (
    <motion.div
    initial={{opacity:0}}
    animate = {{opacity:podmienka ? 1 : 0}}
    className='w-full ' 
    >
      <div
      className='relative w-full h-fit  gap-2 flex flex-col xl:flex-row xl:gap-7 '
      >
        <div className='w-full flex flex-col xl:flex-row gap-2'>

        <div className='w-full relative xl:w-[200px]'>
            <div className='w-14 h-14 bg-slate-500 rounded-xl border border-black'></div>  
            <div className='w-14 h-14 bg-slate-500 rounded-xl absolute top-0 left-8 border border-black z-10'></div>  
            <div className='w-14 h-14 bg-slate-500 rounded-xl absolute top-0 border left-16 border-black z-30'></div>  
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
    </motion.div>
  )
}

export default Serviskomponent
