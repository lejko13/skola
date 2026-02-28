import React, { useState } from 'react'

const Kruzok = ({ prisposobujem,podmienka, onClick,onMouseEnter,onMouseLeave,rozemri }) => {
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    if (disabled) return

    setDisabled(true)
    onClick()

    setTimeout(() => {
      setDisabled(false)
    }, 500)
  }

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        transition-transform duration-300
        ${podmienka ? "rotate-0" : "rotate-180"}
        w-8 h-8 rounded-full text-whiteCustom
        border border-sivaTmava
        flex justify-center items-center
        cursor-pointer
        ${prisposobujem}
      
      `}
    >
      <span className={`flex justify-center items-center  ${rozemri}`}>
        {podmienka ? 
          <i className='bx bx-minus'></i> :
          <i className='bx bx-plus'></i>
        }
      </span>
    </div>
  )
}

export default Kruzok