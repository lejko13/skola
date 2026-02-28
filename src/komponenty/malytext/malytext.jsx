import React, { useState } from 'react';
import { motion } from 'framer-motion'

import { useMediaQuery } from 'react-responsive';


const Malytext = ({rok,nazov,studio,color}) => {


    const isMediumUp = useMediaQuery({ minWidth: 768 });

    const openEmail = () => {
    window.location.href = "mailto:leo.fudaly@gmail.com";
    }

    const[hover,setHover] = useState(null)

  return (
    <div 
   


    className={`text-[12px] flex gap-[3px] items-center justify-end ${color} text-sivaTmava cursor-pointer `}>

      <div 
       onClick={() => openEmail()}
    onMouseEnter={() => setHover(1)}
    onMouseLeave={() => setHover(null)}
      className='relative w-fit whitespace-nowrap flex gap-[3px]'
      >
      <span>   <i class='bx bx-copyright'></i></span>
   
       {rok}
       <span className='relative w-[45px] h-fit inline-block '>    
          <span> {nazov}  </span>
          <span className=' absolute text-1 top-0'>  <i class='bx bx-registered ' ></i></span>
         

          </span>
   
        {studio}

        <motion.div
        initial={{ width: "0%" }}
  animate={{ width:isMediumUp ? (hover ? "100%" : "0%") : "0%"}}
  className="bg-sivaTmava h-[1.5px] absolute -bottom-[0.8px] left-0"

                    ></motion.div>
      </div>
    </div>
  )
}

export default Malytext
