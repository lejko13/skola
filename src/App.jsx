import { useState ,useEffect , useRef,useContext} from 'react'

import './App.css'

// KOMPONENTY
import Header from './komponenty/header/header'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
// PAGES
import Uvod from './pages/uvod/uvod'
import Uvod2 from './pages/uvod2/uvod2'
import ObsahUvod from './pages/obsahUvod/obsahUvod'
import Klienty from './pages/klienty/klienty'

import Projektygrid from './pages/projektygrid/projektygrid'
import Textovacast from './pages/textovacastempalte/textovacast'
import Kliknutienaviac from './pages/kliknutienaviac/kliknutienaviac'

import Footer from './pages/footer/footer'

import Faq from './pages/faq/faq'
//PROVIDER
import {MyProvider,MyContext} from './provider/provider1'
import Celokservis from './komponenty/celokservis/celokservis'
import {NASTAVENIEWEBU} from './zonznami/main'

import { useMediaQuery } from 'react-responsive';


import Otvarac from './komponenty/otvarac/otvarac'
import Swipercast from './pages/swipercast/swipercast'
import Skusenostii from './komponenty/skusenostii/skusenostii'


import Vyber from './komponenty/vyber/vyber'

import Textovacst2 from './komponenty/textovacast2/textovacst2'

import Feedback from './komponenty/feedback/feedback'

import Formular from './komponenty/formular/formular'

import Skusenosti2 from './komponenty/skusenosti2/skusenosti2'

import Malytext from './komponenty/malytext/malytext'
import Castnova from './komponenty/castNova/castnova'
import { log } from 'three/src/nodes/math/MathNode.js'
function App() {
  
  const [count, setCount] = useState(0)
  const[nastavenia,setNastaveni] = useState(0)




  const scrollRef = useRef([]);

  
        const callback = (entries) => {
      entries.forEach(entry => {
        if (entry[0]) {
          console.log("Element vo viewporte!");
        }
      });
    };

    const callback2 = (entries) => {

    if (entries[0]) {
      
    }
    }

const options = { threshold: 0.1 };

  useEffect(() => {
    const sledovanie = new IntersectionObserver(callback, options);

    // pridanie každého elementu do observera
    scrollRef.current.forEach(item => {
      if (item) 
        sledovanie.observe(item);
    });

    return () => sledovanie.disconnect();
  }, []);





    const isMediumUp = useMediaQuery({ minWidth: 768 });
    const[hover,setHover] = useState(null)
    const[klikam,setKliam] = useState(null)

    const SLOVO = useMediaQuery({ minWidth: 380 });
  // servis

  const prepocet  = NASTAVENIEWEBU[1].servis.items.length
  const nazov = NASTAVENIEWEBU[1].servis.nazov
   // servis

  //  projekty
  const nazovP = NASTAVENIEWEBU[2].projekty
  const nazovPRO = NASTAVENIEWEBU[2].projekty.nazov
  const pocetProjekt = NASTAVENIEWEBU[2].projekty.final.length
  //  projekty
  const text = NASTAVENIEWEBU[1].servis.text
  const  web = NASTAVENIEWEBU[0]

const web2 = NASTAVENIEWEBU[2]
  const skusnoeti = NASTAVENIEWEBU[5]
  const skusloo = skusnoeti.nazov


  const projekty = NASTAVENIEWEBU[4]
  console.log(projekty.nazovlp);
  

  const feedback = NASTAVENIEWEBU[6]
  console.log(feedback);
  
    const  web3232 = NASTAVENIEWEBU[2]
   

    const webik = NASTAVENIEWEBU[5]
      
        const { value, setValue,open,setOpen,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,skusam,setSkusam} = useContext(MyContext);
    //  console.log(open);


    const[foteckahover,setHoverfotecka] = useState(null)
     



 

// const { ref, entry } = useInView({ threshold: [0, 0.6] })
// const inView = entry?.intersectionRatio > 0.6

  return (
    <>

          <div  class="scroll-container">
            <div className='relative bg-white'>
   <div className="w-full h-[50px] fixed bottom-0 z-50 bg-pozadei-/30 backdrop-blur-sm" 
     style={{ WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))", maskImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))" }}>
</div>

        <Header></Header>



