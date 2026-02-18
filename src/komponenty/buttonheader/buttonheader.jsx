import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Buttonheader = ({onClick,pohyb}) => {
  return (
    <div onClick={onClick} className='w-[65px] h-full relative cursor-pointer  pl-3 pr-3'>

       <motion.div 
  initial={{ rotate: 0, }}        // počiatočný uhol a x
  animate={{ rotate:pohyb ?  14 :  0 , }}      // cieľový uhol a posun doprava
  transition={{ duration: 0.4 }}
  style={{ transformOrigin: "left center" }}
  className='w-10 h-[1.7px] bg-black absolute top-[18px] '
></motion.div>

<motion.div 
  initial={{ rotate: 0, }}
  animate={{ rotate:pohyb ?   -14 : 0 , }}     // opačný uhol a rovnaký posun
  transition={{ duration: 0.4 }}
  style={{ transformOrigin: "left center" }}
  className='w-10 h-[1.7px] bg-black absolute bottom-[18px]'
></motion.div>
      
    </div>
  )
}

export default Buttonheader
