import { Header } from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import { RouterNM } from './components/RouterNM/RouterNM'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <div className="mainContainer">
            <RouterNM />
        </div>
        
        <Footer />

      </BrowserRouter>
    </div>
  )
}
export default App
