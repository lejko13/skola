import { useState ,useEffect , useRef,useContext} from 'react'
import { motion } from 'framer-motion'
import {MyProvider,MyContext} from '../../provider/provider1'

import { NASTAVENIEWEBU } from '../../zonznami/main'

import Vyber from '../../komponenty/vyber/vyber'
import './otvarac.css'

import Malytext from '../../komponenty/malytext/malytext'
import { useMediaQuery } from 'react-responsive';

import Castnova from '../../komponenty/castNova/castnova'

import Ludiahodnotenie from '../../komponenty/ludiahodnotenie/ludiahodnotenie'
const Otvarac = ({podmienkaii}) => {

  
    const karmmo = useMediaQuery({ minWidth: 420 });

          const { value, setValue,open,setOpen,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,skusam,setSkusam} = useContext(MyContext);

const web = NASTAVENIEWEBU[4]
const web2 = NASTAVENIEWEBU[2]
const web9 = NASTAVENIEWEBU[0]
const webik = NASTAVENIEWEBU[5]
const webik33 = NASTAVENIEWEBU[6]
const webik339 = NASTAVENIEWEBU[8]




          


  return (
    <>

    <motion.div
    initial={{ height: "0px" }}
animate={{
  height: skusam ? "100vh" : "0PX",
 
 
 
}}
transition={{ duration: 0.6 }}
className="bg-red-500 w-full  fixed z-50 bottom-0 grid grid-rows-[150px_1fr] gap-2"
    >
      <div className='bg-slate-100' onClick={() => setSkusam(false)}></div>
      <div className='bg-slate-100 flex'>



{cotamje === "projekty" && 
<div className='flex w-full h-full flex-col'>
  <div className='w-full h-fit flex justify-between'>

<div>

  <div className='h-fit relative  w-fit '>

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'>  {web2.projekty.nazov}.</span>

    <div className=' text-sivaTmava absolute -top-1 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({web.firmy.length})</div>
  </div>
</div>



 <div 
 onClick={() => { setOpen(false); setOpen2(false); }}
 className='w-fit h-fit flex gap-1 '>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-red-500`}
            ></div>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-orange-500`}
            ></div>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-green-500`}
            ></div>

            
            
            

          </div>
  </div>



<div className='flex bg-white flex-1 flex-col'>

  <Vyber
  koko = "opacity-0"
  styl = "pt-1 pb-1 border-b border-gray-200 rounded-none"
  jeden = {web2.jeden}
  dva  =  {web2.strir}

  tri = {web2.tri}
  styri =  {web2.dva}



  ></Vyber>

<div className="custom-scroll">
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
  
  ></Vyber>
  )}

</div>

  
<div className='h-[20pxw-full '>
<Malytext
                rok = {web9.rok}
                nazov = {web9.nazov}
                studio =     {web9.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>
</div>
 
</div>
  
  </div>}

      </div>


    </motion.div>


     {/* <motion.div
initial={{ height: "0px", paddingTop: "0px", backdropFilter: "blur(0px)" }}
animate={{
  height: "100vh",
  paddingTop: podmienkaii ? "100px" : "0px",
  opacity: podmienkaii ? 1 : 0,
  backdropFilter: podmienkaii ? "blur(6px)" : "blur(0px)",
  pointerEvents: podmienkaii ? "auto" : "none"
}}
transition={{ duration: 0.3 }}
className="bg-pozadei-/30 bottom-0 fixed w-full z-50"
onClick={() => { setOpen(null); setOpen2(null);setDalsi(""),setSkusam(null) }}
>



      <motion.div
  initial = {{height:"0px"}}
animate={{
  height: open2 ? "700px": "0px",
  paddingTop: open2 ? "15px" : "0px",
  paddingBottom: open2 ? "15px" : "0px",
  
  
}}
  transition={{ duration: 0.8 }}
className='bg-pink-500  bottom-0 fixed w-full  pl-[15px] pr-[15px]  z-50  flex  '

      >





        <div className='w-full  h-full bg-slate-600    flex '>



{cotamje === "projekty" && 
<div className='flex w-full h-full flex-col'>
  <div className='w-full h-fit flex justify-between'>

<div>

  <div className='h-fit relative  w-fit '>

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'>  {web2.projekty.nazov}.</span>

    <div className=' text-sivaTmava absolute -top-1 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({web.firmy.length})</div>
  </div>
</div>



 <div 
 onClick={() => { setOpen(false); setOpen2(false); }}
 className='w-fit h-fit flex gap-1 '>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-red-500`}
            ></div>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-orange-500`}
            ></div>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-green-500`}
            ></div>

            
            
            

          </div>
  </div>



