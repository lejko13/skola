import React from 'react'

import { useMediaQuery } from 'react-responsive';

const Btnnafiltera = ({onClick,klik,onMouseEnter,onMouseLeave,nazov,styl,podmienka,referencai}) => {

        const isMediumUp = useMediaQuery({ minWidth: 768 });

  return (

    <div
    onClick={onClick}
    ref={referencai}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
     className={` ${styl} w-full h-14 rounded-velky flex items-center justify-between pr-4 pl-4 `}>
        <span>    {nazov}</span>
     <div className='w-fit h-fit flex gap-1'>
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 ${
klik ? "bg-red-500" : podmienka ? "bg-red-500" : "bg-pozadei"
}`}
            ></div>

            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 ${
               klik ? 'bg-orange-500'  : podmienka ?   'bg-orange-500' : 'bg-pozadei'
            }`}
            ></div>
            
            <div
             className={`w-2 h-2 rounded-full transition-colors duration-400 ${
                klik ? 'bg-green-500'  : podmienka ?   'bg-green-500' : 'bg-pozadei'
   
            }`}
            ></div>

          </div>

    </div>
  )
}

export default Btnnafiltera
