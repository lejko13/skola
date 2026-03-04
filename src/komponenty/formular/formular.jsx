import React, { useState } from "react";
import { NASTAVENIEWEBU } from '../../zonznami/main'
import Inputik from '../../komponenty/input/inputik'
import Malytext from '../../komponenty/malytext/malytext'
import Logo from "../LOGO/LOGO";
const Formular = () => {

  const web2 = NASTAVENIEWEBU[7]
  const web1 = NASTAVENIEWEBU[0]

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // tu sa "odosiela"
  }

  return (
    <div className='h-[fit] w-full bg-whiteCustom p-5 rounded-velky'>
      <div className='w-full h-full flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>

          {/* <div className='flex h-full w-full'>
            <div className='flex flex-col leading-[0.9]'>
              <span className='text-[35px] font-[550] text-blackCustom md:text-[40px]'>
                {web1.nazov}
              </span>
            
            </div>
            <div className='w-fit pt-[1%]'>
              <div className='h-fit w-full aspect-[9/9] flex items-center justify-start text-blackCustom'>
                <i className='bx bx-registered text-[20px] md:text-[20px]'></i>
              </div>
            </div>
          </div> */}
             <Logo
             styel = {{fontSize:"22PX"}}
     text = {web1.logo}
    // onMouseEnter = {() => setHover(NASTAVENIEWEBU[0].logo)}
    //       onMouseLeave = {() => setHover(null)}
    //  hodnota = {hover === NASTAVENIEWEBU[0].logo}
   
     ></Logo>


          <span className='text-[13px] leading-tight font-[400] md:text-[13px] text-sivaTmava'>{web2.text}</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Inputik
            textik="Your Name"
            tuu="Enter your name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Inputik
            textik="Email"
            tuu="Enter your email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Inputik
            textik="Message"
            tuu="Enter your message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="h-14 bg-black text-white font-semibold rounded-velky"
          >
            {web2.btn}
          </button>
        </form>
        <div className="h-fit w-full">

             <Malytext
                rok = {web1.rok}
                nazov = {web1.nazov}
                studio =     {web1.studio}
                color = "md:flex md:justify-end  md:h-full md:items-end  "
                ></Malytext>


        </div>
      </div>
    </div>
  )
}

export default Formular