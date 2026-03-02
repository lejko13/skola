import React, { createContext, useState } from "react";

// 1️⃣ Vytvoríme Context
export const MyContext = createContext(null);

// 2️⃣ Vytvoríme Provider komponent
export const MyProvider = ({ children }) => {

  const [value, setValue] = useState(false);



  const[otovorenie,setOtvorenie] = useState("")

  // pocitanie vysky
  const[vyska,setvyska] = useState("900px")


  const[open,setOpen] = useState(false)
  // const[otovranei,set]


  const[obsahHeader,setObsahHeader] = useState("")

  return (
    <MyContext.Provider value={{ value, setValue,otovorenie,setOtvorenie,vyska,setvyska,open,setOpen,obsahHeader,setObsahHeader }}>
      {children}
    </MyContext.Provider>
  );
};