import React from 'react'

const Projects = () => {
    return (
        <div className="projectportfolio">
             <p></p>
             
             <div className="project-container">
            
            <div className="project-cards">
            <p>New Years Countdown Timer</p>

            <a href="https://troydomio.github.io/newyearscountdown/" target="_blank"><img className="project-img" src="https://live.staticflickr.com/65535/51598123108_7e33bc0ba9_b.jpg"></img></a>

            <p>This project is a simple timer counting down the days, hours, minutes and seconds until January 1, 2022!</p>
            <a href="https://troydomio.github.io/newyearscountdown/" target="_blank" className="click">DEMO</a>
            <a href="https://github.com/troydomio/newyearscountdown" target="_blank"className="click">CODE</a>
            </div>

            <div className="project-cards">
            <p>Coming Soon</p>
            <img className="project-img" src="https://images.unsplash.com/photo-1496262967815-132206202600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1523&q=80"></img>
            <p></p>
            {/* <a href="https://troydomio.github.io/newyearscountdown/">DEMO</a>
            <a href="https://github.com/troydomio/newyearscountdown">CODE</a> */}
            </div>

            <div className="project-cards">
            <p>Coming Soon</p>
            <img className="project-img" src="https://images.unsplash.com/photo-1496262967815-132206202600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1523&q=80"></img>
            <p></p>
            {/* <a href="https://troydomio.github.io/newyearscountdown/">DEMO</a>
            <a href="https://github.com/troydomio/newyearscountdown">CODE</a> */}
            </div>

            </div>
        </div>
    )
}

export default Projects
