import { useState ,useEffect , useRef,useContext} from 'react'
import { motion } from 'framer-motion'

import { NASTAVENIEWEBU } from "../../zonznami/main";
import { div } from "three/src/nodes/math/OperatorNode.js";
import Btnnafiltera from '../../komponenty/btnnafiltera/btnnafiltera'

import {MyProvider,MyContext} from '../../provider/provider1'
const Btnnaotvoreniea = ({nazov,rok,open,setOpen,referencia,referencia2}) => {
  // const[open,setOpen] = useState(false)

  const web = NASTAVENIEWEBU[9]

  // const referencia = useRef(null)
  // const referencia2 = useRef(null)

  const[cislo,setCislo] = useState(null)
  


// useEffect(() => {
//   const handleClick = (e) => {
//     if (referencia.current && !referencia.current.contains(e.target) &&
//          referencia2.current && !referencia2.current.contains(e.target )) {
//       setOpen(false);
//     }
//   };

//   document.addEventListener("click", handleClick);

//   return () => {
//     document.removeEventListener("click", handleClick);
//   };
// }, []);

const[hover,setHover] = useState(1)
    
    //  console.log(klik);
     

        const { value, setValue,obsahHeader,setObsahHeader,open2,setOpen2 ,cotamje,setCotamje,dalsi,setDalsi,skusam,setSkusam,render,setRender,klik,setKlik} = useContext(MyContext);
         //  console.log(open);
//  const[klik,setKlik] = useState(web.kategorie[4].nazov)


 console.log(render);

// useEffect(() => {
//   setRender(web.kategorie[4].nazov)
// },[])
 

  return (
    <motion.div
    ref={referencia}

    onClick={() => setOpen(prev => !prev) }
    initial={{height:"54px"}}
    animate={{minHeight:"54px" ,
      height:open ? "fit-content" : "54px"
     }}

       transition={{ duration: 0.4 }}

    
    className=' w-full bg-white rounded-velky flex items-center justify-between pl-4  pr-4  cursor-pointer'>

<div className="w-full h-full    flex flex-col  justify-between overflow-hidden">
  <div className="w-full h-fit    flex items-start pt-4 pb-4 justify-between">
    <div className='flex gap-3 items-center'>
              <span className='text-[15px] font-[500] text-blackCustom'>  {nazov}</span>
              <span className='text-[11px] font-[500] text-sivaTmava'>/{klik}</span>
          </div>


            <span className='text-[20px] font-[500] flex items-center justify-center'>
              <i 
             style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease"
              }}
              class='bx bx-chevron-down'
              ></i></span>

  </div>
<div className="h-fit w-full bg-white pb-4">

  {web.kategorie.map((item,index) => {

 
    return(

      <Btnnafiltera
  referencai = {referencia2}
onClick = {() => {setKlik(item.id),setKlik(item.nazov),setRender(item.nazov)}}
  onMouseEnter = {() => setHover(item.id)}
  onMouseLeave = {() => setHover(null)}
  styl = {`${index % 2 === 0 ? "bg-pozadei" : "bg-white"}`}
  nazov = {item.nazov}
podmienka = {hover === item.id}
klik = {klik === item.nazov}
  ></Btnnafiltera>

    )
  }


  
  )}
  
</div>
    {/* {web.kategorie.map((prev,index) => 

  <Btnnafiltera
  nazov = {prev.nazov}
  ></Btnnafiltera>
  )} */}

</div>


      

         
 
    </motion.div>
  )
}

export default Btnnaotvoreniea
