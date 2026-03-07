import React from 'react'
import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'
import { motion } from 'framer-motion'
import Specialnyotvor2 from '../../komponenty/specialnyotvor2/specialnyotvor2'
const Textovacast = (   {koktext,loo,vonku,referencia5,podnienkakliknutia,podmienka,klik,textmain,premenna,textmaly,premenna2,znamienko}) => {
  return (

    <>
    
 
   <div className='w-full h-fit  gap-2 grid grid-rows-[20px_2fr_fit] 
   md:grid-rows-[none]
    md:grid-cols-[20%_auto_15%] 
    xl:grid-cols-[25%_auto_20%] 
    xl:gap-0

    
    '>
  <div className='h-full  md:order-3'></div>

  <div className='w-full  flex  justify-start  md:order-2'>

  <div className='h-fit relative  w-fit '>

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-whiteCustom'>  {textmain}.</span>

    <div className=' text-sivaTmava absolute -top-1 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({premenna} {znamienko}{premenna2})</div>
  </div>

  </div>


 

<div className={`${vonku}`}>
 <span className='text-[13px] text-sivaTmava pb-3'>{koktext}</span>
<div className={`${loo} flex flex-col gap-2`}>

<Specialnyotvor2
referenciaiii = {referencia5}
podnienkakliknutia = {podnienkakliknutia}

tutu = 'bg-white '
tull = "text-black"
tutu2 = 'text-red-500'
klik = {klik}
    textmaly = {textmaly}
    ></Specialnyotvor2>

</div>
   
    </div>






</div>

<motion.div

initial = {{height:"0px"}}
animate = {{
  height:podmienka ? "400px" : "0px",
  marginBottom:podmienka ? "70px" : "0px"


}}
  transition={{ duration: 0.5 }}
  className='w-full bg-red-600'

></motion.div>
   </>
  )
}

export default Textovacast

// onMouseLeave = {onMouseLeave}
//  onMouseEnter = {onMouseEnter}
//  ciara = {ciara}
//  klik = {onClick}
//  podnienkakliknutia = {podmienkaii33}

//  referenciaiii = {referencia2}