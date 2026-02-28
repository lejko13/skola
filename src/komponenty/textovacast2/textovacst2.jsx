import React from 'react'

const Textovacst2 = ({textmain,premenna,textmaly}) => {
  return (
    <div className='w-full h-fit  gap-2 grid grid-rows-[40px_2fr_fit] md:grid-rows-[none]
    md:grid-cols-[20%_auto_15%] 
    xl:grid-cols-[25%_auto_20%] 
    xl:gap-0
    
    '>
  <div className='h-full  md:order-3'></div>

  <div className='w-full  flex  justify-start  md:order-2'>

  <div className='h-fit relative  w-fit '>

  
    <span className='text-[62px] font-[550] md:text-[99px] xl:text-[120px] text-whiteCustom'>  {textmain}.</span>

    <div className=' text-sivaTmava absolute top-0 right-0 text-[22px]  md:text-[31px] xl:text-[37px]'>({premenna})</div>
  </div>
  </div>


  <div className='h-fit flex gap-2 items-start  pb-2'>

    <div className='w-[19px] h-[19px] bg-whiteCustom rounded-full flex justify-center items-center text-[13px] xl:text-[16px] xl:w-[22px] 
    xl:h-[22px] ' 
    ><i class='bx bx-plus'></i></div>
<span className='text-whiteCustom text-[13px]  xl:text-[16px] '>{textmaly}</span>
  </div>
  
</div>
  )
}

export default Textovacst2
