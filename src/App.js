import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Capatibilities from './components/MyCapabilities'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero />
      <About />
      <Portfolio></Portfolio>
      <Capatibilities />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
