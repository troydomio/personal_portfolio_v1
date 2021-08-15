import './App.css';
import styled from 'styled-components'
import { useState } from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer';

const Container1 = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {

  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className="App">
      
      <body className={darkMode ? "dark" : "light"} >
        {/* <span className="sun">☼</span> */}
        <div className="container">
      <label className="switch">
        <input type="checkbox" onChange={()=> setDarkMode(!darkMode)}/>
        <span className="slider round"> </span>
      </label>
      {/* <span className="moon"> ☽</span> */}
     
      </div>
      
        <Container1>
      <Intro/>
      </Container1>

      <Container1>
      <Skills/>
      </Container1>

      <Container1>
      <Projects/>
      </Container1>

      <Footer/>
      
       </body>  
      
          
    
    </div>
  );
}

export default App;
