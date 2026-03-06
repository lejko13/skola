import React, { useEffect, useRef, useState } from 'react'
import Tocenaveta from '../tocenaveta/tocenaveta'

import Kartaskisenosti from '../kartaskisenosti/kartaskisenosti'

import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { div } from 'three/src/nodes/math/OperatorNode.js';
import './skusenoti.css'
import Button from '../button/button'
import Tusucisla from '../tusucisla/tusucisla'
import { NASTAVENIEWEBU } from '../../zonznami/main';

import { useInView } from "react-intersection-observer"

import Ludiahodnotenie from '../../komponenty/ludiahodnotenie/ludiahodnotenie'
import Formular from '../formular/formular'
import Clovekoo from '../../komponenty/clovekoo/clovekoo'
const Skusenosti2 = ({data32,texticeko,veta1,veta2,data,cislodoel,malecislo,fokta,onMouseEnter,onMouseLeave,podmienka,text}) => {

      const isMediumUp = useMediaQuery({ minWidth: 768 });

      const { ref, entry } = useInView({ threshold: [0, 0.6] })



      const kontorloa = useRef(false)



      const lentak = NASTAVENIEWEBU[8]
  return (
<>




<div className='flex flex-col gap-5 w-full'>

 <div className=' w-full h-fit   flex flex-col gap-5 md:grid md:grid-cols-[1fr_1fr]'>
<div className='h-full w-full    flex justify-start items-start   gap-5 flex-col  xl:items-start xl:justify-start'>


       <div className='w-full h-fit bg-white rounded-velky overflow-hidden flex relative  p-5 md:h-fit xl:w-[80%] xl:h-fit '>
<Clovekoo></Clovekoo>

      </div>


      <div className='hidden md:flex h-[400px] w-[100%] xl:w-[80%]  bg-white rounded-velky p-5'>

        <div className='lescroll'>

          {lentak.ludia.map((item,index) => 
   <Ludiahodnotenie
   pica = {`${index % 2 === 0 ? "bg-gray-200" : "bg-white"}`}
   fotka = {item.fotka}
   meno = {item.meno}
   eamli = {item.email}
   lenno = {item.hodnotenie}
   ></Ludiahodnotenie> 
          )}
        </div>
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
