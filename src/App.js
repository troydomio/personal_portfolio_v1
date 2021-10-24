import './App.css';
import Projects from './components/Projects'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';





function App() {
  return (
  <div>
    <NavBar/>
    
      
      <Portfolio/>
      <Projects/>
      {/* <Footer/>  */}
  </div> 
  );
}

export default App;
