import React from 'react';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// import Aos from "aos";
// import "aos/dist/aos.css"
const App = () => {
  // useEffect(() => {
  //   Aos.init();
    
  //  }, [])
  
  return (
   <>
   <Navbar/>
  <div className="container">
    <Home/>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
  </div>

     {/* <BrowserRouter>
 <Navbar></Navbar>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/> }/>
       <Route path='/experience' element={ <Experience/>}/>
       <Route path='/skills' element={  <Skills/>}/>
       <Route path='/projects' element={<Projects/> }/>
       <Route path='/contact' element={ <Contact/> }/>

       </Routes>
     </BrowserRouter> */}
   </>
  )
}

export default App



// {
//   "title": "Node",
//   "imageSrc": "skills/node.png"
// },
// {
//   "title":"Firebase",
//   "imageSrc":"skills/firebase.png"
// },
// {
//   "title": "GraphQL",
//   "imageSrc": "skills/graphql.png"
// },
// {
//   "title": "MongoDB",
//   "imageSrc": "skills/mongodb.png"
// },