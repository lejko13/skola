import React from 'react'
import Kliknutienaviac from '../../pages/kliknutienaviac/kliknutienaviac'

import { useParams } from "react-router-dom";
import { NASTAVENIEWEBU } from '../../zonznami/main';

import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'

import Komponetnnadetail from '../../komponenty/komponetnnadetail/komponetnnadetail'
const Stranka = () => {
  const { id } = useParams();

  const najdeny = NASTAVENIEWEBU[4].firmy

  const filtrovany = najdeny.find(item => item.id === id)

  console.log(filtrovany);
  
  return (
    <div className='bg-red-500 pt-14 flex flex-col  pl-4 pr-4 md:pr-9 md:pl-9'>
        <div className='w-full h-full bg-green-300  pt-10'>
             <Kliknutienaviac
        // referenciaiii = {referencia2}
                    textmain = {filtrovany.nazov}
                    premenna = "llplp"
                    textmaly = {"View more"}
        ></Kliknutienaviac>


        </div>
        <div className='w-full h-fit bg-red-950 grid md:grid-cols-[30%_70%] lg:grid-cols-[40%_60%] xl:grid-cols-[50%_50%]'>
            <div className='bg-green-400'></div>
            <div className='bg-green-900 flex'>
                <div className='w-full h-full bg-red-300'>

                    <Tocenaveta
                    className = 'text-[19px]'
                    veta1 = {filtrovany.otom}
                    ></Tocenaveta>
              

                </div>

            </div>


        </div>

        <div className='w-full h-[400px] bg-red-300'>

        </div>
       
          {/* ID je: {filtrovany} */}
    </div>
  )
}

export default Stranka
