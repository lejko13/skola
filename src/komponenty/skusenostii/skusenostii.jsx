import React from 'react'
import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'

import Kartaskisenosti from '../../komponenty/kartaskisenosti/kartaskisenosti'

const Skusenostii = ({veta1,veta2}) => {
  return (
    <div className='bg-red-300 w-full h-fit flex flex-col gap-5'>
        <div className='w-full h-[100vw] bg-pink-600 rounded-velky'></div>
<Tocenaveta
veta1={veta1}
veta2={veta2}
></Tocenaveta>

<Kartaskisenosti></Kartaskisenosti>
<Kartaskisenosti></Kartaskisenosti>

<div className='w-full h-fit'></div>

      
    </div>
  )
}

export default Skusenostii
