
const ToggleTheme = () => {
   
    const handleClick = () => {
        // document.body.classList.toggle('dark')
         
    }
    return (
       
     <div className="toggleContainer">
      <p className="navname"><span className="nameport">Troy Domio</span> / WEB DEVELOPER</p>

      <a href="/">
      <div className="switchContainer" > 
        <div className="moon">Home</div>
      </div> 
      </a>

      <a href="/projects">
      <div className="switchContainer2" > 
        <div className="moon2">Projects</div>
       
      </div> 
      </a>

    </div>
        
    )
}

export default ToggleTheme
