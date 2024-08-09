import React from 'react'
import './About.css'
const About = () => {
  let handelWhat = ()=>{
    window.open('https://wa.me/03345451838','_blank');
  }
  let handelCv = ()=>{
     let link = document.createElement('a');
     link.href = '/cv1.pdf';
     link.download = 'cv1.pdf';
     link.click();
  }
  return (
   <>
  <section className=' container about' id='about'>
      <div className="main">
          <img src="/assets/hero/hero2.jpeg" alt="" />
          <div className="about-text">
            <h1 className='head1'>About Me</h1>
            <h3 className='head3'>Frentend Web Developer</h3>
            <p className='para1'>Hello, my name is [Amir Hassan], and I am a frontend web 
              developer with one year of professional experience.
              <br />
              <span className='span1'>Experience :  </span>
            Over the past year, I have honed my skills in creating dynamic and user-friendly websites. My journey in the world of web development started with a six-month internship, where I gained hands-on experience and worked on various projects.
            <br />
            <span className='span1'>Internship : </span>
            During my internship, I was responsible for developing user-friendly websites that focused on enhancing the user experience. This opportunity allowed me to apply my knowledge of HTML, CSS, JavaScript, and frameworks like React.js to real-world projects.

            </p>
            <button type='button' className='btn1' onClick={handelWhat}>Let's Talk</button>
            <button type='button' className='cv' onClick={handelCv}>My Cv </button>
            
          </div>
      </div>
  </section>
   </>
  )
}

export default About
