import React, { useEffect, useRef, useState } from 'react'
import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'

import Kartaskisenosti from '../../komponenty/kartaskisenosti/kartaskisenosti'

import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { div } from 'three/src/nodes/math/OperatorNode.js';

import Button from '../../komponenty/button/button'
import Tusucisla from '../../komponenty/tusucisla/tusucisla'


import { useInView } from "react-intersection-observer"


const Skusenostii = ({data32,texticeko,veta1,veta2,data,cislodoel,malecislo,fokta,onMouseEnter,onMouseLeave,podmienka,text}) => {

      const isMediumUp = useMediaQuery({ minWidth: 768 });

      const { ref, entry } = useInView({ threshold: [0, 0.6] })



      const kontorloa = useRef(false)



  return (
<>


{/* {isMediumUp &&

<div className='w-full h-[600px] lg:h-[700px] bg-red-600 grid grid-cols-[1fr_1fr]'>

  <div className='bg-green-300'></div>
  <div className='bg-green-500'></div>


</div>
} */}

<div className='flex flex-col gap-5'>

 <div className=' w-full h-fit flex flex-col gap-5 md:grid md:grid-cols-[1fr_1fr]'>
<div className='h-full w-full  flex justify-center items-start xl:items-start xl:justify-start'>


       <div className='w-full h-[100vw] bg-pink-200 rounded-velky overflow-hidden flex relative  md:h-[75vw] xl:w-[80%] xl:h-[50vw] '>
        <motion.img

         animate={  isMediumUp &&  podmienka ? { scale: 1.03 } : { scale: 1 }}
              transition={{ duration: 0.4 }}

         src={fokta} alt="" className="w-full h-full object-cover" />

        <motion.div 
            onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
   animate={{
    opacity:  podmienka ? 1 : 0,

  }}
              transition={{ duration: 0.4 }}
className="absolute w-full h-full bg-slate-50/5  inset-0 z-10 backdrop-blur-sm cursor-pointer p-4"
>


<div className='w-full h-full flex items-end justify-start'>

<div className='flex gap-2 flex-col '>
  <div className='text-whiteCustom'>
    {texticeko}
  </div>
  <Button
  onClick = {() => console.log("kko")}
  text = {text}
  ></Button>

</div>
</div>
</motion.div>
      </div>
</div>



      {!isMediumUp && <>
      <Tocenaveta
veta1={veta1}
veta2={veta2}

kokoko="text-blackCustom"

></Tocenaveta>
      
      </>}

<div className='w-full h-full flex gap-5 flex-col  xl:items-end  '>

  <div className='xl:pl-[30%]  flex flex-col gap-5'>
    {isMediumUp && <>
      <Tocenaveta
veta1={veta1}
veta2={veta2}
kokoko="text-blackCustom"
></Tocenaveta>
      
      </>}




  

{data.map((item,index) => {
  console.log(item)
return (

<Kartaskisenosti
cislodoel = {item.pocet}
malecislo = {item.poradie}
vrchnytext = {item.done}
spodnytext = {item.done1}
></Kartaskisenosti>
)
}



)}
  </div>
      
</div>






      
    </div>

<div 
ref = {ref}
className='
mt-9
w-full h-fit grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-5 md:grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-[1fr] md:h-fit'>

{data32.map((item,index) => 
{
 return(
 <div >
<Tusucisla
maxx = {item.cislo}

text = {item.text}
></Tusucisla>
</div>

  )
}

 
)}




</div>
    </div>

   
</>

  )

}

export default Skusenostii
