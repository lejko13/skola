import React from 'react'
import { motion } from 'framer-motion'
const Headerkomponent = ({podmienka,text,cislo,styldalsie}) => {
  return (
    <div className='shrink-0 hidden md:flex md:w-24 h-full md:items-center md:justify-center ' >

<div className='font-fontmedium text-base16 text-blackCustom relative cursor-pointer'> {text}

        <div
          style={styldalsie}
         className=" text-sivaTmava absolute -top-1 -right-2 text-malytext">({cislo})</div>

         {/* <motion.div 
          initial={{ width: 0 }}
          animate={{ width: podmienka ?  "100%" : "0px"}}
          transition={{ duration: 0.5 }}
          className='w-full h-[1.5px] bg-black absolute top-[20px] '></motion.div> */}
</div>
       
      
    </div>
  )
}

export default Headerkomponent
