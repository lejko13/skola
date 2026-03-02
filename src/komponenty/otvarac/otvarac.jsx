import { useState ,useEffect , useRef,useContext} from 'react'
import { motion } from 'framer-motion'

const Otvarac = ({podmienkaii}) => {
  return (
    <motion.div

initial = {{height:"0px"}}
animate = {{
  height:podmienkaii ? "100px" : "0px"


}}
  transition={{ duration: 0.5 }}
className='bg-red-400 flex  bottom-0 fixed w-full  z-50 '
    >
      otovraca
    </motion.div>
  )
}

export default Otvarac
