import React from 'react'

const Kruzok = ({podmienka}) => {
  return (
    <div className={`transition-transform duration-300 ${podmienka ? "rotate-0" : "rotate-180"} w-6 h-6 rounded-full bg-pink-200 border border-sivaTmava flex justify-center items-center` }>
        <span  className=' flex justify-center items-center'  >
                {podmienka  ?  <i class='bx bx-minus' ></i>:     <i class='bx bx-plus'></i>      }
          

     

        </span>
   
    </div>
  )
}

export default Kruzok
