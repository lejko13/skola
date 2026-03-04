import React, { useEffect, useRef, useState } from 'react'
import Tocenaveta from '../tocenaveta/tocenaveta'

import Kartaskisenosti from '../kartaskisenosti/kartaskisenosti'

import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { div } from 'three/src/nodes/math/OperatorNode.js';

import Button from '../button/button'
import Tusucisla from '../tusucisla/tusucisla'


import { useInView } from "react-intersection-observer"

import Formular from '../formular/formular'
import Clovekoo from '../../komponenty/clovekoo/clovekoo'
const Skusenosti2 = ({data32,texticeko,veta1,veta2,data,cislodoel,malecislo,fokta,onMouseEnter,onMouseLeave,podmienka,text}) => {

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

<div className='flex flex-col gap-5 bg-red-500 w-full'>

 <div className=' w-full h-fit  bg-green-600 flex flex-col gap-5 md:grid md:grid-cols-[1fr_1fr]'>
<div className='h-full w-full  flex justify-center items-start xl:items-start xl:justify-start'>


       <div className='w-full h-fit bg-white rounded-velky overflow-hidden flex relative  p-5 md:h-[75vw] xl:w-[80%] xl:h-[50vw] '>
<Clovekoo></Clovekoo>
      </div>
</div>






<div className='w-full h-full flex gap-5 flex-col  xl:items-end  '>

  <div className='xl:pl-[30%]  flex flex-col gap-5'>
   




     <Formular></Formular>

      {isMediumUp && <>
      <Tocenaveta
veta1={veta1}
veta2={veta2}
// kokoko="text-blackCustom"
></Tocenaveta>
      
      </>}

  </div>
      
</div>






      
    </div>


    </div>

   
</>

  )

}

export default Skusenosti2
