import { useState ,useEffect , useRef,useContext} from 'react'

import { useMediaQuery } from 'react-responsive';

import { motion } from 'framer-motion'

import {MyProvider,MyContext} from '../../provider/provider1'
const Textovacst2 = ({podmienka,onClick,textmain,premenna,textmaly,klokolo,takolenmo,spinom,podmienkaii}) => {

          const isMediumUp = useMediaQuery({ minWidth: 768 });

           const { value, setValue,open,setOpen,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,} = useContext(MyContext);

  return (
    <>
 
    <div className='w-full h-fit  gap-2 grid grid-rows-[40px_2fr_fit] md:grid-rows-[none]
    md:grid-cols-[20%_auto_15%] 
    xl:flex 
    xl:gap-0
    mb-6
    
    '>
  <div className='h-full xl:hidden md:order-3 '></div>

  <div className='w-full  flex  justify-start  md:order-2 '>

  <div className='h-fit  flex  flex-col relative  w-full    '>

  <div className='w-fit flex  relative'>


    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-blackCustom'>  {textmain}.</span>

    <div className=' text-sivaTmava absolute top-0 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({premenna})</div>
      </div>

    <div className={`w-full  pt-4 md:pt-0 text-[13px] text-sivaTmava md:text-[16px] md:max-w-full lg:max-w-full  xl:pr-5 ${spinom}`}>{takolenmo}</div>
    
  </div>
  </div>


  <div
  onClick={onClick}
   className={`h-fit flex gap-2 items-start xl:hidden  pb-2  ${klokolo}`}>

    <div className='w-[19px] h-[19px] bg-whiteCustom rounded-full flex justify-center items-center text-[13px] xl:text-[16px] xl:w-[22px] 
    xl:h-[22px] ' 
    ><i class='bx bx-plus'></i></div>
<span className='text-blackCustom text-[13px]  xl:text-[16px] '>{textmaly}</span>
  </div>
  
</div>

{isMediumUp && 

<motion.div
initial = {{height:"0px"}}
animate = {{
  height:podmienka ? "400px" : "0px",
  marginBottom:podmienka ? "70px" : "0px"


}}
  transition={{ duration: 0.5 }}
  className='bg-pink-500  w-full'
>

</motion.div>}


   </>
  )
}

export default Textovacst2


