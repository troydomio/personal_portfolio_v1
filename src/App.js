import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer';
import ToggleTheme from './components/ToggleTheme';
import Portfolio from './components/Portfolio';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjectNew from './components/ProjectNew';
import {NavLink} from 'react-router-dom'


function App() {
  return (
  <div>
    <ToggleTheme/>
    <Router>
      <Switch>
      <Route exact path="/">
      <Portfolio/>
      </Route>
      </Switch>
      <Switch>
      <Route path="/projects" activeClassName="switchContainer2">
      <Projects/>
      </Route>
      </Switch>
    
    {/* <ProjectNew/> */}
    {/* <Hero/> */}
    {/* <Skills/>
    <Projects/>
    <Footer/> */}
    </Router>
  </div> 
  );
}

export default App;
