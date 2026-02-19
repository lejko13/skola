
import React, { useContext } from "react";

import { motion } from 'framer-motion'
import Headerkomponent from '../headerkomponent/headerkomponent'
import Buttonheader from '../../komponenty/buttonheader/buttonheader'
import Logo from '../LOGO/LOGO'

import { MyContext, MyProvider } from "../../provider/provider1";


import {NASTAVENIEWEBU} from '../../zonznami/main'
import { useState } from "react";

const Header = () => {

   const { value, setValue } = useContext(MyContext);


   
  return (
    <div className="h-14 bg-red-500 fixed top-0 left-0 w-full flex pt-2 pb-2 pr-4 md:px-pcKraj px-mobilKraj z-50" >
      <motion.div 
    initial={{ height: 1 }}
  animate={{ height: value ?  "100vh" : "1px", 
    opacity:value ?  1 : 1, 

  }}
  transition={{ duration: 0.5 }}
      className="absolute w-full bg-whiteCustom left-0  top-0  z-20">
      
      </motion.div>
<div className='w-full h-full bg-pink-500 flex  gap-2 justify-between  md:justify-between '>
     <Logo
     text = {NASTAVENIEWEBU.logo}
   
     ></Logo>
          
       
        {/*  */}
       
          <Headerkomponent
          podmienka
          styldalsie = {{display:"none"}}
          text = {"Studio"}
          ></Headerkomponent> 

          <Headerkomponent
          podmienka
          text = {"Projects"}
              // styldalsie = {{display:"none"}}
          ></Headerkomponent> 

          <Headerkomponent
          podmienka
          text = {"Offer"}
              styldalsie = {{display:"none"}}
          ></Headerkomponent> 

          <Headerkomponent
          podmienka
          text = {"Contact"}
              styldalsie = {{display:"none"}}
          ></Headerkomponent> 
    
        {/* <div className=' shrink-0 hidden xl:flex xl:w-48 h-full xl:bg-slate-100 xl:items-center xl:justify-center'></div>
        <div className=' shrink-0 hidden xl:flex xl:w-48 h-full xl:bg-slate-100 xl:items-center xl:justify-center'></div>
        <div className=' shrink-0 hidden xl:flex xl:w-48 h-full xl:bg-slate-100 xl:items-center xl:justify-center'></div>
         */}
        {/*  */}
        <div className=' w-fit  h-full   items-center justify-center flex  bg-slate-100  z-30'>
          <Buttonheader
          onClick={() => setValue(prev => !prev)}
          pohyb = {value}
          ></Buttonheader>
        </div>

</div>

      
    </div>
  )
}

export default Header
