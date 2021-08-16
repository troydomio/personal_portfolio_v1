
const ToggleTheme = () => {
   
    const handleClick = () => {
        document.body.classList.toggle('dark')
    }
    return (
       
     <div className="toggleContainer">
      <div className="switchContainer" onClick={handleClick}> 
        <div className="moon"></div>
        <div className="switchCircle"> 
        </div>
      </div> 
    </div>
        
    )
}

export default ToggleTheme
