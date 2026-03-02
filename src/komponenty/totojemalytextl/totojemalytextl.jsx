import React from 'react'
import Button from '../../komponenty/button/button'

import {NASTAVENIEWEBU} from '../../zonznami/main'
import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'
const Totojemalytextl = () => {

    const web = NASTAVENIEWEBU[3]
    console.log(web);
    
  return (
    <div className='w-full h-full flex flex-col gap-4'>
     {/* <Tocenaveta
     veta1={web.veta}
     veta2={web.veta1}
     tuu = "bg-pink-500 w-full h-fit w-full"
     ></Tocenaveta> */}

      <div>
        <span className='text-[13px] text-sivaTmava md:text-[16px]'>{web.nicvi}</span>
     
      </div>
      <Button
      text = {web.btnklik}
      ></Button>
    </div>
  )
}

export default Totojemalytextl
