
import React, { useContext,useEffect } from "react";

import { motion } from 'framer-motion'
import Headerkomponent from '../headerkomponent/headerkomponent'
import Buttonheader from '../../komponenty/buttonheader/buttonheader'
import Logo from '../LOGO/LOGO'

import { MyContext, MyProvider } from "../../provider/provider1";


import {NASTAVENIEWEBU} from '../../zonznami/main'

import { useState } from "react";
import Verchfooter from '../../komponenty/verchfooter/verchfooter'

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



 const web = NASTAVENIEWEBU[0]

  console.log(web);


  const[hover,setHover] = useState(null)
  return (
    <div 

    className="h-14 bg-pozadei fixed top-0 left-0 w-full flex pt-2 pb-2 pr-4 md:px-pcKraj px-mobilKraj z-50 " >

      


      <motion.div 
    initial={{ height: "0px" }}
    
  animate={{ 
    height: value ? "calc(100vh - 56px)" : "0px",
    opacity:value ?  1 : 1, 

  }}
  transition={{ duration: 0.6 }}
      className="absolute w-full   left-0  top-[56px] bg-pozadei-/30 backdrop-blur-md flex overflow-x-hidden ">
        <div className="h-[calc(100vh-56px)] w-full bg-pozadei flex flex-col justify-between">


  <Verchfooter
            podmienka = {value}
            ></Verchfooter>

   <SpodokFoortaj></SpodokFoortaj>

        </div>

        {/* <div></div> */}

        {/* <div  
        initial = {{opacity:  0 }}
        animate={{ opacity:value ?  1 : 1, 
 }}
    transition={{ duration: 0.6 }}
        className="bg-red-500 mt-14   flex flex-1 flex-col "
        >
          <div className="w-full h-full bg-pozadei   flex flex-col justify-end items-end">




             




    

      


          </div>

        



        </div > */}

</motion.div>


<div className='w-full h-full flex  gap-2 justify-between  md:justify-between  z-40'>
     <Logo
     text = {NASTAVENIEWEBU[0].logo}
    onMouseEnter = {() => setHover(NASTAVENIEWEBU[0].logo)}
          onMouseLeave = {() => setHover(null)}
     hodnota = {hover === NASTAVENIEWEBU[0].logo}
   
     ></Logo>
          
       
       
       
          <Headerkomponent
          podmienka = {value}
          styldalsie = {{display:"none"}}
          text = {web.header1}

           onMouseEnter = {() => setHover(web.header1)}
          onMouseLeave = {() => setHover(null)}
          hodnota = {hover === web.header1 }
          
          ></Headerkomponent> 

          <Headerkomponent
                  podmienka = {value}
          
          text = {web.header2}
              // styldalsie = {{display:"none"}}


           onMouseEnter = {() => setHover(web.header2)}
          onMouseLeave = {() => setHover(null)}
         hodnota = {hover === web.header2 }
          ></Headerkomponent> 

          <Headerkomponent
            podmienka = {value}
          text = {web.header3}
              styldalsie = {{display:"none"}}


           onMouseEnter = {() => setHover(web.header3)}
          onMouseLeave = {() => setHover(null)}
 hodnota = {hover === web.header3 }
          ></Headerkomponent> 

          <Headerkomponent
                podmienka = {value}
          text = {web.header4}
              styldalsie = {{display:"none"}}


           onMouseEnter = {() => setHover(web.header4)}
          onMouseLeave = {() => setHover(null)}
         hodnota = {hover === web.header4 }
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
