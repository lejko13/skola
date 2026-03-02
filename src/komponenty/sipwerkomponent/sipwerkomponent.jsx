import React from 'react'
import { useMediaQuery } from "react-responsive";

import { motion } from 'framer-motion'
const Sipwerkomponent = (  {fotka,data,nazov,podmienka,rok,cotoje,onMouseEnter,onMouseLeave}) => {

      const isMdUp = useMediaQuery({ minWidth: 768 });
  return (
    <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className='w-full rounded-velky flex flex-col aspect-[16/13] bg-pozadei  overflow-hidden cursor-pointer'>



      <div className='w-full h-fit bg-whiteCustom  flex items-center justify-between pt-4  pl-4 pr-4 cursor-pointer'>
          <div className='flex gap-3 items-center'>
              <span className='text-[15px] font-[500] text-blackCustom relative'>  {nazov}


                    <motion.div
              initial={{ width: "0%" }}
                    animate = {{width:   isMdUp &&  podmienka? "100%" : "0%"}}
                    className='bg-blackCustom h-[1.5px] absolute '
                    ></motion.div>
              </span>
          
             
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

       <div className="flex-1 bg-whiteCustom flex items-center justify-center">
  <div className=" w-[80%] h-[90%] flex items-center justify-center rounded-lg">
    <img 
      src={fotka} 
      alt="" 
      className="w-[50%] h-[50%] object-contain"
    />
  </div>
</div>

         <div className='w-full h-fit bg-whiteCustom   flex items-center justify-between pb-4  pl-4 pr-4 cursor-pointer'>
          <div className='flex gap-3 items-center'>
              <span className=' font-[500] text-sivaTmava text-[12px]'> 
              {data.map((item, index) => (
  <span key={index}>
    {item}{index < data.length - 1 ? " - " : ""}
  </span>
))}

              </span>
             
          </div>
         
        
            
        </div>
    </div>
  )
}

export default Sipwerkomponent
