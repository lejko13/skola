import React, { useContext,useEffect } from "react";

import { motion } from 'framer-motion'
import Malytext from '../malytext/malytext'
import { MyContext, MyProvider } from "../../provider/provider1";

import {NASTAVENIEWEBU} from '../../zonznami/main'

const SpodokFoortaj = () => {

  const web = NASTAVENIEWEBU[0]

  // console.log(web);
  



     const { value, setValue } = useContext(MyContext);
  return (
    <motion.div
    initial = {{ opacity:value ?  1 : 1, 
      }}
     className='w-full bg-red-500 h-fit flex-shrink-0  gap-4 flex items-center justify-center flex-col pb-4  pt-4'>

      <div className="w-full h-fit  flex gap-1 flex-col items-center justify-center">
          <span className="text-[14px]   text-whiteCustom">{web.tel}</span>
          <span className="text-[23px] font-[550] underline underline-offset-4  text-whiteCustom" >{web.tel}</span>
      </div>

      <div className="w-full h-fit flex gap-1 flex-col items-center justify-center">
        <span className="text-[13px] text-whiteCustom">{web.footer1}</span>
        <span  className="text-[13px]  text-whiteCustom">{web.footer2}</span>
      </div>

        <Malytext
                rok = {web.rok}
                nazov = {web.nazov}
                studio =     {web.studio}
                ></Malytext>

      
    </motion.div>
  )
}

export default  SpodokFoortaj
