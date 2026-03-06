import React from 'react'
import Logo from '../LOGO/LOGO'



import { NASTAVENIEWEBU } from '../../zonznami/main'

const web = NASTAVENIEWEBU[0]
const webik = NASTAVENIEWEBU[8]
const Clovekoo = () => {
  return (
    <div className='w-full h-fit  flex flex-col '>

        <div className=' h-fit leading-none pb-4'>
    <span className='text-black text-[45px] font-[550]'>{webik.hodnotenei}</span>
    <span className='text-sivaTmava text-[13px]'>/5</span>

        </div>
  
      <span className='text-[13px]  w-[200px] text-sivaTmava mb-2'>
        <span>  We’ve delivere </span>
        <span className='text-blackCustom'>56+ projects</span>
        <span> that help companies generate real results.</span>
     
        </span>

<div className='mb-2'>
        <Logo
             styel = {{fontSize:"22PX"}}
     text = {web.logo}
    // onMouseEnter = {() => setHover(NASTAVENIEWEBU[0].logo)}
    //       onMouseLeave = {() => setHover(null)}
    //  hodnota = {hover === NASTAVENIEWEBU[0].logo}
   
     ></Logo>

</div>
       

     <div className='w-full h-fit relative flex flex-col pb-5 md:flex-col lg:flex-row  dalsi:flex-row gap-5' >

        <div className='w-[140px] h-[45px] relative'>

        <div className='
        border-2 border-gray-300
        h-[45px] w-[45px] bg-pink-950 pm rounded-xl absolute overflow-hidden flex items-center justify-center'>
              <img src={webik.tvar2} alt="" className="w-full h-full object-cover" />
        </div>

        <div className='
                border-2 border-gray-300
        h-[45px] w-[45px] left-[25px] bg-pink-500  z-10 rounded-xl absolute overflow-hidden flex items-center justify-center'>
             <img src={webik.tvar1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className='
                border-2 border-gray-300
        h-[45px] w-[45px] left-[50px] bg-blue-500  z-20 rounded-xl absolute overflow-hidden flex items-center justify-center' >
            <img src={webik.tvar3} alt="" className="w-full h-full object-cover" />
        </div>
     <div className="
             border-2 border-gray-300
     h-[45px] w-[45px] left-[75px] bg-green-500 z-30 rounded-xl absolute overflow-hidden flex items-center justify-center">
            <img src={webik.tvar4} alt="" className="w-full h-full object-cover" />
    </div>

      <div className='
              border-2 border-gray-300
      h-[45px] w-[45px] left-[100px] bg-blue-500  z-40 rounded-xl absolute overflow-hidden flex items-center justify-center'>
           <div className='w-full h-full bg-black flex items-center justify-center'>
            <span className='text-white text-[11px]'>{webik.cislo}+</span>
           </div>
      </div>



        </div>

        <div className=' w-fit flex flex-col gap-1 relative h-[fit]'>
            <div className='text-yellow-500 text-[12px]'>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
            </div>
            <span className='text-[12px]'>
              <span> Trusted by</span>
              <span className='text-sivaTmava'>   clients worldwide</span>
           
              </span>
        </div>

     </div>




     <div   className="h-14 bg-black text-white font-semibold rounded-velky flex items-center justify-center">
        {webik.texte}
     </div>


    </div>
  )
}

export default Clovekoo
