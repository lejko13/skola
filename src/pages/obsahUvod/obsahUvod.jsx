import { useRef, useState, useEffect,useContext } from "react";
import  './obsahUvod.css'

import Malytext from '../../komponenty/malytext/malytext'

import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'
import Karta from '../../komponenty/karta/karta'


import { useMediaQuery } from 'react-responsive';
import { MyContext, MyProvider } from "../../provider/provider1";

import Hoverrik from '../../komponenty/hoverrik/hoverrik'
const ObsahUvod = ({nazovhalvny,studio,data,rok,veta1,veta2}) => {


     const isMdUp = useMediaQuery({ minWidth: 768 }); // md breakpoint
     const isBelowMd = useMediaQuery({ maxWidth: 767 });



     const krata = useMediaQuery({ maxWidth: 1280 });
     const dvojka = useMediaQuery({ minWidth: 1024 });
     


     const { vyska,setvyska} = useContext(MyContext);

const referencia = useRef(null)
  useEffect(() => {
    if (!referencia.current) return; // kontrola ref pred pozorovaním

    const strazca = new ResizeObserver((pole) => {
      // console.log(pole[0].contentRect.height); // výška prvého (a jediného) elementu
setvyska(pole[0].contentRect.height +165)
    });

    strazca.observe(referencia.current); // priraď div k strážcovi

    return () => strazca.disconnect(); // cleanup pri unmount
  }, []);

  const [hover,setHover] = useState(null)

  return (

  <div
  ref={referencia}
   className="w-full h-fit flex flex-col  gap-5 justify-around  md:h-full">


{isMdUp && (
  <div
    className="w-full   flex pt-16 pb-16 flex-col gap-6"
    style={{ height: `calc(100vh - 62px)` }}
  >

<div className="w-full h-full  flex">
  <div className="w-full h-full   gap-5 

  
  grid
    grid-cols-[1fr_30%] 
    ">
    
        <div className=' flex h-full   '>

              <div className='flex flex-col  leading-[0.9] '>
                  <span className='text-[19vw] font-[550] text-whiteCustom '>
                    {nazovhalvny}
                  </span>
                  <span className='text-[8vw] font-[550]  text-whiteCustom'>
                    {studio}
                  </span>
                </div>

              <div className='w-fit  pt-[1%] ' >
                  <div className=' h-fit w-full aspect-[9/9]  flex items-center justify-start  text-whiteCustom '>
                            <i class='bx bx-registered  text-[7vw]  ' ></i>
                          </div>
              </div>

            </div>

     

      <div className=" flex lg:items-center  items-end justify-end  ">
      <div className='md:w-fit lg:w-[340px] h-fit flex   flex-col items-end md:items-start gap-2  '>
        {data.map((item) => 
        <Hoverrik
        onMouseEnter = {() => setHover(item)}
        onMouseLeave = {() => setHover(null)}
        podmienka = {hover === item}
        textvoacas = {item}
        prisposobujem = "text-whiteCustom"
          prisposobujem2 = "bg-whiteCustom"
        ></Hoverrik>
     
        )}
        </div>

      </div>
  </div>



</div>

<div className="w-full h-full
 flex 
 flex-row 
xl:grid
 xl:grid-cols-[1fr_30%]
 xl:gap-5
 ">

      <div className=" w-full h-full

       flex flex-col justify-between
       xl:w-auto
       xl:h-auto
    
    
       
        xl:flex-row  
        xl:justify-end 
        xl:items-end
        
        ">

          <div>
             <Karta
             pokus = {"xl:hidden"}
      
          ></Karta>

          </div>


          <div className=" w-full">
            <span className=" flex items-end pl-[280px] xl:pl-[0px] xl:pr-[250px]">
                <Tocenaveta
            veta1 =   {veta1}
            veta2 = {veta2}
            className = "md:text-[19px] text-[22px] "
            ></Tocenaveta>

            </span>
           
        </div>

        <span className="">
          <Malytext
                rok = {rok}
                nazov = {nazovhalvny}
                studio =     {studio}
                ></Malytext>

        </span>


        </div>

      <div className="

      hidden xl:flex  xl:justify-end xl:items-end
    ">
        <Karta
           style={{ alignItems: "center" ,justifyContent:"end"}}
        
      
          ></Karta>



      </div>

    </div>


          </div>
)}

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



