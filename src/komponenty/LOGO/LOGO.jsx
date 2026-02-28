import React from 'react'


import { motion } from 'framer-motion'

const Logo = ({text,cislo,styldalsie,hodnota,onMouseEnter,onMouseLeave}) => {
  return (
    <div className='flex w-fit  h-full items-center justify-center   z-40' >

<div 
onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}
className='text-base16  font-fontmedium text-blackCustom relative cursor-pointer'> {text}


        <motion.div
           initial={{ width: "0%" }}
            animate = {{width:hodnota? "100%" : "0%"}}
            className='bg-blackCustom h-[1.5px]'
            ></motion.div>

        <div
          style={styldalsie}
         className=" text-blackCustom absolute -top-0 -right-3 text-xs"><i class='bx bx-registered' ></i></div>
</div>
       
      
    </div>
  )
}

export default Logo
