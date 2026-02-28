import React from 'react'
import Totojezoznamprojektov from '../../komponenty/totojezoznamprojektov/totojezoznamprojektov'

import {prace} from '../../zonznami/main'

import './dokopycele.css'
const Dokopycele = () => {
  return (
    <div className='bg-pozadei w-full h-full flex flex-col mb-7 md:mb-16'>
        <Totojezoznamprojektov
        tyl = "bg-pozadei"
        ></Totojezoznamprojektov>
        <div className='bg-pozadei flex-1 flex mt-1'>

        <div className='scrollable-container' >


     {prace.map((item) => {
  return <Totojezoznamprojektov
     tyl = "bg-whiteCustom"
   key={item.id} text={item.nazov} />;
})}
        </div>
        </div>
      
    </div>
  )
}

export default Dokopycele
