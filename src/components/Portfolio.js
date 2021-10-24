import '../Project.css';


const Portfolio = () => {
    return (
        <div className="main">
            <div className="background">
            <div className="heroportfolio">
                <img className="bioimage" src="https://media-exp1.licdn.com/dms/image/C4D03AQEf4j-DqKxM2Q/profile-displayphoto-shrink_800_800/0/1633728751791?e=1640217600&v=beta&t=udTYdh19l_-5ivpjurU4KfGX23iUUr930No020XrT2E"/>
            <p className="nameportfolio">Troy Domio</p>
            <p className="bioportfolio">Web Developer</p>
            <p className="bioportfolio">she/her</p>
        
            <div className="whitebar">
            <div className="buttonsportfolio">
            <p className="githubportfolio"><a href="https://github.com/troydomio" target="_blank">GitHub</a></p>
            <p className="linkedinportfolio"><a href="https://www.linkedin.com/in/troydomio/">Linkedin</a></p>
            </div>
            </div>
            
            </div>

            <div className="helloportfolio">
            <p className="howdy">Howdy</p>
            <p>I’m a software engineer specializing in front-end web development & design.</p>
            <div className="buttonsportfolio">
            <a href="https://drive.google.com/file/d/1Yuv1sePsU5zFL_UJa7JX1Jb2_5v3RJLg/view?usp=sharing" target="_blank"><p className="resumeportfolio">Check out my resume!</p></a>
            </div>
            <p>As a recent graduate of Flatiron School's Software Engineering program I have worked with many languages, frameworks, and tools such as:
           <div className="skillsportfolio">

           <ul> Languages
            <li>JavaScript (ES6)</li>
            <li>Ruby</li>
             <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            </ul>

            <ul>Frameworks
             <li>React</li>
             <li>Ruby on Rails</li>
             <li>Sinatra</li>
            <li>Wordpress</li>
            </ul>

            <ul>Tools
             <li>Zsh</li>
            <li>Bash</li>
            <li>Git & Github</li>
             <li>Chrome Dev Tools</li>
             <li>Postman</li>
             </ul>

            </div>
            </p>
           
            </div>
            
            </div>
        </div>
    )
}

export default Portfolio
