import React from 'react'
import  './obsahUvod.css'

import Malytext from '../../komponenty/malytext/malytext'

import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'
const ObsahUvod = ({nazovhalvny,studio,data,rok,veta1,veta2}) => {
  return (
  <div className="w-full h-full flex  justify-around bg-pink-300">

<div className='bg-black w-full h-1'></div>
<div className='bg-black w-full h-1' ></div>



     {/* <div className=' grid [grid-template-rows:1fr_1fr] bg-slate-300 gap-6 w-full'> */}
      {/* <div className='bg-purple-500 flex w-full'> */}
        {/* <div className='flex flex-col bg-slate-400 leading-none w-full'>
          <span className='text-[20vw] font-[550] text-whiteCustom'>
            {nazovhalvny}
          </span>
          <span className='text-[13vw] font-[550]  text-whiteCustom'>
            {studio}
          </span>


 

        </div> */}
          {/* <div className='w-full bg-gray-800 pt-4' > */}
          {/* <div className='bg-red-500 h-fit w-full aspect-[9/9]  flex items-center justify-start  text-whiteCustom '>
                    <i class='bx bx-registered  text-[40px]' ></i>
                  </div> */}
          {/* </div> */}
                

      
      {/* </div> */}
      {/* <div className=' flex flex-col items-end justify-center gap-2 bg-slate-900'> */}
{data.map((item) => 
<div className='text-15px font-[500] text-whiteCustom cursor-pointer text-[16px]' >{item}</div>
)}

      {/* </div> */}

     {/* </div> */}
     {/* <div className='bg-green-500 flex justify-end flex-col gap-3'>
      <div className='w-full h-[200px] bg-slate-200'></div> */}
{/* <Tocenaveta
veta1 = {veta1}
veta2 = {veta2}

></Tocenaveta> */}

      {/* <Malytext
      rok = {rok}
      nazov = {nazovhalvny}
      studio =     {studio}
      ></Malytext> */}
     {/* </div> */}
     
      
    </div>
  )
}

export default ObsahUvod
