import React from 'react'
import Textovacst2 from '../../komponenty/textovacast2/textovacst2'

import {NASTAVENIEWEBU} from  '../../zonznami/main'

import Hybemkomponent from '../../komponenty/hybemkomponent/hybemkomponent'
const Faq = () => {
    const web = NASTAVENIEWEBU[3]
    console.log(web);


     

    // 

   // 

  return (
    <div className='w-full bg-red-500 h-full grid grid-rows-[auto_1fr] gap-2'>

<Textovacst2
textmain ="KO"
premenna = "KO"
textmaly = "KO"
></Textovacst2>
    {/* <div className='bg-pink-400'></div> */}
    <div className='bg-pink-400'>
        <Hybemkomponent></Hybemkomponent>
        <Hybemkomponent></Hybemkomponent>
        <Hybemkomponent></Hybemkomponent>
        <Hybemkomponent></Hybemkomponent>
    

    </div>


      
    </div>
  )
}

export default Faq