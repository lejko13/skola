import { useState } from "react"

import Nahlad from '../../komponenty/nahlad/nahlad'
// import {prace} from '../../zonznami/main' 
const Projektygrid = ({prace}) => {

    const [hovered, setHovered] = useState(null)

  console.log(prace);
  const projekty = prace.final
  
  return (
    <div className='h-[fit] w-full bg-pozadei grid md:grid-cols-2  gap-5 md:gap-1'>
      {projekty.map((item) => 
        <Nahlad
        nazov={item.nazov}
        rok = {item.rok}
        fotka = {item.fotka}
        
        onClick = {() => console.log("kar")}
        onMouseEnter = {() => setHovered(item.id)}
        onMouseLeave = {() => setHovered(null)}
        podmienka = {hovered === item.id}
        ></Nahlad>
      )}
    
    </div>
  )
}

export default Projektygrid
