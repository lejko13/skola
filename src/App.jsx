import { useState ,useEffect , useRef} from 'react'

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

//PROVIDER
import {MyProvider} from './provider/provider1'
import Celokservis from './komponenty/celokservis/celokservis'
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

  return (
    <>
      <MyProvider>
          <div  class="scroll-container">
            <div className='relative bg-white'>
        <Header></Header>



{/* uvodnapage */}
       {/* <div className='relative w-full'> */}
        <div className='absolute pt-14   pl-1 pr-1 pb-1  h-[180vw] w-full md:h-[100vh]'>
          <div className='w-full h-full  rounded-2xl overflow-hidden  flex'>  
            <ObsahUvod></ObsahUvod>


          </div>
        </div>

       {/* </div> */}
              {/* <span className='z-30  text-pink-500 pt-16 '  >kokokoko</span> */}
                <Uvod></Uvod>
{/* uvodnapage */}



{/* klientypage */}
      <div 
      ref={el => scrollRef.current[0] = el}
      className='w-full h-fit px-mobilKraj bg-pink-600 md:px-pcKraj'>

         
        <Klienty></Klienty>
      </div>
{/* klientypage */}


{/* projekty celkovo */}


         <div className='w-full h-fit px-mobilKraj bg-pink-600 md:px-pcKraj'>
          <div>

            <Textovacast></Textovacast>
          </div>




          <Projektygrid></Projektygrid>



         </div>
{/* projekty celkovo */}     

{/* servis */}


<div 
      ref={el => scrollRef.current[1] = el}
      className='w-full h-fit px-mobilKraj bg-pink-600 md:px-pcKraj'>
        {/* <Klienty></Klienty> */}
      </div>






<div className='w-full h-[fit] bg-blackCustom  px-mobilKraj md:px-pcKraj'>
         <Textovacast></Textovacast>

         <div className='h-fit bg-green-300 w-full'>
          <Celokservis></Celokservis>
         </div>



</div>
{/* servis */}


<div className='h-[900px] w-full'></div>



      {/* <Uvod2></Uvod2> */}
{/* 
      <Uvod></Uvod>
      <Uvod2></Uvod2> */}
      </div>
          </div>
  </MyProvider>


   
  
    </>
  )
}

export default App
