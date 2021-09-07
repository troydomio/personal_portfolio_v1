import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer';
import ToggleTheme from './components/ToggleTheme';


function App() {
  return (
  <div>
    <ToggleTheme/>
    <Hero/>
    <Skills/>
    {/* <Projects/> */}
    {/* <Footer/> */}
  </div> 
  );
}

export default App;
