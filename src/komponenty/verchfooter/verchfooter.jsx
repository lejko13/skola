import React from 'react'

import {NASTAVENIEWEBU} from '../../zonznami/main'
const Verchfooter = () => {
    const web = NASTAVENIEWEBU[0]
  
    console.log(web);
    
  return (
    <div className={`w-full h-fit  bg-pink-500 pt-40 pb-32 flex flex-col items-center justify-center `}>

      <span className='text-[32px] font-[550] text-blackCustom'>{web.header1}</span>
      <span className='text-[32px] font-[550] text-blackCustom'>{web.header2}</span>
      <span className='text-[32px] font-[550] text-blackCustom'>{web.header3}</span>
      <span className='text-[32px] font-[550] text-blackCustom'>{web.header4}</span>
      
      
    </div>
  )
}

export default Verchfooter
