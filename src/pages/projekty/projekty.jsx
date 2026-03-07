import { useState ,useEffect , useRef,useContext} from 'react'
import Tamplatepage from '../../komponenty/tamplatepage/tamplatepage'

import Projektygrid from '../../pages/projektygrid/projektygrid'
import { NASTAVENIEWEBU } from '../../zonznami/main'

import { motion } from 'framer-motion'
import Nahlad from '../../komponenty/nahlad/nahlad'
import Btnnaotvoreniea from '../../komponenty/btnnaotvoreniea/btnnaotvoreniea'
import Kliknutienaviac from '../kliknutienaviac/kliknutienaviac'

import Malytext from '../../komponenty/malytext/malytext'

import { useNavigate } from "react-router-dom";

import {MyProvider,MyContext} from '../../provider/provider1'
const Projekty = () => {


  const[otovram,setOtvrama] = useState(false)


  const navigate = useNavigate();


  const web = NASTAVENIEWEBU[9]
  const web22 = NASTAVENIEWEBU[4]
const web9 = NASTAVENIEWEBU[0]

  const { klik,setKlik,value, setValue,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,skusam,setSkusam,render,setRender,} = useContext(MyContext);


      const [hovered, setHovered] = useState(null)

      console.log(render);


      console.log(web22.firmy);
      
      const ok = render

      const spravnePole = web22.firmy.filter(item => item.typ === render)

      console.log(spravnePole);
      

      const finla = web.kategorie[4].nazov

      console.log(finla);
      console.log(render);
      console.log(web.kategorie);
      

      const referencia200 = useRef(null)
      const referencia201 = useRef(null)
      const referencia202 = useRef(null)

      const referenciiii = useRef(false)

      useEffect(() => {
  const handleClick = (e) => {
    if (referencia200.current && !referencia200.current.contains(e.target) && referencia201.current && 
    !referencia201.current.contains(e.target) && referencia202.current && !referencia202.current.contains(e.target)
    ) {
      setOtvrama(false);
    }
  };

  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);


const funkcia = (parameter) => {
  navigate(`/Detail/${parameter}`);
};
      
  return (
<div className='pt-14'>
  <div className='w-full h-fit bg-pozadei px-mobilKraj md:px-pcKraj flex flex-col  pt-10 pb-10'>
<Kliknutienaviac
referenciaiii = {referencia200}
            textmain = {web.nazov}
            premenna = {web22.firmy.length}
            textmaly = {web.textmaly}

            klik = {() => setOtvrama(prev => !prev)}
         
            podmienkaii = {otovram}
ciara = {hovered === 69}
            typp = "hidden md:flex"

oop = "hidden"
            onMouseEnter = {() =>  setHovered(69)}
            onMouseLeave = {() =>  setHovered(null)}


></Kliknutienaviac>

<div className='w-full grid md:grid-cols-2 h-fit pb-1 md:pb-1'>
  <Btnnaotvoreniea

  nazov="Category"
  rok ="2056"

  open = {otovram}
  setOpen = {setOtvrama}
  referencia = {referencia201}
  referencia2 = {referencia202}
  
  ></Btnnaotvoreniea>

  <div className="h-[fit]   w-full hidden md:flex">

    <div className="h-14 w-full hidden md:flex items-end justify-end">
      <Malytext
                rok = {web9.rok}
                nazov = {web9.nazov}
                studio =     {web9.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>

    </div>

  </div>
</div>
<div className='w-full h-fit bg-red-300'>

</div>
<motion.div 
    initial={{ y:20, opacity: 0,  }} // štartovací stav
    whileInView={{ y:0, opacity: 1  }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    className='h-[fit] w-full grid md:grid-cols-2  gap-5 md:gap-1'>

{render ===  finla &&  
<>
{web22.firmy.map((item) => 

        <Nahlad

    klikma = {() => funkcia(item.id)}


        nazov={item.nazov}
        rok = {item.typ}
              typ = {item.rok}
        fotka = {item.fotka}
        text = {item.text}
        
        onClick = {() => console.log("kar")}
        onMouseEnter = {() => setHovered(item.firma)}
        onMouseLeave = {() => setHovered(null)}
        podmienka = {hovered === item.firma}
        ></Nahlad>)}
</>

}
      
      {spravnePole.map((item) => 

        <Nahlad
          klikma = {() => funkcia(item.id)}
        nazov={item.nazov}
        rok = {item.typ}
        typ = {item.rok}
        fotka = {item.fotka}
        text = {item.text}
        
        onClick = {() => console.log("kar")}
        onMouseEnter = {() => setHovered(item.firma)}
        onMouseLeave = {() => setHovered(null)}
        podmienka = {hovered === item.firma}
        ></Nahlad>
      )}
    
    </motion.div >


  </div>
</div>
    // <Tamplatepage>


    // </Tamplatepage>
  
  )
}

export default Projekty
