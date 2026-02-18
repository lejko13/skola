import React, { createContext, useState } from "react";

// 1️⃣ Vytvoríme Context
export const MyContext = createContext(null);

// 2️⃣ Vytvoríme Provider komponent
export const MyProvider = ({ children }) => {

  const [value, setValue] = useState(false);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};