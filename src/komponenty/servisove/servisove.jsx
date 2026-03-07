import { useState ,useEffect , useRef,useContext} from 'react'

import { useParams } from "react-router-dom";
import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'
import { NASTAVENIEWEBU } from '../../zonznami/main';

import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'
import {MyProvider,MyContext} from '../../provider/provider1'


import Textovacast from '../../pages/textovacastempalte/textovacast'
import { useMediaQuery } from 'react-responsive';

import Skusenosti2 from '../../komponenty/skusenosti2/skusenosti2'
const Servisove = () => {



       const isMediumUp = useMediaQuery({ minWidth: 768 });

      const { id } = useParams();
      console.log(id);
const len = NASTAVENIEWEBU[1].servis
      const najdeny = NASTAVENIEWEBU[1].servis.items.find(item => item.id === id)
      


        const feedback = NASTAVENIEWEBU[6]
console.log(najdeny);
        
          const  web = NASTAVENIEWEBU[0]
       const skusnoeti = NASTAVENIEWEBU[5]
       const lentak = NASTAVENIEWEBU[8]
        const[foteckahover,setHoverfotecka] = useState(null)
      
              const { value, setValue,open,setOpen,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,skusam,setSkusam} = useContext(MyContext);

  return (
    <>
    <div className='w-full h-fit bg-green-500 ' >
      <div className='w-full h-full bg-red-400 flex flex-col gap-5 pt-14' >

{/* <div className='h-fit w-full bg-slate-400 flex items-center'>

  <div className='h-fit relative  w-fit bg-pink-600 max-w-[300px] leading-none   '>

  
    <span className='text-[55px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'>  {najdeny.nazov}</span>


  </div>
</div> */}

{/* <div className='w-full  h-fit bg-slate-400'>
   <Specialnyotvor
textmaly = {len.text}
></Specialnyotvor>

</div>


<div className='w-full  h-fit bg-slate-400'>
    <Tocenaveta
    veta1 =   {najdeny.veta1}
    veta2 = {najdeny.veta2}
    ></Tocenaveta>
    </div> */}





<div className='bg-gradient-to-b   gap-5 flex flex-col bg-blackCustom w-full h-[fit] pl-4 pr-4 md:pr-9 md:pl-9 pt-9 pb-9 md:pt-10 md:pb-12 md:gap-5'>
  <div className='w-full h-fit  '>


     <Textovacast
    //  podnienkakliknutia = {open2}
            textmain = {feedback.nazov}
            premenna = {feedback.rokod}
            znamienko = {"-"}
            premenna2 = {feedback.rokdo}
            textmaly = {feedback.semore}
            // referencia5 = {referencia4}
            vonku = "md:opacity-0"
            // podmienka = {open === "chat"}


            klik = {() => {
              if (!isMediumUp) {

                 setCotamje("chat"),
  setSkusam(true),
   setOpen(true)
  setOpen2(true),

    

                console.log("jebkokokokoooojebat");
                
                
              }
            }}
         ></Textovacast>
         
     


  </div>

  <div className='w-full h-fit bg-red-500 flex'>

    <div className='w-full h-fit flex bg-blackCustom'>

      {/* <Feedback></Feedback> */}
      <Skusenosti2
    veta1 = {skusnoeti.veta1}
    veta2 = {skusnoeti.veta2}
    data = {skusnoeti.projekty}

    fokta = {web.fotecka}
    podmienka={foteckahover === "1"}

    onMouseEnter  = {() => setHoverfotecka("1")}
  onMouseLeave = {() => setHoverfotecka(null)}

  text = {skusnoeti.texn}
  texticeko = {skusnoeti.textmaly}

  data32 = {skusnoeti.info}

  lentak = {lentak}
    ></Skusenosti2>
      
    </div>

  


  </div>

</div>





       


      </div>
    </div>
   
    </>
 
  )
}

export default Servisove
