import React from 'react'

import { motion } from 'framer-motion'


import { useMediaQuery } from 'react-responsive';


const Hoverrik = ( {onClick,textvoacas,podmienka,onMouseEnter,onMouseLeave,prisposobujem,prisposobujem2}) => {

  const isMediumUp = useMediaQuery({ minWidth: 768 });

  
  return (
    <div 
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`  font-[500] cursor-pointer  ${prisposobujem}  `}>

        {textvoacas}

        <motion.div

 initial={{ width: "0%" }}
        animate = {{
         
            width:isMediumUp ? (podmienka ? "100%" : "0%") : "0%"}}
        className={` h-[1px]   ${prisposobujem2}  `}
        ></motion.div>
      
    </div>
  )
}

export default Hoverrik
