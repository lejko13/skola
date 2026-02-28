import React from 'react'

import Button from '../button/button'
import {NASTAVENIEWEBU} from '../../zonznami/main'


const Karta = ({kartalmala,style,pokus}) => {

  const web = NASTAVENIEWEBU[0]
  return (
    <div 
    style={style}
    className={`w-full h-[160px] flex flex-row ${pokus}`}>
        <div className='w-[130px] flex-shrink-0 h-full bg-white rounded-2xl flex p-[6px] '>
            <div className='w-full h-full bg-slate-500 rounded-2xl overflow-hidden  flex '>
              <img src="./profile.png" className='object-cover w-full h-full' alt="" />
            </div>

        </div>
        <div 
     
        className='w-full h-full max-w-[210px] bg-white  rounded-2xl p-[22px] pt-[24px] pb-[24px]'>


          <div className='w-full h-full  rounded-2xl  flex  flex-col justify-between'>


            <div className='flex flex-col leading-[1.3] font-[550]'>
                <span className='text-[14px]  text-[550] text-blackCustom'>{web.pozicia}</span>
       
              <span className='relative w-fit  font-[500] h-fit pr-3  text-sivaTmava text-[11px] flex gap-[3px]  items-center'>   
                <span className='font-[500] '>at</span> 
          <span className='font-[500] '> {web.nazov} </span>
          <span className='font-[500] '> {web.studio} </span>

          {/* <span className=' absolute text-1 top-0 right-0 font-[550] ' > 
             <i
             style={{ fontWeight: 550 }}

           class='bx bx-registered ' ></i></span> */}
         

          </span>

            </div>

          

         
            <div className='flex flex-row gap-2 leading-[1] font-[550] relative'>

            <span className='text-[22px]'>{web.meno}</span>
            <span  className='text-[22px]'>{web.priezvisko}</span>

            <div className=' text-sivaTmava absolute text-[11px] right-3'>({web.rok})</div>

            </div>

             <Button
    text = {web.btn}
 ></Button>





          </div>

        </div>
      
    </div>
  )
}

export default Karta
