import React from 'react'

const Ludiahodnotenie = ({fotka,meno,eamli,pica,lenno}) => {
  return (
    <div className={`h-[60px] w-full rounded-[12px] flex  ${pica} justify-between p-2 `}>
     
     <div className='w-fit flex gap-2'>
          <div className='w-[45px] h-full flex-shrink-0 overflow-hidden rounded-[10px] bg-green-500'>
              <img src={fotka} alt="" className="w-full h-full object-cover" />
          </div>

          <div className='w-fit h-[full] flex flex-col leading-tight justify-center'>
            <span className='text-[15px] font-[500] text-black'>{meno}</span>
            <span className='text-[12px] text-sivaTmava'>{eamli}</span>
          </div>
     </div>


     <div className='w-fit h-[45px] flex justify-center  items-end'>

      <div className=' w-full h-full leading-none  flex items-end gap-1 justify-end'>


    <span className='text-black text-[22px]  font-[500]'>{lenno}</span>

    <div className='h-full flex items-end justify-end'>
    <span className='text-sivaTmava text-[11px]'>/5</span>
    </div>


        </div>
     
     </div>
    </div>
  )
}

export default Ludiahodnotenie



// 755324/9132