{/* uvodnapage */}
       {/* <div className='relative w-full'> */}
        <div className='absolute pt-14   pl-1 pr-1    h-fit  w-full md:h-[100vh]'>
          <div className='w-full    rounded-3xl overflow-hidden  flex p-3 pt-12  pb-12 md:p-8 md:items-center md:pt-0 md:pb-0' >  
            <ObsahUvod
            nazovhalvny = {web.nazov}
            sluzby = {web.sluzby}
            studio = {web.studio}
            data = {web.sluzby}
            rok = {web.rok}
            veta1 = {web.veta1}
            veta2 = {web.veta2}


            
            ></ObsahUvod>


          </div>
        </div>

       {/* </div> */}
              {/* <span className='z-30  text-pink-500 pt-16 '  >kokokoko</span> */}
                <Uvod></Uvod>
{/* uvodnapage */}


<div className='h-fit w-full bg-pozadei  pl-4 pr-4  md:pl-7  md:pr-7 flex pt-10 pb-10 overflow-hidden'>
  
<motion.div 

    initial={{ y: -100, opacity: 0, scale: 0.9 }} // štartovací stav
  whileInView={{ y: 0, opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{ duration: 0.7 }}

className={`h-fit w-full bg-pink-500  flex  `}>


      <Swipercast
      textmaly = {projekty.nazovlp}
      rok = {projekty.rokOd}
      rok2 = {projekty.rokDo}
      ></Swipercast>
</motion.div >
  
</div>




{/* projekty celkovo */}
{/* bg-gradient-to-b from-[#F0F0F0] to-blackCustom */}

         <div className='w-full h-fit px-mobilKraj   bg-pozadei md:px-pcKraj pb-14 '>
          <motion.div 
           initial={{ y:90, opacity: 0,  }} // štartovací stav
    whileInView={{ y:0, opacity: 1  }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.2 }}
          className=' pt-8'>

            <Kliknutienaviac
            textmain = {web3232.halvny}
            premenna = {pocetProjekt}
            textmaly = {NASTAVENIEWEBU[2].text}
         
            podmienkaii = {open === "projekt"}

          //       klik={() => {

          //         if (isMediumUp) {
          //                 console.log("1");
          //                 setOpen(prev => (prev === nazovPRO ? false : nazovPRO))
          //                 return
          //         }
                   
      
          // }}
                // klik={() =>  setOpen(prev => (prev === nazovPRO ? false : nazovPRO))}
                // klik={() =>  { 
                //    setOpen("projekt"), 
                  
                //   setOpen2(true),setCotamje("projekty")}}

                klik={() =>{ 
                  setCotamje("projekty"),
                  setOpen( prev => (prev === "projekt" ? null : "projekt"))}}
                  
    

            ciara = {hover === nazovPRO}

            onMouseEnter = {() => {
              if (isMediumUp) {
                setHover(nazovPRO)
                setCotamje("projekty")
              }
         
            }}
            onMouseLeave = {() => {
              if (isMediumUp) {
                   setHover(null)
              }
            }}
            ></Kliknutienaviac>
          </motion.div>




          <Projektygrid
          prace = {nazovP}
          >
            

          </Projektygrid>



         </div>
{/* projekty celkovo */}     

{/* servis */}


<div 
      ref={el => scrollRef.current[1] = el}
      className='w-full h-fit px-mobilKraj bg-blackCustom md:px-pcKraj'>
        {/* <Klienty></Klienty> */}
      </div>







<div className='w-full h-[fit] bg-blackCustom gap-2 px-mobilKraj md:px-pcKraj flex flex-col md:gap-4 pt-10 pb-10'>
         <Textovacast
            textmain = {nazov}
            premenna = {prepocet}
            textmaly = {text}
         ></Textovacast>

         <div className='h-fit bg-blackCustom w-full'>
          <Celokservis></Celokservis>
         </div>



</div>

<div className='relative'>


</div>
{/* servis */}

{/* bg-gradient-to-b from-[#F0F0F0] to-blackCustom */}
<div className='bg-gradient-to-b  bg-pozadei w-full h-[fit] pl-4 pr-4 md:pr-9 md:pl-9 pt-9 pb-9 md:pt-10 md:pb-10'>
  <div className='w-full h-fit'>
     {/* <Kliknutienaviac
            textmain = {skusnoeti.nazov}
            premenna = {skusnoeti.rok}
            textmaly = {skusnoeti.plusko}
         
            podmienkaii = {open}
            ></Kliknutienaviac> */}

            <Textovacst2
textmain ={ SLOVO ? skusnoeti.nazov : "Ability"} 
premenna = {skusnoeti.rok}
textmaly = {skusnoeti.plusko}
textelll = {skusnoeti.tak}
takolenmo = {skusnoeti.tak}
klokolo = {skusnoeti.tak}

