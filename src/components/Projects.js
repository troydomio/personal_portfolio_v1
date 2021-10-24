import React from 'react'

const Projects = () => {
    return (
        
       
       
            
             <div className="project-container">

             <div className="project-cards">
            <p>Potato Games</p>
            <p>React + Rails</p>
            <a href="https://murmuring-ridge-09826.herokuapp.com/" target="_blank" ><img className="project-img" src="https://live.staticflickr.com/65535/51624734689_2b4d3977d3_b.jpg" ></img></a>
            <p>This project is a CRUD (create, read, update, delete) full-stack application where users can perform all of the basic operations of persistent storage. </p>
            <a href="https://murmuring-ridge-09826.herokuapp.com/"  target="_blank" className="click">DEMO</a>
            <a href="https://github.com/troydomio/potato-games" className="click" target="_blank" >CODE</a>
            </div>

            <div className="project-cards">
            <p>Page Visitor Counter</p>
            <p>React + Rails</p>
            <a href="https://glacial-plains-09503.herokuapp.com/" target="_blank" ><img className="project-img" src="https://live.staticflickr.com/65535/51624165676_5549ea7eab_b.jpg" ></img></a>
            <p>This project counts the views of visitors and updates the view count in the rails api backend. </p>
            <a href="https://glacial-plains-09503.herokuapp.com/"  target="_blank" className="click">DEMO</a>
            <a href="https://github.com/troydomio/viewcounter_v3" className="click" target="_blank" >CODE</a>
            </div>
            
            <div className="project-cards">
             <p>Birthday Coutdown Generator</p>
            <p>JavaScript + CSS + HTML</p>
            <a href="https://troydomio.github.io/birthdaycountdowntimer/" target="_blank"><img className="project-img" src="https://live.staticflickr.com/65535/51606036175_f85903115f_b.jpg"></img></a>
            <p>This project is a birthday countdown generator. In order for the countdown to be generated a user must input their birth day, month and year.</p>
            <p></p>
            <a href="https://troydomio.github.io/birthdaycountdowntimer/" className="click" target="_blank">DEMO</a>
            <a href="https://github.com/troydomio/birthdaycountdowntimer" className="click" target="_blank">CODE</a>
            </div>

            <div className="project-cards">
            <p>New Years Countdown Timer</p>
            <p>JavaScript + CSS + HTML</p>
            <a href="https://troydomio.github.io/newyearscountdown/" target="_blank"><img className="project-img" src="https://live.staticflickr.com/65535/51598123108_7e33bc0ba9_b.jpg"></img></a>
            <p>This project is a simple timer counting down the days, hours, minutes and seconds until January 1, 2022!</p>
            <a href="https://troydomio.github.io/newyearscountdown/" target="_blank" className="click">DEMO</a>
            <a href="https://github.com/troydomio/newyearscountdown" target="_blank"className="click">CODE</a>
            </div>

            </div>
        
    )
}

export default Projects
