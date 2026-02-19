import React from 'react'

const Logo = ({text,cislo,styldalsie}) => {
  return (
    <div className='flex w-fit  h-full items-center justify-center  bg-white z-40' >

<div className='text-base16  font-fontmedium text-blackCustom relative cursor-pointer'> {text}

        <div
          style={styldalsie}
         className=" text-blackCustom absolute -top-0 -right-3 text-xs"><i class='bx bx-registered' ></i></div>
</div>
       
      
    </div>
  )
}

export default Logo
