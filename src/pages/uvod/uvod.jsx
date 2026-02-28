import React, { useState, useRef, useEffect,useContext } from 'react';
import { GradFlow } from "gradflow";

import { useMediaQuery } from 'react-responsive';
import { MyContext, MyProvider } from "../../provider/provider1";


const Uvod = () => {
     const { vyska,setvyska } = useContext(MyContext);

       const isMdUp = useMediaQuery({ minWidth: 768 }); // md breakpoint
  return (
    <>

   
  <div 
   style={{ height: isMdUp ? undefined : vyska }} 
  className={`pt-14 w-full md:h-[100vh]  overflow-auto md:pl-1 md:pr-1 md:pb-1 bg-pozadei`}>
      <div className='w-full h-full bg-blackCustom  rounded-3xl overflow-hidden  '>

        {/* Text nad canvasom */}
     

        {/* GradFlow ako pozadie */}
        <GradFlow
          config={{
            color1: { r: 0, g: 0, b: 0 },
            color2: { r: 0, g: 0, b: 0 },
            color3: { r: 36, g: 36, b: 36 },
            speed: 0.9,
            scale: 2,
            type: 'smoke',
            noise: 0.18
          }}
          style={{
            position: 'absolute',
            display:"block",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
              zIndex: "-10px", 
          }}
        />
      </div>
    </div>




     </>


  );
};

export default Uvod;
