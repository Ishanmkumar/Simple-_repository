import { useEffect, useRef } from 'react'
import React  from 'react'
import pdf from '../pdf/resume.pdf'
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings:["Welcome to my profile","My name is Ishan M Kumar","I'm a full stack developer","I'm a Android Developer"],
      typeSpeed:30,
      backSpeed:30,
      loop:true

    }

    const typed = new Typed(typedRef.current, options)
  
    return () => {
      typed.destroy
    }
  }, [])
  
  return (
    <>
    

      <div className="container home">
        <div className="left">
          <h1 ref={typedRef}>

          </h1>

          <a href={pdf} download="Ishan's resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
         </div>
  </div>
        
    </>
  )
}

export default Home
