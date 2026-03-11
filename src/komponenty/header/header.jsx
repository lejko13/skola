
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

import { useMediaQuery } from 'react-responsive';

import { useNavigate } from "react-router-dom";
import { log } from "three/src/nodes/math/MathNode.js";

const Header = ({refereceniescroll}) => {


  const navigate = useNavigate();

   const { value, setValue,obsahHeader,setObsahHeader } = useContext(MyContext);

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


  const otvoreneiHeadera = () => {
          setValue(prev => !prev)
    setObsahHeader("header" )
  }


      const prepocet  =  NASTAVENIEWEBU[4].firmy
     
          const isMediumUp = useMediaQuery({ minWidth: 768 });



            const funkcia = () => {
              if (isMediumUp) {
                
navigate(`/`)



                 refereceniescroll.current.scrollTo({
        top: 0,
        behavior: "smooth" // smooth scroll
      })
      return}
       

document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

     navigate(`/`)
       setValue(false)



            }


  const projekty = () => {
navigate(`/Projekty`)
  }
  const servis = () => {
navigate(`/Servis`)
  }
  const kontakt = () => {
navigate(`/Kontakt`)
  }

  const studio = () => {
navigate(`/Studio`)
  }
  return (
    <div 

    className="h-14 bg-pozadei fixed top-0 left-0 w-full flex pt-2 pb-2 pr-4 md:px-pcKraj px-mobilKraj z-50 " >

      


      <motion.div 
    initial={{ height: "0px" }}
    
  animate={{ 
    height: value ? "calc(100dvh - 56px)" : "0px",
    opacity:value ?  1 : 1, 

  }}
  transition={{ duration: 0.6 }}
      className="absolute w-full   left-0  top-[56px] bg-pozadei-/30 backdrop-blur-sm flex overflow-x-hidden ">

        {obsahHeader === "header" && 
          <div className="h-[calc(100dvh-56px)] w-full bg-pozadei flex flex-col justify-between">


  <Verchfooter
  studio = {() => {studio(),setValue(false)}}
  projekty = {() => {projekty()  ,setValue(false)   }}
  offer = {() => {servis(),setValue(false)}}
  contst = {() => {kontakt(),setValue(false)}}


            podmienka = {value}
            ></Verchfooter>

   <SpodokFoortaj></SpodokFoortaj>

        </div>
        }
        
      

</motion.div>


<div className='w-full h-full flex  gap-2 justify-between  md:justify-between  z-40'>
     <Logo
     onClick  = {() => {funkcia(),setValue(false) }}
     text = {NASTAVENIEWEBU[0].logo}
    onMouseEnter = {() =>
    {if (isMediumUp) {
 setHover(NASTAVENIEWEBU[0].logo)
    }
    }
      }
          onMouseLeave = {() => 
            setHover(null)}
     hodnota = {hover === NASTAVENIEWEBU[0].logo}
   
     ></Logo>
          
       
       
       
          <Headerkomponent
          podmienka = {value}
          styldalsie = {{display:"none"}}
          text = {web.header1}

           onMouseEnter = {() => setHover(web.header1)}
          onMouseLeave = {() => setHover(null)}
          hodnota = {hover === web.header1 }

          onClick = {() => navigate(`/studio`)}
          
          ></Headerkomponent> 

          <Headerkomponent
                  podmienka = {value}
          
          text = {web.header2}
              // styldalsie = {{display:"none"}}

cislo = {prepocet.length}
           onMouseEnter = {() => setHover(web.header2)}
          onMouseLeave = {() => setHover(null)}
         hodnota = {hover === web.header2 }
              onClick = {() => projekty() }
          ></Headerkomponent> 

          <Headerkomponent
            podmienka = {value}
          text = {web.header3}
              styldalsie = {{display:"none"}}


           onMouseEnter = {() => setHover(web.header3)}
          onMouseLeave = {() => setHover(null)}
 hodnota = {hover === web.header3 }
       onClick = {() => servis()}
          ></Headerkomponent> 

          <Headerkomponent
                podmienka = {value}
          text = {web.header4}
              styldalsie = {{display:"none"}}


           onMouseEnter = {() => setHover(web.header4)}
          onMouseLeave = {() => setHover(null)}
         hodnota = {hover === web.header4 }

            onClick = {() => kontakt()}
          ></Headerkomponent> 
    
        {/* <div className=' shrink-0 hidden xl:flex xl:w-48 h-full xl:bg-slate-100 xl:items-center xl:justify-center'></div>
        <div className=' shrink-0 hidden xl:flex xl:w-48 h-full xl:bg-slate-100 xl:items-center xl:justify-center'></div>
        <div className=' shrink-0 hidden xl:flex xl:w-48 h-full xl:bg-slate-100 xl:items-center xl:justify-center'></div>
         */}
        {/*  */}
        <div className=' w-fit  h-full   items-center justify-center flex   z-30'>
          <Buttonheader
          onClick={() => 
            otvoreneiHeadera()
      
          }
          pohyb = {value}
          ></Buttonheader>
        </div>

</div>

      
    </div>
  )
}

export default Header
