import React, { useState } from 'react'
import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'
import { motion } from 'framer-motion'
import Specialnyotvor2 from '../../komponenty/specialnyotvor2/specialnyotvor2'


import { useMediaQuery } from 'react-responsive';

import { useNavigate } from "react-router-dom";

const Textovacast = (   {koktext,loo,vonku,referencia5,podnienkakliknutia,podmienka,klik,textmain,premenna,textmaly,premenna2,znamienko}) => {
 
  const[hover,setHover] = useState(null)
  const[klinitkue,setKLiknutie] = useState(null)


     const isMediumUp = useMediaQuery({ minWidth: 768 });


      const navigate = useNavigate();

  const goToServis = () => {
    navigate("/Servis");
  };

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

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-whiteCustom text-nowrap'>  {textmain}.</span>

    <div className=' text-sivaTmava absolute -top-1 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({premenna} {znamienko}{premenna2})</div>
  </div>

  </div>


 

<div className={`${vonku}`}>
 <span className='text-[13px] text-sivaTmava pb-3'>{koktext}</span>
<div className={`${loo} flex flex-col gap-2`}>

<Specialnyotvor2
referenciaiii = {referencia5}
podnienkakliknutia = {klinitkue === 12}

tutu = 'bg-white '
tull = "text-black"
tutu2 = 'text-red-500'
klik = {() => {setKLiknutie(12),goToServis()}}

    textmaly = {textmaly}

    onMouseEnter23 = {() => 
    {if (isMediumUp) {
       setHover(12)
    }}}
    onMouseLeave23 = {() => setHover(null)}

    motanica = {"bg-white"}



    ciara = {hover === 12}
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