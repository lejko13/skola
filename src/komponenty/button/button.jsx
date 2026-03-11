import React from 'react'
import { useNavigate } from "react-router-dom";
const Button = ({text,onClick}) => {


      const navigate = useNavigate();
      
   const gotoKontakt = () => {
    navigate("/Kontakt"); // naviguje na stránku /Kontakt
  };
  return (
    <div
            onClick = {() => gotoKontakt()}
     className='w-fit bg-black h-7 text-whiteCustom flex items-center gap-5 pl-3 pr-3 rounded-xl cursor-pointer'>
     <span className='text-[12px]'>{text}</span> 
     <span className='w-2 h-2  rounded-full bg-whiteCustom'></span>
    </div>
  )
}

export default Button
