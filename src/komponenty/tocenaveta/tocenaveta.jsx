import React from 'react'

const Tocenaveta = ({veta1,veta2,className}) => {
  return (
    <div>
      <p
             className={`text-[500] [text-indent:50px] text-[15px] leading-tight ${className}`}>
 <span className='text-whiteCustom'>{veta1}</span>
 <span className='text-sivaTmava'> {veta2}</span>
</p>
    </div>
  )
}

export default Tocenaveta
