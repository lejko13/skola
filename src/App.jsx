import { useState ,useEffect , useRef,useContext} from 'react'

import './App.css'

// KOMPONENTY
import Header from './komponenty/header/header'


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



  const projekty = NASTAVENIEWEBU[4]
  console.log(projekty.nazovlp);
  
   
      
        const { value, setValue,open,setOpen,obsahHeader,setObsahHeader } = useContext(MyContext);
    //  console.log(open);
     
  return (
    <>

          <div  class="scroll-container">
            <div className='relative bg-white'>

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


<div className='h-fit w-full bg-pink-400  pl-4 pr-4  md:pl-9  md:pr-9 flex pt-10 pb-10'>
<Swipercast
textmaly = {projekty.nazovlp}
rok = {projekty.rokOd}
rok2 = {projekty.rokDo}
></Swipercast>
</div>




{/* projekty celkovo */}


         <div className='w-full h-fit px-mobilKraj bg-pozadei md:px-pcKraj pb-14 '>
          <div className='bg-pozadei pt-8'>

            <Kliknutienaviac
            textmain = {nazovPRO}
            premenna = {pocetProjekt}
            textmaly = {text}
         
            podmienkaii = {open}

          //       klik={() => {

          //         if (isMediumUp) {
          //                 console.log("1");
          //                 setOpen(prev => (prev === nazovPRO ? false : nazovPRO))
          //                 return
          //         }
                   
      
          // }}
                // klik={() =>  setOpen(prev => (prev === nazovPRO ? false : nazovPRO))}
                klik={() =>  setOpen(prev => !prev)}
                  
    

            ciara = {hover === nazovPRO}

            onMouseEnter = {() => {
              if (isMediumUp) {
                setHover(nazovPRO)
              }

            }}
            onMouseLeave = {() => {
              if (isMediumUp) {
                   setHover(null)
              }
            }}
            ></Kliknutienaviac>
          </div>




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


<div className='h-fit w-full bg-pozadei pl-4 pr-4 md:pl-9 md:pr-9 pt-9 pb-9 md:pt-11 md:pb-11'>

  <Faq></Faq>
</div>




{!isMediumUp &&  
<Otvarac
podmienkaii = {open}
></Otvarac>}
          
      </div>
         <Footer></Footer>
          </div>


       



   
  
    </>
  )
}

export default App
