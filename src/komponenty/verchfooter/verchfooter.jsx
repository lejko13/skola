import React, { useState } from 'react'




import {NASTAVENIEWEBU} from '../../zonznami/main'
import Hoverrik from '../../komponenty/hoverrik/hoverrik'
import { use } from 'react'
const Verchfooter = () => {
    const web = NASTAVENIEWEBU[0]
  
    console.log(web);
    
const[hover,setHover] = useState(null)


  return (
    <div className={`w-full h-full    flex flex-col 
       items-center justify-center
       md:h-full md:pt-0
       gap-3
     `}>
<Hoverrik
   onMouseEnter={() => setHover(web.header1) }
    onMouseLeave={() => setHover(null)}
    podmienka = {hover === web.header1}
    prisposobujem = 'text-[32px] md:text-[50px] font-[550] text-blackCustom leading-snug'
    prisposobujem2 = "bg-blackCustom h-[4px] "
    textvoacas = {web.header1}
></Hoverrik>

<Hoverrik
onMouseEnter={() => setHover(web.header2) }
    onMouseLeave={() => setHover(null)}
    podmienka = {hover === web.header2}
     prisposobujem = 'text-[32px] md:text-[50px] font-[550]  leading-snug text-blackCustom'
    prisposobujem2 = "bg-blackCustom h-[4px]"
    textvoacas = {web.header2}
></Hoverrik>

<Hoverrik
onMouseEnter={() => setHover(web.header3) }
    onMouseLeave={() => setHover(null)}
    podmienka = {hover === web.header3}
    prisposobujem = 'text-[32px] md:text-[50px] font-[550] leading-snug text-blackCustom'
    prisposobujem2 = "bg-blackCustom h-[4px]"
    textvoacas = {web.header3}
></Hoverrik>

<Hoverrik
onMouseEnter={() => setHover(web.header4) }
    onMouseLeave={() => setHover(null)}
    podmienka = {hover === web.header4}
       prisposobujem = 'text-[32px] md:text-[50px] font-[550] leading-snug text-blackCustom'
    prisposobujem2 = "bg-blackCustom h-[4px]"
    textvoacas = {web.header4}
></Hoverrik>


      
      
    </div>
  )
}

export default Verchfooter
