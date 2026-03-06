import React from 'react'

import { useParams } from "react-router-dom";

const Servisove = () => {

      const { id } = useParams();
      console.log(id);
      
  return (
    <>
       <div className='h-[900px] bg-slate-500 w-full pt-14'>
         ID stránky: {id}
    </div>
       <div className='h-[900px] bg-slate-500 w-full pt-14'>
         ID stránky: {id}
    </div>
    </>
 
  )
}

export default Servisove
