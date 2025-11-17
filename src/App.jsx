import { Header } from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import { RouterNM } from './components/RouterNM/RouterNM'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="mainContainer">
            <RouterNM />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App
