import React from 'react'
import { GradFlow } from "gradflow";

import  AnimatedBackground from '../../internet/internet'
const Uvod = () => {
  return (
    <div className='h-[700px] w-full bg-white flex p-2 md:h-[100vh] pt-16'>
      <div className='w-full h-full bg-slate-50 rounded-2xl  overflow-hidden '>
         <GradFlow 
         config={{
        color1: { r: 0, g: 0, b: 0 },
        color2: { r: 0, g: 0, b: 0 },
        color3: { r: 36, g: 36, b: 36 },
        speed: 0.9,
        scale: 2,
        type: 'smoke',
        noise: 0.18
      }}
         />
      </div>
      
    </div>
  )
}

export default Uvod
