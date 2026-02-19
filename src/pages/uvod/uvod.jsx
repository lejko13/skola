import React from 'react';
import { GradFlow } from "gradflow";

const Uvod = () => {
  return (
    <>

   
    <div className=' pt-14 h-[160vw] w-full md:h-[100vh] overflow-auto md:  pl-1 pr-1 pb-1 bg-white  '>
      <div className='w-full h-full bg-pink-300  rounded-2xl overflow-hidden  '>

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
