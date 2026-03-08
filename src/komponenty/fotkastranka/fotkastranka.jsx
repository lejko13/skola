import React from 'react'

const Fotkastranka = ({llll,fotka,tex}) => {
  return (
   <div className={`w-full h-fit rounded-velky aspect-[14/9] flex bg-slate-50 items-center justify-center overflow-hidden ${llll}`}>
<div className='w-full h-full flex items-center justify-center'>
<img 
    className='w-[60%] h-[60%] object-contain'
    src={fotka}
    alt=""
  />


</div>
 
</div>
  )
}

export default Fotkastranka
