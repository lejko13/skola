import React from 'react'
import { motion } from 'framer-motion'
const Takemalena = ({podienka}) => {
  return (
    <motion.div 
     transition={{ duration: 0.4 }}
    className={`w-full h-full bg-pink-600 ${podienka  ? "opacity-100" : "opacity-0"}  ${podienka  ? "absolute" : "flex" }`}>
      
    </motion.div >
  )
}

export default Takemalena
