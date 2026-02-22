import React, { useContext, useState } from "react";

import Servis from '../../komponenty/servis/servis'

import { MyContext, MyProvider } from "../../provider/provider1";

import {NASTAVENIEWEBU} from '../../zonznami/main'
const Celokservis = () => {

  const[hover,setHover] = useState(null)

       const { value, setValue ,otovorenie,setOtvorenie} = useContext(MyContext);

       const zoznam = NASTAVENIEWEBU[1].servis.items
      //  console.log(NASTAVENIEWEBU);
       
  return (
    <div className=" h-fit  flex flex-col gap-10 md:gap-16" >
     

  <div className='flex flex-col gap-1 h-fit xl:gap-7'>

   {zoznam.map((item) => {

    // console.log(item.vyhody);
    
  return (
    <Servis
      key={item.id}
      textovacastz={item.nazov}
      onClick={() => setOtvorenie(prev => prev === item.id ? 0 : item.id)}
      podmienka={otovorenie === item.id}
      pocet={item.cislo}
      textovacast1={item.nazov}
      spodnutext={item.info}
      data={item.vyhody}
    />
  );
})}


       
  </div>
        


<div className="w-full flex md:grid-cols-[20%_auto_60%]  md:grid   xl:grid-cols-[25%_160px_55%] ">
  <div className="w-25% h-full " ></div>

<button 
className={`border-0 focus:outline-none h-14 w-full ${hover === true ? "bg-sivaTmava" : "bg-whiteCustom"}
rounded-full text-[18px] transition-all duration-300 ease-in-out`}
onMouseEnter={() => setHover(true)}
onMouseLeave={() => setHover(false)}
>
      <span className={`${hover === true ? "text-whiteCustom" : "text-blackCustom"}`}>Get started</span>
</button>
  <div className="w-25% h-full" ></div>
</div>
    

    </div>
  )
}

export default Celokservis
// md:grid-cols-[20%_auto_15%] 
//   xl:grid-cols-[25%_auto_20%] 