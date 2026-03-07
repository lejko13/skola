import React, { createContext, useState } from "react";

// 1️⃣ Vytvoríme Context
export const MyContext = createContext(null);

// 2️⃣ Vytvoríme Provider komponent
export const MyProvider = ({ children }) => {

  const [value, setValue] = useState(false);



  const[otovorenie,setOtvorenie] = useState("")

  // pocitanie vysky
  const[vyska,setvyska] = useState("900px")



  const[open,setOpen] = useState(null)
  const[open2,setOpen2] = useState(false)
  

  // const[otovranei,set]


  const[obsahHeader,setObsahHeader] = useState("")

  const[cotamje,setCotamje]  = useState("")




  const[dalsi,setDalsi] = useState("")


  const[skusam,setSkusam] = useState(null)


  const[render,setRender] = useState("")

  return (
    <MyContext.Provider value={{render,setRender,
      cotamje,setCotamje,dalsi,setDalsi,skusam,setSkusam,open2,setOpen2, value, setValue,otovorenie,setOtvorenie,vyska,setvyska,open,setOpen,obsahHeader,setObsahHeader }}>
      {children}
    </MyContext.Provider>
  );
};