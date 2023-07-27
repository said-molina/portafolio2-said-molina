
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <main className="text-gray-400 bg-indigo-950 body-font">
    <Navbar/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </main>
      
    </>
  )
}

export default App
