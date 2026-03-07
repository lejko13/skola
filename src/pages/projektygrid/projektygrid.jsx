import { useState ,useEffect , useRef,useContext} from 'react'
import { motion } from 'framer-motion'
import Nahlad from '../../komponenty/nahlad/nahlad'


import { useNavigate } from "react-router-dom";
import {MyProvider,MyContext} from '../../provider/provider1'
// import {prace} from '../../zonznami/main' 
const Projektygrid = ({prace}) => {

    const [hovered, setHovered] = useState(null)

  console.log(prace);
  const projekty = prace.final

  console.log(projekty);
  

  const navigate = useNavigate();


    const { render,setRender,value, setValue,open,setOpen,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,skusam,setSkusam,klik,setKlik} = useContext(MyContext);
  
  return (
    <motion.div 
    initial={{ y:20, opacity: 0,  }} // štartovací stav
    whileInView={{ y:0, opacity: 1  }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    className='h-[fit] w-full grid md:grid-cols-2  gap-5 md:gap-1'>
      {projekty.map((item) => 
        <Nahlad
        nazov={item.nazov}
        rok = {item.rok}
        fotka = {item.fotka}
        text = {item.text}
        tloo = "hidden"
        
      klikma={() => {navigate("/Projekty"),setRender(item.nazov),setKlik(item.nazov)}}
        onMouseEnter = {() => setHovered(item.id)}
        onMouseLeave = {() => setHovered(null)}
        podmienka = {hovered === item.id}
        ></Nahlad>
      )}
    
    </motion.div >
  )
}

export default Projektygrid
