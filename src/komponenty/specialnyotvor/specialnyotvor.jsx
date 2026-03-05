import React, { useRef, useEffect,useContext } from 'react'

import { MyContext, MyProvider } from "../../provider/provider1";
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import Kruzok from '../kruzok/kruzok'

const Specialnyotvor = ({referencia,klikamm,textmaly,podmienka,klik,onMouseEnter,onMouseLeave,hodnota,ciara,podnienkakliknutia}) => {


     const { value, setValue,open,setOpen,setOpen2 } = useContext(MyContext);

    const isMediumUp = useMediaQuery({ minWidth: 768 });

const myRef = useRef()

// useEffect(() => {

  
//   const handleClickOutside = (event) => {
//     if (isMediumUp) {

//     if (myRef.current && !myRef.current.contains(event.target)) {
//       setOpen(null); 
//       setOpen2(null)
 
//     }
      
//     }


//   };

//   document.addEventListener('click', handleClickOutside);
  
//   return () => {
//     document.removeEventListener('click', handleClickOutside);
//   };
// }, [isMediumUp]);



console.log(open);



  


  return (
    <div>
         <div className='h-fit flex gap-2 items-start  pb-6 '>
            <div 
            ref={myRef}
       
            onClick={klik}
       
            className='h-fit w-fit   flex gap-2 cursor-pointer'>

            <Kruzok
                podmienka = {podnienkakliknutia}
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}
                prisposobujem = "w-[21px] h-[21px] bg-blackCustom text-whiteCustom rounded-full flex justify-center items-center text-[13px] xl:text-[16px] xl:w-[23px] xl:h-[23px] border-0"
                rozemri = "md:text-[13px] text-[12px] xl:text-[15px]"
            ></Kruzok>

   
                <div className='flex flex-col items-start justify-center'>
                    <span 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave = {onMouseLeave}
                    className='text-blackCustom text-[13px]  xl:text-[16px] '>{textmaly}</span>


                            <motion.div
                        initial={{ width: "0%" }}
                            animate = {{width: ciara ? "100%" : "0%" }}
                            className='bg-blackCustom h-[1px]'
                            ></motion.div>

                </div>
            </div>

        </div>

      
    </div>
  )
}

export default Specialnyotvor
