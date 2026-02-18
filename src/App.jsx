import { useState } from 'react'

import './App.css'

// KOMPONENTY
import Header from './komponenty/header/header'


// PAGES
import Uvod from './pages/uvod/uvod'
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
