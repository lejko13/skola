import React from 'react'
import { motion } from 'framer-motion'

import { useMediaQuery } from "react-responsive";
const Nahlad = ( {nazov,rok,fotka,onClick,onMouseEnter,onMouseLeave,podmienka}) => {

  const pozadei = "#F0F0F0"
 
    // md breakpoint = 768px
  const isMdUp = useMediaQuery({ minWidth: 768 });

  return (
    <div className='w-full h-fit bg-pozadei aspect-[14/9] flex flex-col gap-1' >
        <div 
         onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
        className='w-full h-14 bg-whiteCustom rounded-velky flex items-center justify-between p-4 cursor-pointer'>
          <div className='flex gap-3 items-center'>
              <span className='text-[15px] font-[500] text-blackCustom'>  {nazov}.</span>
              <span className='text-[11px] font-[500] text-sivaTmava'>/{rok}</span>
          </div>
          <div className='w-fit h-fit flex gap-1'>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 ${
               isMdUp && 
              podmienka ? 'bg-red-500' : 'bg-pozadei'
            }`}
            ></div>

            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 ${
               isMdUp && 
              podmienka ? 'bg-orange-500' : 'bg-pozadei'
            }`}
            ></div>
            
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 ${
              isMdUp && 
              podmienka ? 'bg-green-500' : 'bg-pozadei'
            }`}
            ></div>

          </div>
        
            
        </div>
<div className="w-full h-full bg-whiteCustom rounded-velky p-1 overflow-hidden relative">

<motion.div
 onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
   animate={{
    
    scale:  isMdUp &&  podmienka ? 1.2 : 1.5
  }}
  transition={{ duration: 0.4 }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer">

  <span className='text-15px font-[500] text-whiteCustom cursor-pointer text-[16px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{nazov}</span>


</motion.div>
  {/* HOVER */}
  <motion.div 
   onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
   animate={{
    opacity:   isMdUp &&  podmienka ? 1 : 0,
    scale:   isMdUp &&  podmienka ? 1.02 : 1
  }}
              transition={{ duration: 0.4 }}
className="absolute w-full h-full bg-slate-50/5 z-10 backdrop-blur-sm cursor-pointer"
  >


  </motion.div>
  {/* HOVER */}
  <motion.div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
        animate={  isMdUp &&  podmienka ? { scale: 1.02 } : { scale: 1 }}
              transition={{ duration: 0.4 }}
    className="w-full h-full bg-zinc-950 rounded-velky flex items-center justify-center overflow-hidden"
  >
    <motion.img
      src={fotka}
      alt=""
      className="w-full h-full object-cover"
      animate={  isMdUp &&  podmienka ? { scale: 1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
    />
  </motion.div>
</div>
    

    </div>
  )  
}

export default Nahlad
