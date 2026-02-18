import { useState } from 'react'

import './App.css'

// KOMPONENTY
import Header from './komponenty/header/header'


// PAGES
import Uvod from './pages/uvod/uvod'
import Uvod2 from './pages/uvod2/uvod2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>

    <Uvod></Uvod>
    <Uvod></Uvod>
    <Uvod></Uvod>
    <Uvod></Uvod>
  
    </>
  )
}

export default App
