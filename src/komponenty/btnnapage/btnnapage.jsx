import React from 'react'

const Btnnapage = ({co,info}) => {
  return (
    <div className='w-full
border-t border-sivaTmava
     h-14  flex md:grid md:grid-cols-[30%_70%] lg:grid-cols-[40%_60%] xl:grid-cols-[50%_50%]'>
        <div className='hidden md:flex '></div>
        <div className=' w-full flex items-center justify-between'>  
            <span className='text-[12px] md:text-[14px] text-sivaTmava'>    {co}</span>
            <span className='text-[16px] text-blackCustom '>    {info}</span>
            
            </div>


    </div>
  )
}

export default Btnnapage