<div className='flex bg-white flex-1 flex-col'>

  <Vyber
  koko = "opacity-0"
  styl = "pt-1 pb-1 border-b border-gray-200 rounded-none"
  jeden = {web2.jeden}
  dva  =  {web2.strir}

  tri = {web2.tri}
  styri =  {web2.dva}



  ></Vyber>

<div className="custom-scroll">
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
  
  ></Vyber>
  )}

</div>

  
<div className='h-[20pxw-full '>
<Malytext
                rok = {web9.rok}
                nazov = {web9.nazov}
                studio =     {web9.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>
</div>
 
</div>
  
  </div>}



  {cotamje === "skusentosi" && 
  <div className='flex w-full h-full flex-col'>
  <div className='w-full h-fit flex justify-between'>

<div>

  <div className='h-fit relative  w-fit '>

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'>  Ability.</span>

    <div className=' text-sivaTmava absolute -top-1 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({webik.skill.length})</div>
  </div>
</div>



 <div 
 onClick={() => { setOpen(null); setOpen2(null);setDalsi(""),setSkusam(null)  }}
 className='w-fit h-fit flex gap-1 '>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-red-500`}
            ></div>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-orange-500`}
            ></div>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-green-500`}
            ></div>

            
            
            

          </div>
  </div>




<div className='flex bg-white flex-1 flex-col'>

  <Vyber
  koko = "opacity-0"
  styl = "pt-1 pb-1 border-b border-gray-200 rounded-none"


  jeden = {webik.jeden}
  dva  =  {webik.dva}

  tri = {webik.tri}
  styri =  {webik.strir}


  ></Vyber>

<div className="custom-scroll">



{webik.skill.map((item,index) => 
  <Castnova 
  key={index}
  sylik = {`${index % 2 === 0 ? "bg-pozadei" : "bg-white"} `}

  nazov = {item.nazov}
  fotkaa = {item.fotka}
    jeden = {item.nazov}
  dva  =  {item.skusenoti}

  tri = {item.htovop}
  styri =  {item.rok}

  ></Castnova>
)}

</div>
  <div className='w-full h-1  pt-2 pb-2 flex items-center justify-center'>
    <div className='w-full h-[1px] bg-gray-200'></div>
  </div>
<div className='h-[20pxw-full '>
<Malytext
                rok = {web9.rok}
                nazov = {web9.nazov}
                studio =     {web9.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>
</div>
 
</div>

 

  
  </div>}




  {cotamje === "chat" && 
  <div className='flex w-full h-full flex-col'>
  <div className='w-full h-fit flex justify-between'>

<div>

  <div className='h-fit relative  w-fit '>

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'> {webik33.nazov} .</span>

    <div className=' text-sivaTmava absolute -top-1 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({webik339.ludia.length})</div>
  </div>
</div>



 <div 
 onClick={() => { setOpen(null); setOpen2(null);setDalsi(""),setSkusam(null)  }}
 className='w-fit h-fit flex gap-1 '>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-red-500`}
            ></div>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-orange-500`}
            ></div>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 bg-green-500`}
            ></div>

            
            
            

          </div>
  </div>





<div className='flex bg-white flex-1 flex-col '>

<div className='h-[0.9px] w-full bg-gray-300'></div>
<div className="custom-scroll32">


{webik339.ludia.map((item,index) => 
<Ludiahodnotenie

pica = {`${index % 2 === 0 ? "bg-gray-200" : "bg-white"}`}
   fotka = {item.fotka}
   meno = {item.meno}
   eamli = {item.email}
   lenno = {item.hodnotenie}

></Ludiahodnotenie>)}


</div>
  <div className='w-full h-1  pt-2 pb-2 flex items-center justify-center'>
    <div className='w-full h-[1px] bg-gray-200'></div>
  </div>
<div className='h-[20pxw-full '>
<Malytext
                rok = {web9.rok}
                nazov = {web9.nazov}
                studio =     {web9.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>
</div>
 
</div>

 

  
  </div>}






      </div>




      </motion.div>

      </motion.div> */}
    </>
   
  )
}

export default Otvarac

