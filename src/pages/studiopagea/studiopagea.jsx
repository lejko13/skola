import React, { useState } from 'react'
import Tamplatepage from '../../komponenty/tamplatepage/tamplatepage'

import Nazovhlavny from '../../komponenty/nazovhlavny/nazovhlavny'
import { NASTAVENIEWEBU } from '../../zonznami/main'
import Kartaskisenosti from '../../komponenty/kartaskisenosti/kartaskisenosti'

import Templatetext from '../../komponenty/templatetext/templatetext'

import Tusucisla from '../../komponenty/tusucisla/tusucisla'

import { useInView } from "react-intersection-observer"
import Kliknutienaviac from '../../pages/kliknutienaviac/kliknutienaviac'
import Projektygrid from '../../pages/projektygrid/projektygrid'
import { use } from 'react'
import { useMediaQuery } from 'react-responsive';

import { useNavigate } from "react-router-dom";
const Studiopagea = ({klik}) => {

    const isMediumUp = useMediaQuery({ minWidth: 768 });
    const navigate = useNavigate();

  const goToKontakt = () => {
    navigate("/Kontakt");
  };


  const skusnoeti = NASTAVENIEWEBU[5]
  const haldan = NASTAVENIEWEBU[10]
      const  web3232 = NASTAVENIEWEBU[2]

    const nazovP = NASTAVENIEWEBU[2].projekty
    //   const pocetProjekt = NASTAVENIEWEBU[2].projekty.final.length
    //    data = {skusnoeti.projekty}



     const { ref, entry } = useInView({ threshold: [0, 0.6] })



     const[hover,setHover] = useState(null)
  return (
    <Tamplatepage
       nazovv = "Contact"
    druhytext = "2026"
    >
          <div className='bg-pozadei pt-14 flex flex-col  pb-4 pl-4 pr-4 md:pr-9 md:pl-9'>


            <div className='w-full h-fit  pb-3 pt-9 md:pb-10 md:pt-[140px]'>
          <Nazovhlavny
           nazov = {haldan.nazov}
          ></Nazovhlavny>
             {/* <Kliknutienaviac
        // referenciaiii = {referencia2}
                    textmain = {filtrovany.nazov}
                    premenna = "llplp"
                    textmaly = {"View more"}
        ></Kliknutienaviac> */}


        </div>
        <div className='flex flex-col gap-6 md:gap-16'>
                <div>
                <Templatetext
                klik = {() => goToKontakt() }
                coaako = "Introduction"
                            veta1 = {haldan.text}
                            kokoko = "text-blackCustom"

                            onMouseEnter32 = {() => {
                              if (isMediumUp) {
                                setHover(2)
                              }
                            } }
                            onMouseLeave32 = {() => setHover(null)}
                            ciara = {hover === 2}
                        ></Templatetext>

                </div>



      
        <div 
                ref = {ref}
                className='
                mt-9
                w-full h-fit grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-5 md:grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-[1fr] md:h-fit'>

                {skusnoeti.info.map((item,index) => 
                {
                return(
                <div >
                <Tusucisla
                maxx = {item.cislo}

                text = {item.text}
                ></Tusucisla>
                </div>

                )
                }

                
                )}</div>


    
    <div className='pb-9'>

        <Kliknutienaviac

        typp = "opacity-0"
        premenna = {3}
             textmain = {web3232.halvny}
             
        ></Kliknutienaviac>
          <Projektygrid
          prace = {nazovP}
          >
            

          </Projektygrid>
    </div>





         </div>






          </div>

    </Tamplatepage>
  )
}

export default Studiopagea



{/*         
        <div className=' h-fit w-full bg-red-500 flex md:grid  gap-1  md:grid-cols-[1fr_1fr]'>
         
            <div className='bg-pink-500 flex flex-col gap-1' >

                
            {skusnoeti.projekty.map((item,index) => {
  console.log(item)
return (

<Kartaskisenosti
cislodoel = {item.pocet}
malecislo = {item.poradie}
vrchnytext = {item.done}
spodnytext = {item.done1}
></Kartaskisenosti>
)
}



)}

            </div>
               <div className='bg-green-300 flex flex-col gap-1'>

                 {skusnoeti.projekty.map((item,index) => {
  console.log(item)
return (

<Kartaskisenosti
cislodoel = {item.pocet}
malecislo = {item.poradie}
vrchnytext = {item.done}
spodnytext = {item.done1}
></Kartaskisenosti>
)
}



)}
                
               </div>
        </div> */}