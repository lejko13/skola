import React, { useContext } from "react";

import Servis from '../../komponenty/servis/servis'

import { MyContext, MyProvider } from "../../provider/provider1";
const Celokservis = () => {

       const { value, setValue ,otovorenie,setOtvorenie} = useContext(MyContext);
  return (
    <div className="bg-red-500" >
     

  <div className='flex flex-col gap-1 h-fit'>
        <Servis
        textovacastz = "Web design and development"
        pocet="100"
  onClick={() => setOtvorenie(prev => (prev === 1 ? 0 : 1))}
        podmienka = {otovorenie === 1}
        ></Servis>
        <Servis
        textovacastz = "Web design and development"
        pocet="100"
         onClick={() => setOtvorenie(prev => (prev === 2 ? 0 : 2))}
        podmienka = {otovorenie === 2}
        ></Servis>
        <Servis
        textovacastz = "Web design and development"
        pocet="100"
         onClick={() => setOtvorenie(prev => (prev === 3 ? 0 : 3))}
        podmienka = {otovorenie === 3}
        ></Servis>
  </div>
        
        {/* <Servis></Servis>
        <Servis></Servis> */}
              


    <button className="border-0 focus:outline-none h-16 w-full bg-slate-400 rounded-velky"></button>
    </div>
  )
}

export default Celokservis
