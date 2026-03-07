import { useState ,useEffect , useRef,useContext} from 'react'
import { motion } from 'framer-motion'
import './klikane.css'
import Hoverrik from '../../komponenty/hoverrik/hoverrik'
import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'

import {MyProvider,MyContext} from '../../provider/provider1'

import { NASTAVENIEWEBU } from '../../zonznami/main'


import { useMediaQuery } from 'react-responsive';

import Otvarac from '../../komponenty/otvarac/otvarac'
import { div } from 'three/src/nodes/math/OperatorNode.js'

import Vyber from '../../komponenty/vyber/vyber'
import Malytext from '../../komponenty/malytext/malytext'

const Kliknutienaviac = ({oop,typp,referenciaiii,podnienkakliknutia,podmienkaii,klik,ciara,klikamm,textmain,premenna,textmaly,onMouseEnter,onMouseLeave}) => {
  
const web = NASTAVENIEWEBU[4]
const web2 = NASTAVENIEWEBU[2]
const web1 = NASTAVENIEWEBU[0]

    const { value, setValue,open,setOpen,cotamje,setCotamje } = useContext(MyContext);


        const isMediumUp = useMediaQuery({ minWidth: 768 });

  return (

    <>
   
   <motion.div 

   animate = {{height:"fit-content"}}
   className='w-full h-fit  gap-2 grid grid-rows-[40px_2fr_fit] md:grid-rows-[none]
    md:grid-cols-[20%_auto_15%] 

    xl:grid-cols-[25%_auto_30%] 
    xl:gap-0
    md:pb-9
    '>
  <div className='h-full  md:order-3'></div>

  <div className='w-full  flex  justify-start  md:order-2'>

  <div className='h-fit relative  w-fit '>

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'>  {textmain}.</span>

    <div className=' text-sivaTmava absolute top-0 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({premenna})</div>
  </div>
  </div>


<div className={`${typp}`}>




<Specialnyotvor
textmaly = {textmaly}
onMouseLeave = {onMouseLeave}
 onMouseEnter = {onMouseEnter}
 ciara = {ciara}
 klik = {klik}
 podnienkakliknutia = {podmienkaii}

 referenciaiii = {referenciaiii}
></Specialnyotvor>
</div>
  
  
</motion.div>

<div className={`${oop}`}>
{isMediumUp && <>

<motion.div

initial = {{height:"0px"}}
animate = {{
  height:podmienkaii ? "fit-content" : "0px",
  marginBottom:podmienkaii ? "70px" : "0px"


}}
  transition={{ duration: 0.5 }}
className=' flex overflow-hidden '
>
  {cotamje === "projekty" && <div className='w-full bg-white pb-5 rounded-velky' >

    <div className='flex flex-1 h-[410px] flex-col gap-1  pl-4 pr-4 '>
   <Vyber
  koko = "opacity-0"
  styl = "pt-2 pb-2 border-b border-gray-200  rounded-none"


 
  jeden = {web2.jeden}
  dva  = {web2.dva}
  tri = {web2.tri}
  styri =  {web2.strir}

  ></Vyber>
<div className="my-scroll-box border-b">
 {web.firmy.map((item,index) => 

  <Vyber


   koko3 = "opacity-0"
  llao = "text-black"
  styl = {`${index % 2 === 0 ? "bg-pozadei" : "bg-white"} `}
  fotkaa = {item.fotka}

  jeden = {item.nazov}
  dva  = {item.rok}
  tri = {item.firma}
  styri =  {item.typ}
  >{item.nazov}</Vyber>
  )}
</div>
 
</div>
<div className='pl-4 pr-4 pt-4'>
  

  <Malytext
                rok = {web1.rok}
                nazov = {web1.nazov}
                studio =     {web1.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>
</div>
    </div>}




</motion.div>

</>}
</div>
{/* {!isMediumUp && <Otvarac
podmienkaii = {podmienkaii}
>


  </Otvarac>} */}

 </>
  )
}

export default Kliknutienaviac
