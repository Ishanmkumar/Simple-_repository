import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

const Contact = () => {
  return (
    <>
    <div className="container contact">
      <h1>CONTACT ME</h1>

       <div className="container-icon"
        data-aos="zoom-in-up"
          data-aos-duration="1000"
       >
      <a href="https://instagram.com/may_be_ishan" target="_blank" className="items">
        <FaSquareInstagram className='icons'/>
        </a>
        <a href="https://github.com/Ishanmkumar" target="_blank" className="items">
        <FaGithub className='icons'/>
        </a>
        <a href="https://www.linkedin.com/in/ishanmkumar01" target="_blank" className="items">
        <FaLinkedin className='icons'/>
        </a>
        <a href="mailto:ishanmk2001@gmail.com" target="_blank" className="items">
        <IoMail className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact