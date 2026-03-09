import { useState ,useEffect , useRef,useContext} from 'react'

import { useParams } from "react-router-dom";
import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'
import { NASTAVENIEWEBU } from '../../zonznami/main';

import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'
import {MyProvider,MyContext} from '../../provider/provider1'


import Textovacast from '../../pages/textovacastempalte/textovacast'
import { useMediaQuery } from 'react-responsive';

import Skusenosti2 from '../../komponenty/skusenosti2/skusenosti2'
import Tamplatepage from '../../komponenty/tamplatepage/tamplatepage'

import Nazovhlavny from '../../komponenty/nazovhlavny/nazovhlavny'

import Templatetext from '../../komponenty/templatetext/templatetext'

import Swipercast222 from '../../komponenty//swipercast2/swipercast'

import Faq2 from '../../pages/faq2/faq2'


import Textovacst2 from '../../komponenty/textovacast2/textovacst2'
const Servisove = () => {



       const isMediumUp = useMediaQuery({ minWidth: 768 });

      const { id } = useParams();
    
const len = NASTAVENIEWEBU[1].servis
      const najdeny = NASTAVENIEWEBU[1].servis.items.find(item => item.id === id)

const len2 = NASTAVENIEWEBU[1].servis.items
      const takze = NASTAVENIEWEBU[4]
      const fajdeny = takze.firmy.filter(item => item.typ === najdeny.nazov)
  // console.log(len2[2].nazov);
  // console.log(najdeny.nazov);
//   console.log(najdeny);
  

  // SEO and content marketing
      


  console.log(najdeny);
  


        const feedback = NASTAVENIEWEBU[6]
// console.log(najdeny);
        
          const  web = NASTAVENIEWEBU[0]
       const skusnoeti = NASTAVENIEWEBU[5]
       const lentak = NASTAVENIEWEBU[8]
        const[foteckahover,setHoverfotecka] = useState(null)
      
              const { value, setValue,open,setOpen,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,skusam,setSkusam} = useContext(MyContext);

  return (
    <>

    <Tamplatepage
      nazovv = "Contact me"
    druhytext = "2026"
    >

    <div className='bg-pozadei pt-14 flex flex-col    pb-4 pl-4 pr-4 md:pr-9 md:pl-9'>

        <div className='w-full h-fit  pb-3 pt-9 md:pb-10 md:pt-[140px]'>
      <Nazovhlavny
      nazov = {najdeny.kratke}
      ></Nazovhlavny>
      </div>


<div className='flex flex-col   gap-6 md:gap-16'>
         <div className='flex flex-col gap-6 md:gap-16 h-fit  '>

        <Templatetext
  coaako = "Introduction"
              veta1 = {najdeny.cotoje}
              kokoko = "text-blackCustom"
        ></Templatetext>
    </div>

   



        <div className='w-full h-fit0 pb-4'>

<Faq2
dlzka = {najdeny.otazky.length}
otazky = {najdeny.otazky}
></Faq2>



        </div>

</div>




 <div className='w-full h-fit bg-black'>

      {najdeny.nazov != len2[2].nazov && 
         <Swipercast222
         textmaly ="spodoktext"
         tujetenmalytext = {fajdeny.length}
         textmain = "Another"
      //    malytextdole = {"kokokoko"}
         malytextdole = {najdeny.nazov}

      //    rok = {takze.rokOd}
      //    rok2 = {takze.rokDo}
          datarr = {fajdeny}
     
          ></Swipercast222>
      }
       



{/* <Textovacst2></Textovacst2> */}
        </div>

    </div>
   

     




    </Tamplatepage>
   
   
    </>
 
  )
}

export default Servisove

