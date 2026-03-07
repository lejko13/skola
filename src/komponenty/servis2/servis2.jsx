import React from 'react'

import Kruzok from '../kruzok/kruzok'
import { motion } from 'framer-motion'

import Serviskomponent2 from '../../komponenty/serviskomponent2/serviskomponent2'
import Takemalena from '../takemalena/takemalena'


const Servis2 = ({spodnutext,textovacast1,textovacastz,pocet,onClick,podmienka,data,fotak1,fotak2,fotak3})  => {
  return (
    <div
    // initial = {{minHeight:"62px",maxHeight:"50px",height:"70px"}}
    // animate={{ height: "auto",minHeight:"62px",maxHeight:"500px"}}
    transition={{ duration: 0.4 }}
  className='h-fit w-full grid
  grid-cols-[auto_1fr_auto]
 md:grid-cols-[20%_auto_15%] 
  xl:grid-cols-[25%_auto_5%] 
  pt-4
border-b border-sivaTmava xl:border-b-0
gap-4
   md:gap-2 xl:gap-0 border-soli pb-3' >
      <div className=' h-full flex justify-start items-start  pt-[18px] ' >
        <span className={`text-[12px] transition-all duration-400 text-whiteCustom cursor-pointer`}
         onClick = {onClick}
        >  ({pocet})</span>
      
    
      </div>

      <div  
        initial={{ height: "60px" ,minHeight:"60px" }}
      animate={{ height: "fit-content" }}
            transition={{ duration: 0.4 }}


      className={` h-full flex justify-start xl:border-b  border-sivaTmava items-start  flex-col  relative overflow-hidden`}>

        {/* obsah */}
      
        
        <div
        
         
          className=" flex xl:flex-col h-fit w-full"
          >
            <Serviskomponent2
          podmienka = {podmienka}
          textovacast1 = {textovacast1}
          spodnutext = {spodnutext}
          data = {data}
          fotak1 = {fotak1}
          fotak2 = {fotak2}
          fotak3 = {fotak3}
         
          ></Serviskomponent2>

          </div>

        {/* <motion.div 
        animate={{ opacity: podmienka ?  0 : 1 ,
          height: podmienka ?  "1px" : "100%" ,

                    width: podmienka ?  "100%" : "100%",

        }}
        transition={{ duration: 0.4 }}
    
        className={`w-[200px] text-whiteCustom flex flex-col justify-center break-words overflow-hidden text-[18px] relative`}>
          <span   className='absolute cursor-pointer'     onClick = {onClick}   > {textovacastz}</span>
         
        </motion.div> */}
   
        {/* <motion.div



     

        
    
        {/* obsah */}
      </div >




      <div className='  xl:border-b border-sivaTmava h-full flex justify-end items-start pt-[14px]'>
        {/* <Kruzok
        onClick = {onClick}
        podmienka = {podmienka}
        ></Kruzok> */}

      </div>

      
    </div>
  )
}

export default Servis2
