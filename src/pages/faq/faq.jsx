import React, { useState } from 'react'
import Textovacst2 from '../../komponenty/textovacast2/textovacst2'

import {NASTAVENIEWEBU} from  '../../zonznami/main'

import Hybemkomponent from '../../komponenty/hybemkomponent/hybemkomponent'

import Totojemalytextl from '../../komponenty/totojemalytextl/totojemalytextl'
import { use } from 'react'
const Faq = () => {
    const web = NASTAVENIEWEBU[3]
    // console.log(web);
    const dlzka = web.otazky.length


    const[klikam,setKlikam] = useState(1)

     const otazky = web.otazky
    //  console.log(otazky[1].otazka2);

     
     

    // 

   // 

  return (
    <div className='h-fit flex flex-col gap-7'>
     <div className='w-full  h-fit 
    grid grid-rows-[auto_1fr]  

    xl:flex xl:flex-row  xl:gap-[20%]
    '>

<Textovacst2
textmain ={web.nazov}
premenna = {dlzka}
textmaly = {web.textmaly}
textelll = {web.text}
takolenmo = {web.text}
klokolo = {"hidden md:flex text-blackCustom"}

></Textovacst2>
    {/* <div className='bg-pink-400'></div> */}
    <div className=' h-fit flex flex-col gap-1'>

     {otazky.map((item, index) => (
  <Hybemkomponent
    key={index}
    onClick={() => setKlikam(index)}
    podmienka={klikam === index}
    otazka={item.otazka}
    odpoved={item.odpoved} // ak chceš odkaz na odpoveď

    odpvene = {item.odpoved}
  />
))}

       

    </div>



      
    </div>
    

        <div className='h-fit w-full pb-2'>

       <Totojemalytextl
       ></Totojemalytextl>
        </div>
    </div>
   
  )
}

export default Faq