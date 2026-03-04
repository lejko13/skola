import React from 'react'

import Malytext from '../../komponenty/malytext/malytext'
import {NASTAVENIEWEBU} from '../../zonznami/main'
import Hoverrik from '../../komponenty/hoverrik/hoverrik'

import Tumamtext from '../../komponenty/tumamtext/tumamtext'

import Tocenaveta from '../../komponenty/tocenaveta/tocenaveta'

import Totojemalytextl from '../../komponenty/totojemalytextl/totojemalytextl'

const Footer = ({nazovhalvny,studio,rok,nazov}) => {

  const web = NASTAVENIEWEBU[0]
  console.log(web);

  
  return (
    <>
    <div className='w-full h-fit bg-pozadei flex flex-col  gap-5 pl-4 pr-4 md:pl-9 md:pr-9 pt-9 pb-9 md:pt-11 md:pb-11 '>
      {/* <div className='h-fit w-full bg-red-500'>

        <Tocenaveta
        veta1 ={web.veta11}
        veta2 = {web.veta22}
        kokoko = "text-blackCustom"
      
        ></Tocenaveta>

        <div className='w-full bg-green-400 h-[200px]'>


          <span>{web.contect12}</span>
        </div>

        <Totojemalytextl
        text  = {web.textvetFooter}
        btnrext = {web.textFooert}

        ></Totojemalytextl>


      </div> */}
      
<div>
  <div className='h-fit grid-cols-2 md:grid-cols-[20%_20%_1fr]  grid w-full gap-5'>
        <div className=' '>
            <Tumamtext
          hore = "Navigation"
          data = {web.navigacia1}
          ></Tumamtext>


        </div>
        <div className=''>
          <Tumamtext
          hore = "Social"
            data = {web.navigacia2}
          ></Tumamtext>
        </div>


  <div className="hidden  w-full h-full   gap-1   flex-col items-start justify-end md:flex  md:h-full md:items-end leading-tight">

                <Hoverrik

              //   onMouseEnter={() => setHover(web.tel)}
              //     onMouseLeave={() => setHover(null)}

              //     podmienka = {hover === web.tel}
              textvoacas = {web.tel}
              prisposobujem2 = 'bg-blackCustom h-[2px]'
              prisposobujem = "text-[14px] md:text-[18px] xl:text-[21px] text-blackCustom"
              // onClick={() => openEmail()}


              ></Hoverrik>

              

                  <span 
                  // onClick={() => openEmail()}
                  //   onMouseEnter={() => setHover(3)}
                  // onMouseLeave={() => setHover(null)}
                  
                  className={`text-[23px] 
                cursor-pointer
                font-[550] underline 
                underline-offset-[6px]
                transition-all duration-300
            
                  
                    md:text-[25px] 
                    xl:text-[30px] 
                  md:underline-offset-[7px]`}>{web.email}</span>
              </div>
        



      </div>

</div>
      



      <div className='h-fit w-full flex lg:bg-pin gap-5 items-end mb-5 '>

         <div className=' flex h-full  w-full '>

              <div className='flex flex-col  leading-[0.9] '>
                  <span className='text-[29vw] font-[550] text-blackCustom  md:text-[130px] lg:text-[180px]'>
                    {nazovhalvny}
                  </span>
                  <span className='text-[18vw] font-[550]  text-blackCustom md:text-[50px] lg:text-[100px]'>
                    {studio}
                  </span>
                </div>

              <div className='w-fit  pt-[1%] ' >
                  <div className=' h-fit w-full aspect-[9/9]  flex items-center justify-start  text-blackCustom '>
                            <i class='bx bx-registered  text-[10vw]  md:text-[50px]  lg:text-[100px]' ></i>
                          </div>
              </div>

  
            </div>

        {/*  */}


      </div>
     
 <div className=" md:hidden w-full h-fit  flex gap-1  flex-col items-start justify-center  md:h-full md:items-start  leading-tight">

        <Hoverrik

      //   onMouseEnter={() => setHover(web.tel)}
      //     onMouseLeave={() => setHover(null)}

      //     podmienka = {hover === web.tel}
      textvoacas = {web.tel}
      prisposobujem2 = 'bg-blackCustom h-[2px]'
      prisposobujem = "text-[14px] md:text-[18px] xl:text-[21px] text-blackCustom"
      // onClick={() => openEmail()}


      ></Hoverrik>

      

          <span 
          // onClick={() => openEmail()}
          //   onMouseEnter={() => setHover(3)}
          // onMouseLeave={() => setHover(null)}
          
          className={`text-[23px] 
         cursor-pointer
        font-[550] underline 
        underline-offset-[6px]
        transition-all duration-300
    
          
            md:text-[25px] 
            xl:text-[30px] 
          md:underline-offset-[7px]`}>{web.email}</span>
      </div>

      
    </div>
    
<div className='

     h-[fit] w-full  flex flex-row  items-end gap-5   pl-4 pr-4 md:pl-9 md:pr-9 pt-9 pb-9 md:pt-11 md:pb-11 lg:flex-row'>


<div 
className='w-full h-full0 flex items-start  justify-end flex-col gap-2'>
  
  <div className='w-full bg-black flex flex-col gap-1  text-whiteCustom '>
           <span className='text-[13px] md:text-[20px]'>{web.footer1}</span>
            <span  className=' text-[13px]  md:text-[20px]'> {web.footer2}</span>

        </div>
       



       

        <div className='flex  items-center justify-center gap-2 text-[14px]'>
              <span className ="text-sivaTmava ">{web.foter}</span>
              <span className="h-[30px] w-[30px] rounded-full overflow-hidden flex">
                  <img src={web.fotecka} alt="" className="w-full h-full object-cover" />
              </span>
              <div className='w-fit flex gap-1  text-whiteCustom '>
                    <span className='text-[14px]'>{web.meno}</span>
                    <span className='text-[14px]'>{web.priezvisko}</span>

              </div>
            
        </div>

</div>

        <div className='w-full h-full flex items-end justify-end'>
           <Malytext
                rok = {rok}
                nazov = {nazov}
                studio =     {studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>

        </div>





      </div>
      
    </>
  )
}

export default Footer