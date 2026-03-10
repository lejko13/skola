import React from 'react'

import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'
import Tocenaveta from '../tocenaveta/tocenaveta'
const Templatetext = ({klik,ciara,veta1,coaako,onMouseEnter32,onMouseLeave32}) => {
  return (

    <div className='w-full h-fit grid md:grid-cols-[30%_70%] lg:grid-cols-[40%_60%] xl:grid-cols-[50%_50%]'>
            <div className=''>
              <Specialnyotvor
              textmaly = {coaako}
              ciara = {ciara}
              onMouseEnter32 = {onMouseEnter32}
              onMouseLeave32 = {onMouseLeave32}
              klik = {klik}
               ></Specialnyotvor>
            </div>
            <div className=' flex'>
                <div className='w-full h-full  md:pr-9'>

                    <Tocenaveta
                    className = 'text-[19px]'
                    veta1 = {veta1}
                    kokoko = "text-blackCustom"
                    ></Tocenaveta>
              

                </div>

            </div>


        </div>
  
  )
}

export default Templatetext
