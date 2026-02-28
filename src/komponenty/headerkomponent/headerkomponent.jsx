import React from 'react'
import { motion } from 'framer-motion'
const Headerkomponent = ({podmienka,text,cislo,styldalsie,onMouseLeave,onMouseEnter,hodnota}) => {
  return (
    <motion.div
    initial = {{opacity:1}}
    animate = {{opacity: podmienka ? 0 : 1,
        pointerEvents: podmienka ? "none" : "auto"
    }}
     className='shrink-0 hidden md:flex md:w-24 h-full md:items-center md:justify-center  ' >

<div
onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}

className='font-fontmedium text-base16 text-blackCustom relative cursor-pointer leading-tight'> {text}


          <motion.div
    initial={{ width: "0%" }}
          animate = {{width:hodnota? "100%" : "0%"}}
          className='bg-blackCustom h-[1.5px]'
          ></motion.div>
        

        <div
          style={styldalsie}
         className=" text-sivaTmava absolute -top-1 -right-2 text-malytext">({cislo})</div>



  
</div>
       
      
    </motion.div>
  )
}

export default Headerkomponent
