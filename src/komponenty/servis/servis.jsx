import React from 'react'

import Kruzok from '../kruzok/kruzok'
import { motion } from 'framer-motion'
const Servis = ({textovacastz,pocet,onClick,podmienka}) => {
  return (
    <motion.div
    animate={{ height: "fit-content"}}
  className='h-fit w-full grid grid-cols-[50px_1fr_40px] gap-3 bg-red-500 border border-black border-soli' onClick={onClick}>
      <div className='bg-slate-100 h-full flex justify-center items-center' >
        ({pocet})

      </div>

      <motion.div  
        initial={{ height: 1 }}
      animate={{ height: podmienka ?  "100px" : "50px"}}
            transition={{ duration: 0.4 }}

      className='bg-slate-100 h-full flex justify-start items-start'>
        <span>{textovacastz}</span>

      </motion.div >
      <div className='bg-slate-100  h-full flex justify-center items-start'>
        <Kruzok
        podmienka = {podmienka}
        ></Kruzok>

      </div>
     
      
    </motion.div>
  )
}

export default Servis
