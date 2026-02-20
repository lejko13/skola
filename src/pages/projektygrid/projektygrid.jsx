import React from 'react'

import Nahlad from '../../komponenty/nahlad/nahlad'
import {prace} from '../../zonznami/main' 
const Projektygrid = () => {
  return (
    <div className='h-[fit] w-full bg-green-500 grid md:grid-cols-2  gap-1'>
      {prace.map((item) => 
        <Nahlad
        ></Nahlad>
      )}
    
    </div>
  )
}

export default Projektygrid
