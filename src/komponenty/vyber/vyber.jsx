import React from 'react'

const Vyber = ({styl,fotkaa,koko,koko3,jeden,dva,tri,styri,llao}) => {
  return (
    <div className={`w-full h-[50px]
        ${styl}
    
     flex-shrink-0 grid grid-cols-[50px_1fr_auto_1fr] cursor-pointer
      prvy:grid-cols-[50px_1fr_auto_1fr_auto_1fr] md:grid-cols-[50px_1fr_auto_1fr_auto_1fr_auto_1fr]
      md:h-[14]
      rounded-[11px] overflow-hidden
      `}>
      <div className={` flex justify-center items-center ${koko}`}>
       <img src={fotkaa} className='h-[70%] w-[70%] ' alt="" /> 
      </div>
      
      <div className={` flex 
      ${llao}
        justify-start pl-3 items-center text-[15px]`}>{jeden}</div>


<div className={`${koko3} hidden prvy:flex  w-[1px]   h-[100%]  items-center justify-center`}>
        <div className='h-[70%] w-[1px] bg-gray-300'></div>
     </div>

      
      <div className='  flex justify-start pl-3 items-center text-[15px] text-sivaTmava'>{dva}</div>




       <div className={`${koko3} hidden prvy:flex  w-[1px]   h-[100%]  items-center justify-center`}>
        <div className='h-[70%] w-[1px] bg-gray-300'></div>
     </div>

      <div className='
      hidden prvy:flex
     justify-start pl-3 items-center text-[15px] text-sivaTmava'>{tri}</div>

     <div className={`${koko3} hidden md:flex  w-[1px]   h-[100%]  items-center justify-center`}>
        <div className='h-[70%] w-[1px] bg-gray-300'></div>
     </div>
      <div className='
      hidden md:flex
        justify-start pl-3 items-center text-[15px] text-sivaTmava'>{styri}</div>
    </div>
  )
}

export default Vyber
