import { useState ,useEffect , useRef,useContext} from 'react'
import { motion } from 'framer-motion'

import Hoverrik from '../../komponenty/hoverrik/hoverrik'
import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'

import {MyProvider,MyContext} from '../../provider/provider1'




import { useMediaQuery } from 'react-responsive';

import Otvarac from '../../komponenty/otvarac/otvarac'

const Kliknutienaviac = ({podnienkakliknutia,podmienkaii,klik,ciara,klikamm,textmain,premenna,textmaly,onMouseEnter,onMouseLeave}) => {
  

    const { value, setValue,open,setOpen } = useContext(MyContext);



        const isMediumUp = useMediaQuery({ minWidth: 768 });

  return (

    <>
   
   <motion.div 

   animate = {{height:"fit-content"}}
   className='w-full h-fit  gap-2 grid grid-rows-[40px_2fr_fit] md:grid-rows-[none]
    md:grid-cols-[20%_auto_15%] 

    xl:grid-cols-[25%_auto_30%] 
    xl:gap-0
    md:pb-9
    '>
  <div className='h-full  md:order-3'></div>

  <div className='w-full  flex  justify-start  md:order-2'>

  <div className='h-fit relative  w-fit '>

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'>  {textmain}.</span>

    <div className=' text-sivaTmava absolute top-0 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({premenna})</div>
  </div>
  </div>



<Specialnyotvor
textmaly = {textmaly}
onMouseLeave = {onMouseLeave}
 onMouseEnter = {onMouseEnter}
 ciara = {ciara}
 klik = {klik}
 podnienkakliknutia = {podmienkaii}
></Specialnyotvor>

  
  
</motion.div>


{isMediumUp && <>

<motion.div

initial = {{height:"0px"}}
animate = {{
  height:podmienkaii ? "200px" : "0px"


}}
  transition={{ duration: 0.5 }}
className='bg-red-500 flex overflow-hidden'
>




</motion.div>

</>}

{/* {!isMediumUp && <Otvarac
podmienkaii = {podmienkaii}
>


  </Otvarac>} */}

 </>
  )
}

export default Kliknutienaviac
