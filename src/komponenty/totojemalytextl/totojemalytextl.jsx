import React from 'react'
import Button from '../../komponenty/button/button'

import {NASTAVENIEWEBU} from '../../zonznami/main'
import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'
const Totojemalytextl = ({text,btnrext}) => {

    const web = NASTAVENIEWEBU[3]
    console.log(web);
    
  return (
    <div className='w-full h-full flex flex-col gap-4'>
     {/* <Tocenaveta
     veta1={web.veta}
     veta2={web.veta1}
     tuu = "bg-pink-500 w-full h-fit w-full"
     ></Tocenaveta> */}

      <div className='leading-tight'>
        <span className='text-[13px] text-sivaTmava md:text-[16px] leading-tight'>{text}</span>
     
      </div>
      <Button
      text = {btnrext}
      ></Button>
    </div>
  )
}

export default Totojemalytextl
