/* import { useState } from 'react' */
import './App.scss'
import { Home } from './pages/Home/Index'
import { Logement } from './pages/Logement/Index'
import { APropos } from './pages/APropos/Index'
import { Routes, Route } from 'react-router-dom'
import { Error } from './components/Error/Error'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'


function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <div className="App">
      <Header />

      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logements/:accomodationNumber" element = {<Logement />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
