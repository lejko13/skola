import React from 'react'
import Kliknutienaviac from '../../pages/kliknutienaviac/kliknutienaviac'

import { useParams } from "react-router-dom";
import { NASTAVENIEWEBU } from '../../zonznami/main';
import { motion } from 'framer-motion'
import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'
import Tamplatepage from '../../komponenty/tamplatepage/tamplatepage'
import Btnnapage from '../../komponenty/btnnapage/btnnapage'
import Fotkastranka from '../../komponenty/fotkastranka/fotkastranka'
import Specialnyotvor from '../../komponenty/specialnyotvor/specialnyotvor'
import Komponetnnadetail from '../../komponenty/komponetnnadetail/komponetnnadetail'

import Templatetext from '../../komponenty/templatetext/templatetext'

import Nazovhlavny from '../../komponenty/nazovhlavny/nazovhlavny'

import Swipercast from '../../pages/swipercast/swipercast'

import Swipercast222 from '../../komponenty/swipercast2/swipercast'

import { useNavigate } from "react-router-dom";
const Stranka = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const mapovanie = NASTAVENIEWEBU[4]
  const najdeny = NASTAVENIEWEBU[4].firmy

  const filtrovany = najdeny.find(item => item.id === id)
const filtrovany2 = najdeny.filter(item => item.id !== id)

  console.log(filtrovany);
  


    const goToDetail = (id) => {
    navigate(`/Detail/${id}`);
  };


  return (

    <Tamplatepage
    nazovv = "Contact me"
    druhytext = "2026"
    >
    <div className='bg-pozadei pt-14 flex flex-col  pb-4 pl-4 pr-4 md:pr-9 md:pl-9'>
        <div className='w-full h-fit  pb-3 pt-9 md:pb-10 md:pt-[140px]'>
          <Nazovhlavny
           nazov = {filtrovany.nazov}
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
  coaako = "Introduction"
              veta1 = {filtrovany.otom}
              kokoko = "text-blackCustom"
        ></Templatetext>

</div>
      

        <div className='w-full h-fit '>
{mapovanie.strukturaDetail.map((item,index) => 
<Btnnapage

co = {item.co}
 info={filtrovany.strukturaDetail2[index].co}
></Btnnapage>

)}



        </div>

        <div className='w-full h-fit'>

          <motion.div
            initial={{ y:20, opacity: 0,  }} // štartovací stav
    whileInView={{ y:0, opacity: 1  }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    className='h-[fit] w-full grid md:grid-cols-2  gap-5 md:gap-1'>


      {filtrovany.prodkutove.slice(0, 2).map((item,index) =>
      <Fotkastranka 
      key={index}
      fotka = {item.fotka}
      tex = {item.kar}
      ></Fotkastranka>
      )}

    </motion.div>
          
        </div>

         <Templatetext
           coaako = "Challenges"
              veta1 = {filtrovany.otom2}
        ></Templatetext>


        <div className='w-full h-fit flex flex-col gap-1'>

             {filtrovany.prodkutove.slice(3).map((item,index) =>
            //  <div className='h-[200px] w-full bg-red-950'></div>
      <Fotkastranka 
            fotka = {item.fotka}
 
      ></Fotkastranka>
      )}

        </div>

          <Templatetext
                 coaako = "Final thoughts"
              veta1 = {filtrovany.otom3}
        ></Templatetext>
 
        <div className='w-full h-fit bg-black'>
          <Swipercast222
          textmain ="Another"
          datarr = {filtrovany2}
          tujetenmalytext = {filtrovany2.length}
          malytextdole = {filtrovany.typ}
     
          ></Swipercast222>


        </div>
</div> 
          {/* ID je: {filtrovany} */}
    </div>
    </Tamplatepage>
  )
}

export default Stranka


