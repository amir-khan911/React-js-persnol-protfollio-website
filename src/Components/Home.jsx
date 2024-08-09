import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
// import hero from './data/hero.json'
import Typed from 'typed.js';
const Home = () => {
    const imageStyle = {
        filter:'contrast(120%) brightness(110%)',
    };
    const typedRef = useRef(null);
    useEffect(() => {
      const options = {
        strings: [
          "Welcome to my profile",
          "My Name is Amir Hassan",
          "I'm  frentend (React js)  developer",
          // "Androide Developer (React Native)",
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      return () => {
        typed.destroy();
      };
    }, []);
   
  return (
   <>
    <div className="container home ">
      <div className="left">
        <h1 ref={typedRef}>

        </h1>
       
        <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-4">Dwonload Resumi</a>
      </div>
      <div className="right">
       <div className="image">
        {/* <img src={`/assets/${hero.imgSrc}`} alt="" /> */}
        <img src="/assets/hero/hero2.jpeg" alt="" style={imageStyle} className='sha'/>
       </div>
      </div>
    </div>
   </>
  )
}

export default Home
