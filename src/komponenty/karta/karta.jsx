import React from 'react'

const Karta = ({kartalmala}) => {
  return (
    <div className='w-full h-[160px] flex flex-row '>
        <div className='w-[125px] flex-shrink-0 h-full bg-white rounded-2xl flex p-[6px] '>
            <div className='w-full h-full bg-slate-500 rounded-2xl'></div>

        </div>
        <div 
     
        className='w-full h-full max-w-[200px] bg-white  rounded-2xl '></div>
      
    </div>
  )
}

export default Karta
