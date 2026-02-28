import React from 'react'

const Totojezoznamprojektov = ({text,text2,text3,text4,fotka,tyl}) => {
  return (
    <div className={` pl-4 pr-4 rounded-velky ${tyl} flex-shrink-0`}>
  <div className='w-full h-[56px] grid grid-cols-[56px_1fr_1fr] md:grid-cols-[56px_1fr_1fr_1fr] lg:grid-cols-[56px_1fr_1fr_1fr_1fr]'>
     <div className='bg-green-600 flex justify-center items-center p-1 flex-shrink-0' >
        <div className='w-full h-full bg-black'>{fotka}</div>
     </div>
    <div className='bg-green-100 flex items-start pl-10'>{text}</div>
    <div className='bg-green-400 flex items-start pl-10'>{text2}</div>
    <div className=' hidden md:flex md:bg-green-300  items-start pl-10'>{text3}</div>
    <div className=' hidden lg:flex md:bg-green-900 items-start pl-10'>{text4}</div>
  </div>
    </div>
  )
}

export default Totojezoznamprojektov
// w-full h-14 bg-whiteCustom rounded-velky flex items-center justify-between p-4 cursor-pointer