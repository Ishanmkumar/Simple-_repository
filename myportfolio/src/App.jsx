import react, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Certificates from './components/Certificates'
import Skills from './components/Skills'

import Contact from './components/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"

const App = ()=> {
  useEffect(() => {
    Aos.init();
    
   }, [])
  
  return (
    <>
     <Navbar/>
     <div className="container">
      <Home />
      <Certificates />
      <Skills />
      
      <Contact />
     </div>
    </>
  )
}

export default App
