import React, { useContext,useEffect } from "react";

import { motion } from 'framer-motion'
import Malytext from '../malytext/malytext'
import { MyContext, MyProvider } from "../../provider/provider1";

import Hoverrik from '../../komponenty/hoverrik/hoverrik'

import {NASTAVENIEWEBU} from '../../zonznami/main'
import { useState } from "react";

const SpodokFoortaj = () => {

  const web = NASTAVENIEWEBU[0]

  // console.log(web);

   const openEmail = () => {
    window.location.href = "mailto:leo.fudalyz@gamil.com";
    }



     const { value, setValue } = useContext(MyContext);
   const [hover, setHover] = useState(0);

  return (
    <motion.div
    initial = {{ opacity:value ?  1 : 1, 
      }}
     className='w-full h-fit flex-shrink-0
 gap-7 flex items-center justify-center flex-col pb-7
      md:grid
      md:grid-cols-[1fr_auto_1fr] 
      md:pt-7

      '>


      <div className="w-full h-fit  flex gap-1 flex-col items-center justify-center  md:h-full md:items-start md:pl-9 md:leading-tight">

        <Hoverrik

        onMouseEnter={() => setHover(web.tel)}
          onMouseLeave={() => setHover(null)}

          podmienka = {hover === web.tel}
      textvoacas = {web.tel}
      prisposobujem2 = 'bg-blackCustom h-[2px]'
      prisposobujem = "text-[14px] md:text-[18px] xl:text-[21px] text-blackCustom"
      onClick={() => openEmail()}


      ></Hoverrik>

      

          <span 
          onClick={() => openEmail()}
            onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(null)}
          
          className={`text-[23px] 
         cursor-pointer
        font-[550] underline 
        underline-offset-4
        transition-all duration-300
        ${hover === 3 ? 'text-sivaTmava' : 'text-blackCustom'}
          
            md:text-[25px] 
            xl:text-[30px] 
          md:underline-offset-[7px]`}>{web.email}</span>
      </div>

      <div className="w-full h-fit flex gap-1 flex-col items-center justify-center md:h-full md:justify-end ">
        <span 

        onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}

        className={`text-[13px] transition-all duration-300 ${hover === 1 ? 'text-sivaTmava' : 'text-blackCustom'} md:text-[15px] cursor-pointer `}>{web.footer1}</span>
        
        <span 

        onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(null)}

         className={`text-[13px] transition-all duration-300 ${hover === 2 ? 'text-sivaTmava' : 'text-blackCustom'} md:text-[15px] cursor-pointer `}>{web.footer2}</span>
      </div>

        <Malytext
                rok = {web.rok}
                nazov = {web.nazov}
                studio =     {web.studio}
                color = "md:flex md:justify-end md:pr-9  md:h-full md:items-end "
                ></Malytext>

      
    </motion.div>
  )
}

export default  SpodokFoortaj
