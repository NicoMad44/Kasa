import { useState } from 'react'
import './App.css'
import KasaLOGO from './assets/KasaLOGO.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1><img src={KasaLOGO} alt="logo de Kasa" /></h1>
  )
}

export default App
