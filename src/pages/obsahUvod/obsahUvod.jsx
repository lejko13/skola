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
setvyska(pole[0].contentRect.height +144)
    });

    strazca.observe(referencia.current); // priraď div k strážcovi

    return () => strazca.disconnect(); // cleanup pri unmount
  }, []);

  return (

  <div
  ref={referencia}
   className="w-full h-fit flex flex-col  gap-3 justify-around  md:h-full">

    {isMdUp && 
    <div className="w-full h-full  grid grid-rows-[1fr_1fr] gap-7">
      <div className="  grid grid-cols-[1fr_30%] gap-2 pl-7  pr-7">
        <div className="bg-pink-500  flex items-center justify-center  ">


           <div className='w-full bg-green-200 h-fit flex  gap-4'>

          <div className='flex flex-col bg-slate-400  w-fit items-end leading-[1.1]'>
              <span className='text-[17vw] font-[550] text-whiteCustom'>
                {nazovhalvny}
              </span>
              <span className='text-[6vw] font-[550]  text-whiteCustom'>
                {studio}
              </span>
              
              <Malytext
          rok = {rok}
          nazov = {nazovhalvny}
          studio =     {studio}
          ></Malytext>
            </div>

          <div className='w-fit bg-gray-800 pt-[2%]' >
              <div className='bg-red-500 h-fit w-full aspect-[9/9]  flex items-center justify-start  text-whiteCustom '>
                        <i class='bx bx-registered  text-[8vw] ' ></i>
                      </div>
          </div>

        </div>


        </div>
        <div className=" flex items-start justify-center bg-red-400 pt-6">
          <div className='w-full h-fit flex flex-col items-end md:items-start gap-2 bg-yellow-400'>
              {data.map((item) => 
              <div className='text-[14px]  druhy:text-[16px] font-[500] text-whiteCustom cursor-pointer ' >{item}</div>
              )}
              </div>

        </div>

      </div>


      <div className="bg-red-400  grid grid-cols-[1fr_30%] gap-2">
        
        <div className="bg-green-500 flex items-end">
          <div className="w-[500px] flex-shrink-0 bg-slate-300 flex items-end justify-center">
                    <Tocenaveta
                     className="text-[1.5vw]"
                    veta1 =   {veta1}
                    veta2 = {veta2}
                    ></Tocenaveta>

          </div>
          
    <div className="w-full bg-red-500">

    
    
           
        </div>

        </div>
        <div className="bg-green-500 flex items-end justify-center">


          

  <Karta

  ></Karta>
          
        </div>

   
        

      </div>
      </div>}

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
