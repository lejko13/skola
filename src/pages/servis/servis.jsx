import React from 'react'
import Tamplatepage from '../../komponenty/tamplatepage/tamplatepage'
import Textovacast from '../textovacastempalte/textovacast'

import { NASTAVENIEWEBU } from '../../zonznami/main'
import Celokservis2 from '../../komponenty/celokservis2/celokservis2'
import { div } from 'three/src/nodes/math/OperatorNode.js'
const Servis = () => {

  const text = NASTAVENIEWEBU[1].servis.text
    const prepocet  = NASTAVENIEWEBU[1].servis.items.length
    const nazov = NASTAVENIEWEBU[1].servis.nazov
  return (

<div className='pt-14'>
      <div className='w-full h-[fit] bg-black px-mobilKraj md:px-pcKraj flex flex-col  pt-10 pb-10'>
         <Textovacast
            textmain = {nazov}
            premenna = {prepocet}
            textmaly = {text}
              loo = "hidden"
              vonku = "flex  md:opacity-0"

              koktext = "We provide a comprehensive range of digital solutions, specializing in custom web development, cohesive branding, and strategic social media management."
 
         ></Textovacast>



   

         <div className='h-fit bg-blackCustom w-full'>
          <Celokservis2></Celokservis2>
         </div>
    


</div>

</div>
  

  )
}

export default Servis
