import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
    <div id="myc">

    
     <div className="container contact">
        <h1>Contact Me</h1>
        <div className="contact-icon">
          {/* <div className="items"></div> */}
        
         <a href="" target='_blank' className="items"><FaInstagramSquare className='icon'/></a>
         <a href="" target='_blank' className="items"><FaFacebookSquare className='icon'/></a>
         <a href="mailto:noyaan911@gmail.com" target='_blank' className="items"><MdMarkEmailRead className='icon'/></a>
         <a href="https://github.com/amir-khan911" target='_blank' className="items"><FaSquareGithub  className='icon'/></a>
         
        </div>
     </div>
     </div>
    </>
  )
}

export default Contact
