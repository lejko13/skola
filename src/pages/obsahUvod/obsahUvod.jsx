import { useRef, useState, useEffect,useContext } from "react";
import  './obsahUvod.css'

import Malytext from '../../komponenty/malytext/malytext'

import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'
import Karta from '../../komponenty/karta/karta'


import { useMediaQuery } from 'react-responsive';
import { MyContext, MyProvider } from "../../provider/provider1";
const ObsahUvod = ({nazovhalvny,studio,data,rok,veta1,veta2}) => {


     const isMdUp = useMediaQuery({ minWidth: 768 }); // md breakpoint
     const isBelowMd = useMediaQuery({ maxWidth: 767 });


     const { vyska,setvyska} = useContext(MyContext);

const referencia = useRef(null)
  useEffect(() => {
    if (!referencia.current) return; // kontrola ref pred pozorovaním

    const strazca = new ResizeObserver((pole) => {
      console.log(pole[0].contentRect.height); // výška prvého (a jediného) elementu
setvyska(pole[0].contentRect.height +165)
    });

    strazca.observe(referencia.current); // priraď div k strážcovi

    return () => strazca.disconnect(); // cleanup pri unmount
  }, []);

  return (

  <div
  ref={referencia}
   className="w-full h-fit flex flex-col  gap-3 justify-around  md:h-full">


   {isBelowMd && 
    <>
    {/* vrch */}
        <div className='w-full h-fit flex '>

          <div className='flex flex-col  leading-none w-fit'>
              <span className='text-[30vw] font-[550] text-whiteCustom md:text-[180px]'>
                {nazovhalvny}
              </span>
              <span className='text-[13vw] font-[550]  text-whiteCustom'>
                {studio}
              </span>
            </div>

          <div className='w-fit  pt-[2%]' >
              <div className=' h-fit w-full aspect-[9/9]  flex items-center justify-start  text-whiteCustom '>
                        <i class='bx bx-registered  text-[9vw]  prvy:text-[10vw] druhy:text-[11vw] sm:text-[12vw]' ></i>
                      </div>
          </div>

        </div>
    {/* vrch */}


    {/* textinfo */}
    <div className='w-full h-fit flex flex-col items-end md:items-start'>
    {data.map((item) => 
    <div className='text-[14px]  druhy:text-[16px] font-[500] text-whiteCustom cursor-pointer ' >{item}</div>
    )}
    </div>
    {/* textinfo */}


    {/* karta */}
    <div className='w-full  h-fit'>
    <Karta></Karta>
      
    </div>
    {/* karta */}


    {/* tocenveeta */}
    <div className='w-full  h-fit'>
    <Tocenaveta
    veta1 =   {veta1}
    veta2 = {veta2}
    ></Tocenaveta>
    </div>
    {/* tocenveeta */}

    {/* spodok */}
    <div className='w-full  h-fit'>
        <Malytext
          rok = {rok}
          nazov = {nazovhalvny}
          studio =     {studio}
          ></Malytext>

    </div>
    {/* spodok */}


    </>
    }






     

     
      
    </div>
  )
}

export default ObsahUvod



