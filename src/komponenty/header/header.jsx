
import React, { useContext,useEffect } from "react";

import { motion } from 'framer-motion'
import Headerkomponent from '../headerkomponent/headerkomponent'
import Buttonheader from '../../komponenty/buttonheader/buttonheader'
import Logo from '../LOGO/LOGO'

import { MyContext, MyProvider } from "../../provider/provider1";


import {NASTAVENIEWEBU} from '../../zonznami/main'
import { useState } from "react";

import SpodokFoortaj from '../../komponenty/spodokFoortaj/spodokFoortaj'
const Header = () => {

   const { value, setValue } = useContext(MyContext);

 useEffect(() => {
  if (value) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden"; // zablokuje scroll aj na html
  } else {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto"; // obnoví scroll
  }

  // cleanup pri unmount
  return () => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  };
}, [value]);
  return (
    <div 

    className="h-14 bg-pozadei fixed top-0 left-0 w-full flex pt-2 pb-2 pr-4 md:px-pcKraj px-mobilKraj z-50 " >
      <motion.div 
    initial={{ height: 1 }}
  animate={{ height: value ?  "100vh" : "1px", 
    opacity:value ?  1 : 1, 

  }}
  transition={{ duration: 0.6 }}
      className="absolute w-full  bg-pozadei left-0  top-0  z-20 ">
        <motion.div  
        animate={{ height: value ?  "100vh" : "1px", 
    opacity:value ?  1 : 0, 

  }}
    transition={{ duration: 0.6 }}
        className="bg-red-400 mt-14 flex flex-col"
        >
          <div className="w-full bg-red-800 flex-1"></div>

<SpodokFoortaj></SpodokFoortaj>


        </motion.div >
</motion.div>

<div className='w-full h-full flex  gap-2 justify-between  md:justify-between '>
     <Logo
     text = {NASTAVENIEWEBU[0].logo}
   
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
        <div className=' w-fit  h-full   items-center justify-center flex   z-30'>
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
