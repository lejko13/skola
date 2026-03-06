import { useState ,useEffect , useRef,useContext} from 'react'

import { useMediaQuery } from 'react-responsive';

import { motion } from 'framer-motion'

import {MyProvider,MyContext} from '../../provider/provider1'

import {NASTAVENIEWEBU} from '../../zonznami/main'
import Vyber from '../../komponenty/vyber/vyber'

import Castnova from '../../komponenty/castNova/castnova'
import Malytext from '../../komponenty/malytext/malytext'

import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'

const Textovacst2 = ({podmienkaii33,ciara,onMouseLeave,onMouseEnter,toyp,typ,referencia2,referencia,podmienka,onClick,textmain,premenna,textmaly,klokolo,takolenmo,spinom,podmienkaii}) => {

          const isMediumUp = useMediaQuery({ minWidth: 768 });

           const { value, setValue,open,setOpen,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,} = useContext(MyContext);

               const webik = NASTAVENIEWEBU[5]
                 const  web = NASTAVENIEWEBU[0]

  return (
    <>
 
    <div className='w-full h-fit  gap-2 grid grid-rows-[40px_2fr_fit] md:grid-rows-[none]
    md:grid-cols-[20%_auto_15%] 
    xl:flex 
    xl:gap-0
    md:mb-6
    
    '>
  <div className='h-full xl:hidden md:order-3 '></div>

  <div className='w-full  flex  justify-start  md:order-2  relative'>

  <div className='h-fit  flex  flex-col relative  w-full    '>

  <div className='w-fit flex  relative'>


    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'>  {textmain}.</span>

    <div className=' text-sivaTmava absolute top-0 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({premenna})</div>
      </div>

    <div className={`w-full  pt-4 md:pt-0 text-[13px] text-sivaTmava md:text-[16px] md:max-w-full lg:max-w-full  xl:pr-5 ${spinom}`}>{takolenmo}</div>
    
  </div>


  <div className={`hidden absolute  h-fit w-[200px] ${typ}  xl:flex cursor-pointer`}>

    <Specialnyotvor
    textmaly = {textmaly}
onMouseLeave = {onMouseLeave}
 onMouseEnter = {onMouseEnter}
 ciara = {ciara}
 klik = {onClick}
 podnienkakliknutia = {podmienkaii33}

 referenciaiii = {referencia2}
    ></Specialnyotvor>

 
  </div>

  </div>


  

<div
 className={`h-fit flex gap-2 items-start xl:hidden`}
>


  <Specialnyotvor
       textmaly = {textmaly}
onMouseLeave = {onMouseLeave}
 onMouseEnter = {onMouseEnter}
 ciara = {ciara}
 klik = {onClick}
 podnienkakliknutia = {podmienkaii33}

 referenciaiii = {referencia}
    ></Specialnyotvor>
</div>
  
</div>
<div className={`${toyp}`}>


{isMediumUp && 

<motion.div
initial = {{height:"0px"}}
animate = {{
  height:podmienka ? "400px" : "0px",
  marginBottom:podmienka ? "70px" : "0px"


}}
  transition={{ duration: 0.5 }}
  className="  w-full"
>

       <div className={`flex bg-white flex-1 flex-col  justify-between pr-4 pl-4  rounded-velky`}>

  <Vyber
  koko = "opacity-0"
  styl = "pt-1 pb-1 border-b border-gray-200 rounded-none"
    jeden = {webik.jeden}
  dva  =  {webik.dva}

  tri = {webik.tri}
  styri =  {webik.strir}



  ></Vyber>

<div className="custom-scroll" style={{height:"283px"}}>
{webik.skill.map((item,index) => 
  <Castnova 
  key={index}
  koko3 = "opacity-0"
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
<div className='h-[20pxw-full pb-4  pt-3'>
<Malytext
                rok = {web.rok}
                nazov = {web.nazov}
                studio =     {web.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>
</div>
 
</div>


</motion.div>}
</div>


   </>
  )
}

export default Textovacst2


