import React from 'react'

const Malytext = ({rok,nazov,studio}) => {
  return (
    <div className='text-sivaTmava text-[12px] flex gap-[3px]  items-center'>
      <i class='bx bx-copyright'></i>
       {rok}
       <span className='relative w-[45px] h-fit inline-block '>    
          <span> {nazov}  </span>
          <span className=' absolute text-1 top-0'>  <i class='bx bx-registered ' ></i></span>
         

          </span>
   
        {studio}
    </div>
  )
}

export default Malytext
