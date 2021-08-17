import './App.css';
import Hero from './components/Intro';
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
  </div> 
  );
}

export default App;
