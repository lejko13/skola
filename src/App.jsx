import { useState ,useEffect} from 'react'

import './App.css'

// KOMPONENTY
import Header from './komponenty/header/header'


// PAGES
import Uvod from './pages/uvod/uvod'
import Uvod2 from './pages/uvod2/uvod2'

//PROVIDER
import {MyProvider} from './provider/provider1'
function App() {
  
  const [count, setCount] = useState(0)
  const[nastavenia,setNastaveni] = useState(0)


  // console.log(vyska);
// useEffect(() => {
//   const handleResize = () => {
//     const vyska = window.innerHeight;
//     setNastaveni(vyska);
//     console.log("Resize viewportu:", vyska);
//   };

//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, [])
useEffect(() => {
  const funkcia = () => {
    const vyska = window.innerHeight;
    setNastaveni(vyska);
    console.log("Aktuálna výška viewportu:", nastavenia); // použijeme vyska, nie state
  }

  window.addEventListener("resize", funkcia);

  return () => window.removeEventListener("resize", funkcia);
}, []);
  
  return (
    <>
      <MyProvider>
          <div  class="scroll-container">
        <Header></Header>

      <Uvod></Uvod>
      <Uvod2></Uvod2>
      <Uvod></Uvod>
      <Uvod2></Uvod2>
          </div>
  </MyProvider>


   
  
    </>
  )
}

export default App
