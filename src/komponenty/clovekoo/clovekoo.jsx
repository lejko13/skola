import React from 'react'
import Logo from '../LOGO/LOGO'



import { NASTAVENIEWEBU } from '../../zonznami/main'

const web = NASTAVENIEWEBU[0]
const webik = NASTAVENIEWEBU[8]
const Clovekoo = () => {
  return (
    <div className='w-full h-fit bg-slate-500 flex flex-col gap-3'>

        <div>
    <span>5</span>
    <span>/5</span>

        </div>
  
      <span className='text-[13px] bg-pink-700 w-[200px] text-sivaTmava'>We’ve delivered 56+ projects that help companies generate real results.</span>


       <Logo
             styel = {{fontSize:"22PX"}}
     text = {web.logo}
    // onMouseEnter = {() => setHover(NASTAVENIEWEBU[0].logo)}
    //       onMouseLeave = {() => setHover(null)}
    //  hodnota = {hover === NASTAVENIEWEBU[0].logo}
   
     ></Logo>

     <div className='w-full h-[45px] bg-red-600 relative flex gap-5' >

        <div className='w-[170px] h-full bg-blue-300 relative'>
        <div className='h-full w-[45px] bg-pink-950 rounded-md absolute'></div>
        <div className='h-full w-[45px] left-[20px] bg-pink-500  z-10 rounded-md absolute'></div>
        <div className='h-full w-[45px] left-[40px] bg-blue-500  z-20 rounded-md absolute'></div>
        <div className='h-full w-[45px] left-[60px] bg-green-500  z-30 rounded-md absolute'></div>
            <div className='h-full w-[45px] left-[80px] bg-blue-500  z-40 rounded-md absolute'></div>



        </div>

        <div className='bg-pink-400  w-fit flex flex-col gap-1'>
            <div className='text-yellow-500 text-[12px]'>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
            </div>
            <span className='text-[12px]'>Trusted by clients worldwide</span>
        </div>

     </div>




     <div   className="h-14 bg-black text-white font-semibold rounded-velky flex items-center justify-center">
        {webik.texte}
     </div>


    </div>
  )
}

export default Clovekoo