// podmienkaii = {open}


podmienka = {open === "ability"}
spinom = "hidden xl:flex xl:w-[40%] "


onClick={() => {
  setSkusam(true),
  setOpen( prev => (prev === "ability" ? null : "ability")),console.log(open);
}}




// onClick = {() => {
//   if (isMediumUp) {
//      setDalsi("kokot")
//     setOpen(true),
//   setOpen2(true),
//      setCotamje("skusentosi")
//      console.log(open)
     
//      return
     
    
    
//   }
//   setOpen(true),
//   setOpen2(true),
//      setCotamje("skusentosi")

// }}
></Textovacst2>


  </div>

  <div className='w-full h-fit'>


    <Skusenostii
    veta1 = {skusnoeti.veta1}
    veta2 = {skusnoeti.veta2}
    data = {skusnoeti.projekty}

    fokta = {web.fotecka}
    podmienka={foteckahover === "1"}

    onMouseEnter  = {() => setHoverfotecka("1")}
  onMouseLeave = {() => setHoverfotecka(null)}

  text = {skusnoeti.texn}
  texticeko = {skusnoeti.textmaly}

  data32 = {skusnoeti.info}

    ></Skusenostii>


    <div className='hidden xl:flex w-full h-fit  pt-9'>


      <div className='flex bg-white flex-1 flex-col  justify-between pr-4 pl-4 rounded-velky'>

  <Vyber
  koko = "opacity-0"
  styl = "pt-1 pb-1 border-b border-gray-200 rounded-[0px]"
    jeden = {webik.jeden}
  dva  =  {webik.dva}

  tri = {webik.tri}
  styri =  {webik.strir}



  ></Vyber>

<div className="custom-scroll" style={{height:"300px"}}>
{webik.skill.map((item,index) => 
  <Castnova 
  key={index}
  sylik = {`${index % 2 === 0 ? "bg-pozadei" : "bg-white"} `}

  nazov = {item.nazov}
  fotkaa = {item.fotka}
    jeden = {item.nazov}
  dva  =  {item.skusenoti}

  tri = {item.htovop}
  styri =  {item.rok}

  ></Castnova>
)}

</div>
  <div className='w-full h-1  pt-2 pb-2 flex items-center justify-center'>
    <div className='w-full h-[1px] bg-gray-200'></div>
  </div>
<div className='h-[20pxw-full pb-4  pt-3'>
<Malytext
                rok = {web.rok}
                nazov = {web.nazov}
                studio =     {web.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>
</div>
 
</div>


    </div>
  </div>

   


</div>



<div className='bg-gradient-to-b  flex flex-col bg-blackCustom w-full h-[fit] pl-4 pr-4 md:pr-9 md:pl-9 pt-9 pb-9 md:pt-10 md:pb-10 gap-5'>
  <div className='w-full h-fit bg-purple-600'>


     <Textovacast
            textmain = {feedback.nazov}
            premenna = {feedback.rokod}
            znamienko = {"-"}
            premenna2 = {feedback.rokdo}
            textmaly = {"text"}
         ></Textovacast>
         
     


  </div>

  <div className='w-full h-fit bg-red-500 flex'>

    <div className='w-full h-fit flex bg-blackCustom'>

      {/* <Feedback></Feedback> */}
      <Skusenosti2
    veta1 = {skusnoeti.veta1}
    veta2 = {skusnoeti.veta2}
    data = {skusnoeti.projekty}

    fokta = {web.fotecka}
    podmienka={foteckahover === "1"}

    onMouseEnter  = {() => setHoverfotecka("1")}
  onMouseLeave = {() => setHoverfotecka(null)}

  text = {skusnoeti.texn}
  texticeko = {skusnoeti.textmaly}

  data32 = {skusnoeti.info}

    ></Skusenosti2>
      
    </div>


  </div>

</div>







<div className='h-fit w-full bg-pozadei pl-4 pr-4 md:pl-9 md:pr-9 pt-9 pb-9 md:pt-11 md:pb-11'>

  <Faq></Faq>
</div>



 





{!isMediumUp &&  
<Otvarac
podmienkaii = {skusam}
></Otvarac>}
          
      </div>

     
      <div className='w-full h-fit flex flex-col  bg-blackCustom'>

   
         <Footer
         nazovhalvny = {web.nazov}
         studio = {web.studio}


            rok = {web.rok}
                nazov = {web.nazov}
  


         ></Footer>
           </div>
          </div>


       



   
  
    </>
  )
}

export default App
