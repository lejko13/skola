import React from 'react'

const Kartaskisenosti = ({cislodoel,malecislo,vrchnytext,spodnytext}) => {
  return (
    <div className='h-fit w-full  flex flex-col gap-1'>
        <div className='h-[90px] w-full bg-whiteCustom rounded-velky  flex items-center justify-between p-4'>
            <div className='w-[70px] h-[70px]  text-[36px] flex justify-center items-center font-medium'>
              {cislodoel}
            </div>
            <div className='w-[60px] h-[60px]  text-[10px] flex justify-end  text-sivaTmava'>
              {malecislo}</div>


        </div>
        <div className='h-[230px] w-full bg-whiteCustom  rounded-velky  p-4 flex flex-col'>

          <div className="text-[15px] h-[fit] w-full  justify-end items-end flex" >
            <span className=' w-[150px] text-right '>    {vrchnytext}</span></div>
          <div className='flex-1 '></div>
          <div className="text-[12px] h-[fit] w-full flex text-sivaTmava">{spodnytext}</div>
        </div>
      
    </div>
  )
}

export default  Kartaskisenosti
